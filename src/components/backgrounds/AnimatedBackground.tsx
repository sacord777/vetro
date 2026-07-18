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
            colors={[
              "#0F172A",
              "#334155",
              "#10B981",
            ]}
            speed={0.2}
            intensity={1.2}
            transparent
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
            gradientFrom="#10B981"
            gradientTo="#B497CF"
          />
        </div>
      )}
    </div>
  );
}