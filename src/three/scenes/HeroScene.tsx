import { Float, Points, PointMaterial, Sparkles } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleCloud() {
  const positions = useMemo(() => {
    const buffer = new Float32Array(260 * 3);

    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = (Math.random() - 0.5) * 10;
      buffer[i + 1] = (Math.random() - 0.5) * 8;
      buffer[i + 2] = (Math.random() - 0.5) * 7;
    }

    return buffer;
  }, []);

  return (
    <Points positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#8ce7ff" size={0.035} sizeAttenuation depthWrite={false} opacity={0.5} />
    </Points>
  );
}

function OrbitalSystem() {
  const clusterRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const satelliteARef = useRef<THREE.Mesh>(null);
  const satelliteBRef = useRef<THREE.Mesh>(null);
  const { pointer, viewport } = useThree();

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;

    if (clusterRef.current) {
      const targetX = pointer.y * 0.4;
      const targetY = pointer.x * 0.65;
      const scrollOffset = Math.sin(state.clock.elapsedTime * 0.2) * 0.16;

      clusterRef.current.rotation.x = THREE.MathUtils.lerp(clusterRef.current.rotation.x, targetX * 0.4, 0.04);
      clusterRef.current.rotation.y = THREE.MathUtils.lerp(clusterRef.current.rotation.y, targetY + elapsed * 0.06, 0.035);
      clusterRef.current.position.x = THREE.MathUtils.lerp(clusterRef.current.position.x, pointer.x * viewport.width * 0.08, 0.035);
      clusterRef.current.position.y = THREE.MathUtils.lerp(clusterRef.current.position.y, pointer.y * viewport.height * 0.08 + scrollOffset, 0.03);
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = elapsed * 0.18;
      coreRef.current.rotation.y = elapsed * 0.24;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = elapsed * 0.22;
      ringRef.current.rotation.x = Math.sin(elapsed * 0.45) * 0.45 + 1.1;
    }

    if (satelliteARef.current) {
      satelliteARef.current.position.x = Math.cos(elapsed * 0.72) * 1.9;
      satelliteARef.current.position.y = Math.sin(elapsed * 0.72) * 1.1;
      satelliteARef.current.position.z = Math.sin(elapsed * 0.55) * 0.9 - 1;
      satelliteARef.current.rotation.x = elapsed * 0.3;
      satelliteARef.current.rotation.y = elapsed * 0.25;
    }

    if (satelliteBRef.current) {
      satelliteBRef.current.position.x = Math.sin(elapsed * 0.55) * -2.4;
      satelliteBRef.current.position.y = Math.cos(elapsed * 0.55) * 1.4;
      satelliteBRef.current.position.z = Math.cos(elapsed * 0.45) * 0.7 + 0.5;
      satelliteBRef.current.rotation.x = -elapsed * 0.25;
      satelliteBRef.current.rotation.z = elapsed * 0.2;
    }
  });

  return (
    <group ref={clusterRef}>
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.75}>
        <mesh ref={coreRef} scale={1.45}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshPhysicalMaterial
            color="#7dd3fc"
            emissive="#38bdf8"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.15}
            wireframe
          />
        </mesh>
      </Float>

      <mesh ref={ringRef} rotation={[1.1, 0.2, 0.2]}>
        <torusGeometry args={[2.2, 0.028, 20, 180]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.75} />
      </mesh>

      <mesh ref={satelliteARef} scale={0.55}>
        <octahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color="#f8fafc" emissive="#93c5fd" emissiveIntensity={0.6} wireframe />
      </mesh>

      <mesh ref={satelliteBRef} scale={0.65}>
        <dodecahedronGeometry args={[0.68, 0]} />
        <meshStandardMaterial color="#67e8f9" emissive="#0ea5e9" emissiveIntensity={0.55} wireframe />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <>
      <color attach="background" args={['#020617']} />
      <fog attach="fog" args={['#020617', 6, 12]} />
      <ambientLight intensity={0.65} />
      <pointLight position={[0, 0, 3]} intensity={18} color="#7dd3fc" />
      <pointLight position={[2.5, 2, -1]} intensity={8} color="#c084fc" />
      <directionalLight position={[-4, 3, 4]} intensity={1.8} color="#e2e8f0" />
      <ParticleCloud />
      <Sparkles count={45} scale={[8, 6, 6]} size={2.4} speed={0.18} color="#a5f3fc" opacity={0.55} />
      <OrbitalSystem />
    </>
  );
}
