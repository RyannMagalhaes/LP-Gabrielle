export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Psicoterapia', href: '#psicoterapia' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#duvidas' },
];
