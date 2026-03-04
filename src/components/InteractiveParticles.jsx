import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;

attribute float aScale;
attribute vec3 aRandom;

varying vec3 vColor;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  // Interaction with mouse
  float dist = distance(modelPosition.xy, uMouse);
  float force = smoothstep(5.0, 0.0, dist); 
  
  vec3 dir = normalize(modelPosition.xyz - vec3(uMouse, 0.0));
  
  // Push away from mouse (Smoother interaction)
  modelPosition.xyz += dir * force * 2.5 * uHover;
  
  // Organic, smooth ambient movement
  modelPosition.x += sin(uTime * 0.5 + aRandom.x * 10.0) * 0.2;
  modelPosition.y += cos(uTime * 0.5 + aRandom.y * 10.0) * 0.2;
  modelPosition.z += sin(uTime * 0.5 + aRandom.z * 10.0) * 0.2;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  
  // Larger, fluffier particles
  gl_PointSize = aScale * (150.0 / -viewPosition.z);
  
  // Vibrant gradients
   vColor = mix(vec3(0.4, 0.4, 1.0), vec3(1.0, 0.3, 0.6), aRandom.x);
}
`;

const fragmentShader = `
varying vec3 vColor;

void main() {
  // Soft glow calculation
  float d = distance(gl_PointCoord, vec2(0.5));
  float alpha = 0.05 / (d * d) - 0.1; // Glow formula
  alpha = clamp(alpha, 0.0, 1.0);
  
  if(alpha < 0.01) discard;

  gl_FragColor = vec4(vColor, alpha * 0.8);
}
`;

export const InteractiveParticles = () => {
    const { viewport } = useThree();
    const materialRef = useRef();

    const count = 5000; // Increased count for larger area
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 20; // Wider X
            // Spread particles from top to very bottom of the scrollable area
            // Assuming viewport height is typical, -50 covers plenty of scroll depth
            positions[i * 3 + 1] = (Math.random() * 60) - 50; // Y: from 10 down to -40
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2; // Z depth
        }
        return positions;
    }, []);

    const scales = useMemo(() => {
        const scales = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            scales[i] = Math.random();
        }
        return scales;
    }, []);

    const randoms = useMemo(() => {
        const randoms = new Float32Array(count * 3);
        // ... (rest is same, but need to regenerate to match count)
        for (let i = 0; i < count; i++) {
            randoms[i * 3 + 0] = Math.random();
            randoms[i * 3 + 1] = Math.random();
            randoms[i * 3 + 2] = Math.random();
        }
        return randoms;
    }, []);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();

            // Mouse interaction logic
            // We need to account for the fact that these particles span a huge Y range
            // simplified interaction still works based on screen projection in shader
            if (state.mouse) {
                const x = (state.mouse.x * viewport.width) / 2;
                const y = (state.mouse.y * viewport.height) / 2;
                materialRef.current.uniforms.uMouse.value.lerp(new THREE.Vector2(x, y), 0.1);
            }
        }
    });

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uHover: { value: 1.0 },
        }),
        []
    );

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-aScale"
                    count={scales.length}
                    array={scales}
                    itemSize={1}
                />
                <bufferAttribute
                    attach="attributes-aRandom"
                    count={randoms.length / 3}
                    array={randoms}
                    itemSize={3}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                vertexColors={false}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
            />
        </points>
    );
};
