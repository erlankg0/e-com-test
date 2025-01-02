import Image from 'next/image';
import Link from 'next/link';

import LogoIcon from '@/shared/assets/logo.webp';
import cls from './header.module.scss';
import { classNames } from '@/shared/lib/classnames';


export const Header = () => {
  return (
    <header className={classNames(cls.header)}>
      <Link href={'/'}>
        <Image src={LogoIcon} alt={'logo'} width={100} height={40} />
      </Link>
      <nav className={classNames(cls.nav)}>
        <Link href={'/shop'}>Shop</Link>
        <Link href={'/about'}>About</Link>
      </nav>
    </header>
  );
};