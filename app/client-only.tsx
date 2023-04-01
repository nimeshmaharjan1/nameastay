'use client';
import React, { FC, ReactNode, useEffect, useState } from 'react';

const ClientOnly: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return <>{children}</>;
};

export default ClientOnly;
