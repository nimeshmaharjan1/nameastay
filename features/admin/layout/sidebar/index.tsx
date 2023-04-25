import React from 'react';

import Link from 'next/link';
import { FiBox, FiUsers } from 'react-icons/fi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const AdminSidebar = () => {
  return (
    <aside className="fixed w-64 h-screen shadow sidebar-section">
      <section className="logo-section h-20 flex items-center justify-start px-6">
        <h1 className="text-primary font-bold text-2xl">Nameastay</h1>
      </section>
      <nav className="pt-2.5 nav-section">
        <Link href="/dashboard">
          <MdOutlineSpaceDashboard className="w-6 h-6" /> Dashboard
        </Link>
        <Link href="/products">
          <FiBox className="w-6 h-6" /> Products
        </Link>
        <Link href="/products">
          <FiUsers className="w-6 h-6" /> Users
        </Link>
      </nav>

      <Link href="/products" className="absolute bottom-0 bg-base-200">
        <AiOutlineLeft className="w-6 h-6" /> Collapse
      </Link>
    </aside>
  );
};

export default AdminSidebar;