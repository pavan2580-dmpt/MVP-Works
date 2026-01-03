export function OrbitalIcon() {
  return (
    <div
      style={{
        width: "48px",
        height: "48px",
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        style={{ overflow: "visible" }}
      >
        <defs>
          <style>{`
            @keyframes orbit {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            
            .orbital-container {
              animation: orbit 8s linear infinite;
              transform-origin: 24px 24px;
            }
          `}</style>
        </defs>

        {/* Center circle */}
        <circle cx="24" cy="24" r="6" fill="#8c25f4" />

        {/* Orbiting circles */}
        <g className="orbital-container">
          <circle cx="24" cy="6" r="5" fill="#8c25f4" opacity="0.8" />
          <circle cx="38.5" cy="11.5" r="5" fill="#8c25f4" opacity="0.8" />
          <circle cx="42" cy="24" r="5" fill="#8c25f4" opacity="0.8" />
          <circle cx="38.5" cy="36.5" r="5" fill="#8c25f4" opacity="0.8" />
          <circle cx="24" cy="42" r="5" fill="#8c25f4" opacity="0.8" />
          <circle cx="9.5" cy="36.5" r="5" fill="#8c25f4" opacity="0.8" />
          <circle cx="6" cy="24" r="5" fill="#8c25f4" opacity="0.8" />
          <circle cx="9.5" cy="11.5" r="5" fill="#8c25f4" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
