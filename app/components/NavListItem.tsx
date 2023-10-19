'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavListItemProps = {
  href: string;
  children: React.ReactNode;
  toggleNav: () => void;
};

const NavListItem = ({ href, children, toggleNav }: NavListItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <li
      className={`text-lg font-bold hover:text-accent transition ${
        isActive ? 'text-accent' : ''
      }`}
    >
      <Link href={href} onClick={toggleNav}>
        {children}
      </Link>
    </li>
  );
};
export default NavListItem;
