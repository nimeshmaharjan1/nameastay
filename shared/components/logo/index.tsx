'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <Image alt="Logo" priority className="hidden md:block cursor-pointer w-auto h-auto" height="100" width={100} src="/logo.png"></Image>
  );
};

export default Logo;
