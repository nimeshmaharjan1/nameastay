import Logo from '@/shared/components/logo';
import Search from '@/shared/components/search';
import React from 'react';
import UserMenu from './user-menu';

const Header = () => {
  return (
    <header className="fixed w-full border-b  z-10 shadow-sm">
      <div className="py-4 container">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo></Logo>
          <Search></Search>
          <UserMenu></UserMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
