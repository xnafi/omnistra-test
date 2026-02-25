import { ReButton } from "@/components/re-ui/ReButton";

export default function NavActions() {
  return (
    <div className="hidden lg:flex gap-6 text-sm font-medium">
      <ReButton href="/login" variant="dark">
        Sign In
      </ReButton>
      <ReButton href="/login" variant="primary">
        Sign Up
      </ReButton>
    </div>
  );
}
