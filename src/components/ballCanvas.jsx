import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, Preload,useTexture } from "@react-three/drei";
import { useRef } from "react";
import { framerMotionConfig } from "../config";

const Ball = (props) => {
  const ballRef = useRef();
  const [isRotating, setIsRotating] = useState(false);

  useFrame((state, delta) => {
    if (isRotating && ballRef.current) {
      ballRef.current.rotation.y += delta * 1.75; // Adjust the rotation speed here
      if (ballRef.current.rotation.y >= Math.PI/2) {
        setIsRotating(false);
        ballRef.current.rotation.y =0;
      }
    }
  });
  

  const handleClick = () => {
    setIsRotating(!isRotating);
  };
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} transition={0.6}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        ref={ballRef}
        castShadow
        receiveShadow
        scale={3}
        onClick={handleClick}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
         color="white" 
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.4}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
   
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
