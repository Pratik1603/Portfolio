import * as THREE from "three";
import {
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { InteractiveParticles } from "./InteractiveParticles";
import { Model } from "./Room3";
import { Rocket } from "./Rocket";
import { OfficeBuilding } from "./OfficeBuilding";
export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    if (section === 2) {
      animate(cameraPositionX, menuOpened ? -4 : 0, {
        ...framerMotionConfig,
      });
      animate(cameraLookAtX, menuOpened ? 20 : 0, {
        ...framerMotionConfig,
      });
    }
    animate(cameraPositionX, menuOpened ? -2 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 7 : 0, {
      ...framerMotionConfig,
    });


  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : (section === 1 ? "Look" : (section === 4 ? "Talking" : "Pose")));

    }, 600);
  }, [section]);

  const characterGroup = useRef();
  const rocketRef = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 4) {
      curSection = 4;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    if (section === 0) {
      characterContainerAboutRef.current.getWorldPosition(
        characterGroup.current.position
      );
    }

    // Animate Rocket based on scroll
    // It starts at the top and moves down with the scroll
    if (rocketRef.current) {
      // Calculate scroll progress (0 to 1)
      const scrollOffset = data.scroll.current;

      // Vertical Movement (Linear Down)
      const startY = 3;
      // Calculate total scroll distance
      const scrollHeight = (data.pages - 1) * viewport.height;
      // Changed: only subtract scrollHeight so it stays at the same screen height it started at
      // and add 0.5 to keep it slightly more "above" as requested.
      const endY = startY - scrollHeight - 1;
      const y = startY + (endY - startY) * scrollOffset;

      // Horizontal Movement (Sine Wave)
      const amplitude = isMobile ? 0.8 : 5;
      const frequency = 3 * Math.PI;
      const x = amplitude * Math.sin(frequency * scrollOffset - Math.PI / 2);

      rocketRef.current.position.x = x;
      rocketRef.current.position.y = y;

      // Target rotation centered at -Math.PI (pointing down)
      rocketRef.current.rotation.z = -Math.PI;

      rocketRef.current.rotation.x = Math.PI / 6;
      // Note: Axial spin is handled internally by Rocket.jsx
    }


  });

  return (
    <>
      <InteractiveParticles />

      {/* 3D Rocket Companion */}
      <group ref={rocketRef} position={[isMobile ? -1.5 : -5, 3.5, 2]}>
        <Rocket />
      </group>

      <motion.group
        ref={characterGroup}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: officeScaleRatio,
            scaleY: officeScaleRatio,
            scaleZ: officeScaleRatio,
          },
          1: {
            y: isMobile ? -viewport.height + 0.5 : -viewport.height + 1.3,
            x: isMobile ? 1.0 : viewport.width * (0.09),
            z: 7,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI / 2 : -Math.PI / 4,
            rotateZ: 0,
            scaleX: isMobile ? 1.0 : 0.95,
            scaleY: isMobile ? 1.0 : 0.95,
            scaleZ: isMobile ? 1.0 : 0.95,
          },
          2: {
            x: isMobile ? 1.5 : viewport.width * 0.25,
            y: isMobile ? -viewport.height * 2.12 + 0.5 : -viewport.height * 2 + 1,
            z: 7,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI / 2 : -Math.PI / 6,
            rotateZ: 0,
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
          },
          3: {
            x: isMobile ? -1.5 : viewport.width * -0.35,
            y: isMobile ? -viewport.height * 3.12 + 0.5 : -viewport.height * 3.32 + 0.3,
            z: 2,
            rotateX: 0,
            rotateY: isMobile ? Math.PI / 4 : (menuOpened ? Math.PI / 8 : Math.PI / 4),
            rotateZ: 0,
            scaleX: isMobile ? 1.2 : 2,
            scaleY: isMobile ? 1.2 : 2,
            scaleZ: isMobile ? 1.2 : 2,
          },
          4: {
            y: -viewport.height * 3.98 + 1,
            x: 0.35,
            z: 8.5,
            rotateX: 0,
            rotateY: menuOpened ? -Math.PI / 8 : -Math.PI / 4,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
        }}
      >

        <Avatar animation={characterAnimation} wireframe={section === 1} />

      </motion.group>
      <ambientLight intensity={0.2} />
      <motion.group
        position={[
          isMobile ? 0 : 0.3 * officeScaleRatio,
          isMobile ? viewport.height / 6 : 5,
          isMobile ? 5 : 8,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 2}
        animate={{
          y: isMobile ? -viewport.height / 6 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >

        <Model />

        <group ref={characterContainerAboutRef} name="Empty" position={[-1.7, 0.92, -0.35]} rotation={[-Math.PI, 0.30, -Math.PI]}></group>
      </motion.group>

      {/* Experience Section 3D Building */}
      <motion.group
        position={[isMobile ? 0 : -4, isMobile ? -viewport.height * 2 + viewport.height / 3 : -viewport.height * 2 - 1, 3]}
        rotation-y={Math.PI / 4}
        animate={{
          y: section === 2 ? (isMobile ? -viewport.height * 2 + viewport.height / 3 : -viewport.height * 2 - 1) : -viewport.height * 2 - 1.5,
          scale: section === 2 ? (isMobile ? 0 : 0.6) : 0,
          opacity: section === 2 ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <OfficeBuilding />
      </motion.group>

    </>
  );
};