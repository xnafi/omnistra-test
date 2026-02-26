export interface CustomersCardProps {
  title: string;
  subtitle?: string;
  stat?: string;
  description?: string;
  tag?: string;
}
export interface IntegrationCardProps {
  title: string;
  subtitle: string;
}

export interface MegaMenuProps {
  activeMenu: string;
}

export interface ProductCardProps {
  title: string;
  description: string;
  badge?: string;
}

export interface ResourceSidebarCardProps {
  title: string;
  children: React.ReactNode;
}

export interface CompanyCardProps {
  title: string;
  description: string;
}

export interface CompanySidebarCardProps {
  title: string;
  badge?: string;
}

export interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  menuItems: string[];
}