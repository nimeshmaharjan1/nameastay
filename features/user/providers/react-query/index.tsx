'use client';
import React, { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const ReactQueryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
