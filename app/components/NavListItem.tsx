'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavListItemProps = {
  href: string;
  children: React.ReactNode;
  closeNav: () => void;
};

const NavListItem = ({ href, children, closeNav }: NavListItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <li
      className={`font-bold hover:text-white transition ${
        isActive ? 'text-white' : 'text-white/60'
      }`}
    >
      <Link href={href} onClick={closeNav}>
        {children}
      </Link>
    </li>
  );
};
export default NavListItem;
