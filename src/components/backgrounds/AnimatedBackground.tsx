import DotField from "./DotField";
import ColorBends from "./ColorBlend";

interface AnimatedBackgroundProps {
  variant?: "dots" | "gradient" | "both";
}

export default function AnimatedBackground({
  variant = "both",
}: AnimatedBackgroundProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {(variant === "gradient" || variant === "both") && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#57006a"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.0}
            bandWidth={6}
            transparent
            autoRotate={1}
            color="#A855F7"
          />
        </div>
      )}

      {(variant === "dots" || variant === "both") && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        >
          <DotField
            dotRadius={1}
            dotSpacing={14}
            cursorRadius={300}
            bulgeStrength={50}
            gradientFrom="#A855F7"
            gradientTo="#B497CF"
          />
        </div>
      )}
    </div>
  );
}