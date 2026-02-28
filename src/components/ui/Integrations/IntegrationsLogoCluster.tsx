import { MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import IntegrationFinalLogo from "./IntegrationFinalLogo";
import IntegrationFloatingLogo from "./IntegrationFloatingLogo";

const logos = [
  // Top row
  { src: "/logos/nice.png", x: -0.95, y: -0.45 },
  { src: "/logos/stripe.png", x: -0.4, y: -0.6 },
  { src: "/logos/latitude.png", x: 0.95, y: -0.6 },
  { src: "/logos/elementor.png", x: 0.55, y: -0.45 },

  // Mid layer
  { src: "/logos/zendesk.png", x: -0.8, y: -0.05, rotate: -8 },
  { src: "/logos/slack.png", x: 0.7, y: 0.0, rotate: 10 },

  // Lower mid
  { src: "/logos/salesforce.png", x: -0.45, y: 0.35, rotate: 12 },

  // Bottom row
  { src: "/logos/hubspot.png", x: -0.9, y: 0.55, rotate: 18 },
  { src: "/logos/fiserv.png", x: 0.4, y: 0.5, rotate: -8 },
  { src: "/logos/shopify.png", x: 1, y: 0.5, rotate: 14 },
];

export default function IntegrationsLogoCluster({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const [radius, setRadius] = useState(400); // SSR-safe default

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(150);
      else if (width < 1024) setRadius(300);
      else setRadius(500);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <>
      {logos.map((logo, index) => (
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