
import React, { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

type MousePosition = {
  x: number;
  y: number;
};

export const FollowerPointerCard = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [cursorPosition, setCursorPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isInside, setIsInside] = useState<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const cursorAnimationRef = useRef<number | null>(null);

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const targetX = e.clientX - rect.left;
      const targetY = e.clientY - rect.top;
      const globalX = e.clientX;
      const globalY = e.clientY;

      // Animate card position
      const animate = () => {
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;

        setMousePosition({ x: currentX, y: currentY });

        if (
          Math.abs(targetX - currentX) > 0.1 ||
          Math.abs(targetY - currentY) > 0.1
        ) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      // Animate cursor position (faster for cursor)
      const animateCursor = () => {
        cursorX += (globalX - cursorX) * 0.15;
        cursorY += (globalY - cursorY) * 0.15;

        setCursorPosition({ x: cursorX, y: cursorY });

        if (
          Math.abs(globalX - cursorX) > 0.1 ||
          Math.abs(globalY - cursorY) > 0.1
        ) {
          cursorAnimationRef.current = requestAnimationFrame(animateCursor);
        }
      };

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (cursorAnimationRef.current) {
        cancelAnimationFrame(cursorAnimationRef.current);
      }
      animate();
      animateCursor();
    };

    const handleMouseEnter = () => {
      setIsInside(true);
      if (containerRef.current) {
        containerRef.current.style.cursor = "none";
      }
    };

    const handleMouseLeave = () => {
      setIsInside(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = "default";
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (cursorAnimationRef.current) {
        cancelAnimationFrame(cursorAnimationRef.current);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.style.cursor = "default";
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (cursorAnimationRef.current) {
        cancelAnimationFrame(cursorAnimationRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className || ""}`}>
      {children}
      {/* Custom Cursor */}
      {isInside && (
        <div
          ref={cursorRef}
          className="pointer-events-none fixed z-[9999] rounded-full bg-blue-500 shadow-lg transition-opacity duration-200"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
            width: "12px",
            height: "12px",
          }}
        />
      )}
      {/* Following Pointer Card */}
      {isInside && (
        <div
          ref={cardRef}
          className="pointer-events-none absolute z-50 rounded-lg border border-slate-800 bg-slate-900/95 backdrop-blur-sm shadow-xl transition-opacity duration-200"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -100%)",
            marginTop: "-8px",
          }}
        >
          <div className="flex items-center gap-2 px-3 py-2">
            {title || (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <p className="text-sm font-medium text-white">MVP Works</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
