interface NavMenuProps {
  menuItems: string[];
  setActiveMenu: (value: string | null) => void;
}

export default function NavMenu({ menuItems, setActiveMenu }: NavMenuProps) {
  return (
    <div className="hidden lg:flex gap-8 text-xs font-bold uppercase">
      {menuItems.map((item) => (
        <div
          key={item}
          onMouseEnter={() => {
            if (
              item === "Product" ||
              item === "Customers" ||
              item === "Integrations" ||
              item === "Resources" ||
              item === "Company"
            ) {
              setActiveMenu(item);
            } else {
              setActiveMenu(null);
            }
          }}
          className="cursor-pointer tracking-wide hover:text-white transition-colors duration-200"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
