import clsx from "clsx";
import useMacbookStore from "../store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: "(max-width:1024px)" })

  return (
    <section id="product-viewer" className="py-12 ">
      <h2 className="text-3xl font-semibold mb-6">Take a closer look.</h2>

      <div className="controls mb-8">
        <p className="info text-gray-400 mb-4">
          MacBook Pro {scale === 0.06 ? `14"` : `16"`} in{" "}
          {color === "#adb5bd" ? "Silver" : "Space Black"}
        </p>

        {/* 👇 Improved Flex Layout */}
        <div className="flex justify-between items-center gap-6 max-w-sm mx-auto">
          {/* 🎨 Color Options */}
          <div className="flex gap-3">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "w-8 h-8 rounded-full bg-neutral-300 cursor-pointer border-2 transition-all duration-200",
                color === "#adb5bd"
                  ? "ring-2 ring-white scale-105"
                  : "border-transparent"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "w-8 h-8 rounded-full bg-neutral-900 cursor-pointer border-2 transition-all duration-200",
                color === "#2e2c2e"
                  ? "ring-2 ring-white scale-105"
                  : "border-transparent"
              )}
            />
          </div>

          {/* 💻 Size Options */}
          <div className="flex gap-2">
            <button
              onClick={() => setScale(0.06)}
              className={clsx(
                "px-3 py-1 rounded-md border text-sm transition-colors duration-200",
                scale === 0.06
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-gray-500 hover:border-white"
              )}
            >
              14"
            </button>
            <button
              onClick={() => setScale(0.08)}
              className={clsx(
                "px-3 py-1 rounded-md border text-sm transition-colors duration-200",
                scale === 0.08
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-gray-500 hover:border-white"
              )}
            >
              16"
            </button>
          </div>
        </div>
      </div>

      {/* 🧩 3D Viewer */}
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}

      >
        {/* Lighting for realism */}
        <StudioLights />

        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
