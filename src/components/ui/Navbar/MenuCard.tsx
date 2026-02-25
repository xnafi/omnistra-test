interface MenuCardProps {
  title: string;
  description: string;
}

export default function MenuCard({ title, description }: MenuCardProps) {
  return (
    <div className="space-y-3 cursor-pointer hover:-translate-y-1 transition-transform duration-200">
      <h4 className="text-white font-semibold text-base">{title}</h4>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
