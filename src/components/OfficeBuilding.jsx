import React, { useMemo } from 'react';
import * as THREE from 'three';
import { RoundedBox } from '@react-three/drei';

export const OfficeBuilding = (props) => {
    // Building Colors
    const blueColor = "#4361ee";
    const lightBlueColor = "#bde0fe";
    const greyColor = "#8d99ae";
    const darkGreyColor = "#2b2d42";
    const greenColor = "#52b788";

    // Create windows grid
    const windows = useMemo(() => {
        const items = [];
        const rows = 8;
        const cols = 4;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                items.push({
                    pos: [
                        (c - (cols - 1) / 2) * 0.4,
                        (r - (rows - 1) / 2) * 0.5 + 0.5,
                        0.51
                    ]
                });
            }
        }
        return items;
    }, []);

    return (
        <group {...props}>
            {/* Base / Ground */}
            <mesh position={[0, -0.05, 0]}>
                <boxGeometry args={[6, 0.1, 6]} />
                <meshStandardMaterial color={darkGreyColor} />
            </mesh>

            {/* Road Lines */}
            <group position={[0, 0.01, 2]}>
                {[-2, -1, 0, 1, 2].map((x) => (
                    <mesh key={x} position={[x, 0, 0]}>
                        <boxGeometry args={[0.5, 0.01, 0.1]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                ))}
            </group>

            {/* Green Area */}
            <mesh position={[-2, 0.01, -1]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2, 4]} />
                <meshStandardMaterial color={greenColor} />
            </mesh>

            {/* Main Building Block */}
            <group position={[0.5, 2, 0.5]}>
                <RoundedBox args={[2, 4, 2]} radius={0.05} smoothness={4}>
                    <meshStandardMaterial color={blueColor} />
                </RoundedBox>

                {/* Roof */}
                <mesh position={[0, 2.01, 0]}>
                    <boxGeometry args={[2.05, 0.1, 2.05]} />
                    <meshStandardMaterial color={greyColor} />
                </mesh>

                {/* Windows - Front */}
                {windows.map((win, i) => (
                    <mesh key={i} position={[win.pos[0], win.pos[1] - 0.5, 1.01]}>
                        <planeGeometry args={[0.25, 0.35]} />
                        <meshStandardMaterial color={lightBlueColor} emissive={lightBlueColor} emissiveIntensity={0.2} />
                    </mesh>
                ))}

                {/* Windows - Side */}
                {windows.map((win, i) => (
                    <mesh key={`side-${i}`} position={[1.01, win.pos[1] - 0.5, win.pos[0]]} rotation={[0, Math.PI / 2, 0]}>
                        <planeGeometry args={[0.25, 0.35]} />
                        <meshStandardMaterial color={lightBlueColor} emissive={lightBlueColor} emissiveIntensity={0.2} />
                    </mesh>
                ))}
            </group>

            {/* Smaller Side Block */}
            <group position={[-0.75, 1.5, 0.5]}>
                <RoundedBox args={[1.5, 3, 2]} radius={0.05} smoothness={4}>
                    <meshStandardMaterial color={blueColor} />
                </RoundedBox>

                {/* Roof */}
                <mesh position={[0, 1.51, 0]}>
                    <boxGeometry args={[1.55, 0.1, 2.05]} />
                    <meshStandardMaterial color={greyColor} />
                </mesh>

                {/* Windows - Front */}
                {windows.slice(0, 12).map((win, i) => (
                    <mesh key={`small-front-${i}`} position={[win.pos[0] * 0.8, win.pos[1] * 0.8 - 0.8, 1.01]}>
                        <planeGeometry args={[0.2, 0.25]} />
                        <meshStandardMaterial color={lightBlueColor} emissive={lightBlueColor} emissiveIntensity={0.2} />
                    </mesh>
                ))}
            </group>

            {/* Trees (Simplified) */}
            <group position={[-2, 0.3, 0.5]}>
                {[0, 1, -1].map((z) => (
                    <group key={z} position={[0, 0, z]}>
                        <mesh position={[0, -0.2, 0]}>
                            <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                            <meshStandardMaterial color="#432818" />
                        </mesh>
                        <mesh position={[0, 0.1, 0]}>
                            <sphereGeometry args={[0.2]} />
                            <meshStandardMaterial color="#2d6a4f" />
                        </mesh>
                    </group>
                ))}
            </group>
        </group>
    );
};
