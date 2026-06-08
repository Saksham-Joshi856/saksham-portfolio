import * as THREE from "three";
import { memo, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { getAdaptiveDPR } from "../utils/device";
import { prefersReducedMotion } from "../utils/motion";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);

const spheres = [...Array(30)].map((_, index) => ({
  scale: [0.7, 1, 0.8, 1, 1][index % 5],
  materialIndex: index % imageUrls.length,
}));

type SphereProps = {
  scale: number;
  materialIndex: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  materials: THREE.MeshPhysicalMaterial[];
  isActive: boolean;
};

function SphereGeo({
  scale,
  materialIndex,
  r = THREE.MathUtils.randFloatSpread,
  materials,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);
  const impulseVec = useMemo(() => new THREE.Vector3(), []);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    const clampedDelta = Math.min(0.1, delta);
    impulseVec
      .copy(api.current.translation())
      .normalize()
      .multiplyScalar(-50 * clampedDelta * scale);
    impulseVec.y += -150 * clampedDelta * scale;
    api.current.applyImpulse(impulseVec, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={materials[materialIndex]}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);
  const targetVec = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    targetVec.set(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );
    vec.lerp(targetVec, 0.2);
    ref.current.setNextKinematicTranslation(vec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = prefersReducedMotion();

  const materials = useMemo(
    () =>
      textures.map(
        (texture) =>
          new THREE.MeshPhysicalMaterial({
            map: texture,
            emissive: "#ffffff",
            emissiveMap: texture,
            emissiveIntensity: 0.3,
            metalness: 0.5,
            roughness: 1,
            clearcoat: 0.1,
          })
      ),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const workSection = document.getElementById("work");
    if (!section || !workSection) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = workSection.getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "100px", threshold: 0.05 }
    );
    observer.observe(section);

    const navLinks = document.querySelectorAll(".header a[data-href]");
    const clickHandlers: Array<{ element: Element; handler: () => void }> = [];

    navLinks.forEach((elem) => {
      const handler = () => {
        const interval = setInterval(handleScroll, 50);
        setTimeout(() => clearInterval(interval), 1000);
      };
      elem.addEventListener("click", handler);
      clickHandlers.push({ element: elem, handler });
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
    };
  }, []);

  const physicsActive = isActive && isVisible && !reducedMotion;

  return (
    <div className="techstack" ref={sectionRef}>
      <h2> My Techstack</h2>

      <Canvas
        shadows
        dpr={[1, getAdaptiveDPR(1.75)]}
        frameloop={physicsActive ? "always" : "demand"}
        gl={{
          alpha: true,
          stencil: false,
          depth: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => {
          state.gl.toneMappingExposure = 1.5;
        }}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={physicsActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              materials={materials}
              isActive={physicsActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        {physicsActive && (
          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
};

export default memo(TechStack);
