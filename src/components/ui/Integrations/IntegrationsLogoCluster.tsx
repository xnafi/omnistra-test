import { MotionValue } from "framer-motion";
import IntegrationFinalLogo from "./IntegrationFinalLogo";
import IntegrationFloatingLogo from "./IntegrationFloatingLogo";

const logos = [
  { src: "/logos/nice.png", x: -520, y: -200, rotate: -20 },
  { src: "/logos/latitude.png", x: 420, y: -150, rotate: 18 },
  { src: "/logos/salesforce.png", x: -400, y: 260, rotate: 10 },
  { src: "/logos/fiserv.png", x: 300, y: 320, rotate: -15 },
  { src: "/logos/elementor.png", x: 450, y: 180, rotate: 25 },
];

export default function IntegrationsLogoCluster({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  return (
    <>
      {logos.map((logo, index) => (
        <IntegrationFloatingLogo
          key={index}
          {...logo}
          scrollProgress={scrollProgress}
        />
      ))}

      <IntegrationFinalLogo scrollProgress={scrollProgress} />
    </>
  );
}
