"use client";

import { useEffect, useRef, useState } from "react";

const SVG_URL = "/images/web-space-hero-baked.svg";

export default function BackgroundMesh() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [markup, setMarkup] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadSvg() {
      try {
        const response = await fetch(SVG_URL);
        const text = await response.text();

        if (!isMounted) return;
        setMarkup(text);
      } catch (error) {
        console.error("Failed to load background SVG:", error);
      }
    }

    loadSvg();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!markup || !wrapperRef.current) return;

    const svg = wrapperRef.current.querySelector("svg");
    if (!svg) return;

    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.display = "block";

    const rootGroup = svg.querySelector("g");
    if (rootGroup) {
      rootGroup.setAttribute("data-mesh-group", "true");
    }
  }, [markup]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </div>
  );
}