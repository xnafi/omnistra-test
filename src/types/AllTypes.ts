export interface LenisOptions {
  duration?: number;
  lerp?: number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
}
export interface IntegrationItem {
  id: string;
  logo: string;
  angle: number; // degrees
  radius: number; // px
  animationDelay?: number;
}