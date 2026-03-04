import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export const Rocket = () => {
    const group = useRef();
    const exhaust = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Continuous Axial Spin (Parallel to the red tip / longitudinal axis)
        if (group.current) {
            group.current.rotation.y = t * 4; // Spinning like a drill
            group.current.position.y = Math.sin(t * 1.5) * 0.1; // Keeping the slight bobbing
        }

        // Exhaust Pulse (Scale)
        if (exhaust.current) {
            exhaust.current.scale.setScalar(1 + Math.sin(t * 10) * 0.05); // Pulsing size
        }
    });

    // Custom "Egg/Teardrop" Profile for the Body
    const bodyGeometry = useMemo(() => {
        const points = [];
        // Bottom (Wide) -> Shoulder (Lowered for bigger tip)
        points.push(new THREE.Vector2(0, -1)); // Center Bottom
        points.push(new THREE.Vector2(0.3, -1)); // Flat Bottom edge
        points.push(new THREE.Vector2(0.7, -0.6)); // Wide point (Hip)
        points.push(new THREE.Vector2(0.7, 0.2)); // Straight-ish Middle
        points.push(new THREE.Vector2(0.42, 0.8)); // End of white body
        return new THREE.LatheGeometry(points, 32);
    }, []);

    // Tip Geometry (Larger)
    const tipGeometry = useMemo(() => {
        const points = [];
        points.push(new THREE.Vector2(0.42, 0.8)); // Match body end
        points.push(new THREE.Vector2(0, 1.3)); // Tip point
        return new THREE.LatheGeometry(points, 32);
    }, []);

    // Custom Shark Fin Shape (Simplified)
    const finShape = useMemo(() => {
        const shape = new THREE.Shape();
        // Define simple fin profile
        // Top point (attached to body)
        shape.moveTo(0, 0);
        // Curve OUT and DOWN to the tip
        shape.quadraticCurveTo(0.5, 0, 0.6, -0.4);
        // Curve BACK diagonally to the bottom attach point
        shape.lineTo(0.1, -0.8);
        // Line UP back to start (attached to body)
        shape.lineTo(0, 0);

        return shape;
    }, []);

    const extrudeSettings = useMemo(() => ({
        steps: 1,
        depth: 0.1, // Thickness
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 2
    }), []);

    // Custom Flame Shape (Teardrop / Bulb)
    const flameGeometry = useMemo(() => {
        const points = [];
        // Top (Wide at connection) -> Bottom (Pointy)
        points.push(new THREE.Vector2(0.3, 0)); // Top Wide (Base)
        points.push(new THREE.Vector2(0.5, -0.3)); // Bulge Out
        points.push(new THREE.Vector2(0.4, -0.8)); // Taper In
        points.push(new THREE.Vector2(0, -1.2)); // Tip point
        return new THREE.LatheGeometry(points, 32);
    }, []);


    // Material for the "Toy Plastic" Look
    const whitePlasticMaterial = new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        roughness: 0.2,
        metalness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        reflectivity: 0.5,
        envMapIntensity: 1
    });

    const redPlasticMaterial = new THREE.MeshPhysicalMaterial({
        color: "#ef4444",
        roughness: 0.2,
        metalness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.1
    });

    // Dark Metal for Window Frame
    const darkMetalMaterial = new THREE.MeshStandardMaterial({
        color: "#111827", // Very Dark Grey/Black
        roughness: 0.3,
        metalness: 0.8,
        envMapIntensity: 0 // Prevent white reflections
    });

    // Glass Material (Pure Black & Glossy - Standard to avoid Clearcoat Reflections)
    const glassMaterial = new THREE.MeshStandardMaterial({
        color: "#000000", // Pure Black
        roughness: 0.1,
        metalness: 0.5,
        envMapIntensity: 0 // Force it to stay black
    });

    // Flame Material (Glowing Solid - Yellowish Orange)
    const flameMaterial = new THREE.MeshStandardMaterial({
        color: "#f59e0b", // Amber/Orange
        emissive: "#f59e0b", // Glowing Orange-Yellow
        emissiveIntensity: 2,
        toneMapped: false,
    });


    return (
        <group ref={group} scale={0.35} rotation={[0, 0, 0]}>

            {/* --- ROCKET BODY (Custom Lathe Profile) --- */}
            <mesh geometry={bodyGeometry} material={whitePlasticMaterial} position={[0, 0.2, 0]} />

            {/* --- RED TIP --- */}
            <mesh geometry={tipGeometry} material={redPlasticMaterial} position={[0, 0.2, 0]} />

            {/* --- FINS (Shark Blades - 3 Sides) --- */}
            <group position={[0, -0.4, 0]}>
                {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((angle, i) => (
                    <group key={i} rotation={[0, angle, 0]} position={[0, 0, 0]}>
                        <mesh position={[0.65, 0, 0]} material={redPlasticMaterial}>
                            <extrudeGeometry args={[finShape, extrudeSettings]} />
                        </mesh>
                    </group>
                ))}
            </group>

            {/* --- WINDOW (Large Porthole) --- */}
            <group position={[0, 0.3, 0.62]} rotation={[0.1, 0, 0]}>
                {/* Frame */}
                <mesh material={darkMetalMaterial}>
                    <torusGeometry args={[0.25, 0.06, 16, 32]} />
                </mesh>
                {/* Glass (Black & Glossy) */}
                <mesh position={[0, 0, -0.04]} material={glassMaterial}>
                    <circleGeometry args={[0.22, 32]} />
                </mesh>
            </group>

            {/* --- ENGINE (Wide Nozzle) --- */}
            <mesh position={[0, -0.85, 0]} material={darkMetalMaterial}>
                <cylinderGeometry args={[0.35, 0.5, 0.4, 32]} />
            </mesh>

            {/* --- EXHAUST FLAME (Solid Cartoon Shape) --- */}
            <group position={[0, -1.0, 0]}>
                <mesh ref={exhaust} geometry={flameGeometry} material={flameMaterial} />
                <pointLight position={[0, -0.5, 0]} intensity={3} color="#f59e0b" distance={5} decay={2} />
            </group>

            {/* --- PARTICLES (Subtle Trail) --- */}
            <group position={[0, -2.5, 0]}>
                <Sparkles
                    count={20}
                    scale={[1, 3, 1]}
                    size={4}
                    speed={2}
                    opacity={0.3}
                    color="#f59e0b"
                    noise={0.2}
                />
            </group>
        </group>
    );
};
