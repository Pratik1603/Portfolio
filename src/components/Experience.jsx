import {
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Model } from "./Room3";
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
    if(section===2){
        animate(cameraPositionX, menuOpened ? -4: 0, {
          ...framerMotionConfig,
        });
        animate(cameraLookAtX, menuOpened? 20 : 0, {
          ...framerMotionConfig,
        });
    }
    animate(cameraPositionX, menuOpened? -2: 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened? 7 : 0, {
      ...framerMotionConfig,
    });
   
    
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" :(section===1?"Look":(section===3?"Talking":"Pose")));
   
    }, 600);
  }, [section]);

  const characterGroup = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
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
   
  });

  return (
    <>
      <Background />
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
            y: isMobile?-viewport.height + 0.5:-viewport.height + 1.3,
            x: isMobile ? 0.3 :viewport.width*(0.09),
            z: 7,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI / 2 : -Math.PI/4,
            rotateZ: 0,
            scaleX: isMobile ? 1.2 : 0.95,
            scaleY: isMobile ? 1.2 : 0.95,
            scaleZ: isMobile ? 1.2 : 0.95,
          },
          2: {
            x: isMobile ?1.4 :viewport.width*-0.4,
            y: isMobile?-viewport.height * 2.12 + 0.5:-viewport.height * 2.32+ 0.3,
            z: 1,
            rotateX: 0,
            rotateY: menuOpened?Math.PI/8:Math.PI / 4,
            rotateZ: 0,
            scaleX: isMobile?1.5:2,
            scaleY: isMobile?1.5:2,
            scaleZ: isMobile?1.5:2,
          },
          3: {
            y: -viewport.height *2.98 + 1,
            x: 0.1,
            z: 8.5,
            rotateX: 0,
            rotateY:menuOpened?-Math.PI/8 : -Math.PI / 4,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
        }}
      >
        
        <Avatar animation={characterAnimation} wireframe={section === 1} />
        
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[
          isMobile ? -0.6* officeScaleRatio: 0.3 * officeScaleRatio,
          isMobile ? -viewport.height / 8 : 5,
          isMobile ?5:8,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI /2}
        animate={{
          y: isMobile ? -viewport.height / 6 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
       
        <Model/>
       
        <group  ref={characterContainerAboutRef} name="Empty" position={[-1.7, 0.92, -0.35]}  rotation={[-Math.PI, 0.30, -Math.PI]}></group>
      </motion.group>

    </>
  );
};