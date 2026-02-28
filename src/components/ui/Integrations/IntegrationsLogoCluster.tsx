"use client";

import { MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import IntegrationFinalLogo from "./IntegrationFinalLogo";
import IntegrationFloatingLogo from "./IntegrationFloatingLogo";

/* DESKTOP / TABLET LAYOUT */

const desktopLogos = [
  { src: "/logos/nice.png", x: -0.95, y: -0.45 },
  { src: "/logos/stripe.png", x: -0.4, y: -0.6 },
  { src: "/logos/latitude.png", x: 0.95, y: -0.6 },
  { src: "/logos/elementor.png", x: 0.55, y: -0.45 },

  { src: "/logos/zendesk.png", x: -0.8, y: -0.05 },
  { src: "/logos/slack.png", x: 0.7, y: 0.0 },

  { src: "/logos/salesforce.png", x: -0.45, y: 0.35 },

  { src: "/logos/hubspot.png", x: -0.9, y: 0.55 },
  { src: "/logos/fiserv.png", x: 0.4, y: 0.5 },
  { src: "/logos/shopify.png", x: 1, y: 0.5 },
];

/* MOBILE LAYOUT */

const mobileLogos = [
  { src: "/logos/nice.png", x: -0.7, y: -1 },
  { src: "/logos/stripe.png", x: -0.1, y: -1.3 },
  { src: "/logos/latitude.png", x: 0.7, y: -1 },
  { src: "/logos/elementor.png", x: 0.1, y: -0.85 },

  { src: "/logos/zendesk.png", x: -0.75, y: 0.75 },
  { src: "/logos/slack.png", x: 0.75, y: 0.75 },

  { src: "/logos/hubspot.png", x: -0.55, y: 1.25 },
  { src: "/logos/fiserv.png", x: 0.25, y: 0.9 },
  { src: "/logos/shopify.png", x: 0.7, y: 1.3 },
];

export default function IntegrationsLogoCluster({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  /* Hydration-safe responsive state */

  const [isMobile, setIsMobile] = useState(false);
  const [radius, setRadius] = useState(400); // SSR-safe default

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      setIsMobile(width < 640);

      if (width < 640) setRadius(180);
      else if (width < 1024) setRadius(320);
      else setRadius(500);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const activeLogos = isMobile ? mobileLogos : desktopLogos;

  return (
    <>
      {activeLogos.map((logo, index) => (
        <IntegrationFloatingLogo
          key={index}
          src={logo.src}
          x={logo.x * radius}
          y={logo.y * radius}
          scrollProgress={scrollProgress}
        />
      ))}

      <IntegrationFinalLogo scrollProgress={scrollProgress} />
    </>
  );
}
