import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Camera } from "./Camera";
import { Light } from "./Light";
import { Loading } from "./Loading";
import { StartScreen } from "../sub/StartScreen";
// import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from "@react-three/postprocessing";

export const Main = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <StartScreen />
        <Canvas
          camera={{
            fov: 60,
            far: 50000,
            near: 3,
          }}>
          <color attach="background" args={["black"]} />
          <ambientLight intensity={0} />
          {/* <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} />
        <Vignette eskil={false} offset={0.1} darkness={0.9} />
      </EffectComposer> */}
          {/* <ShapesIndex /> */}
          <Camera />
          <Light />
          <OrbitControls target={[0, 0, 0]} />
        </Canvas>
      </Suspense>
    </>
  );
};
