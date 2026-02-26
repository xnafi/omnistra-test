export default function DotDivider() {
  return (
    <div className="relative py-6">
      <div className="absolute inset-0 flex items-center">
        <div
          className="w-full border-t border-dotted border-white/40"
          style={{
            borderTopWidth: "1px",
          }}
        />
      </div>
    </div>
  );
}