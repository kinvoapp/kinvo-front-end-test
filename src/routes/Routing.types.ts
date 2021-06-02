import React, { ReactNode } from 'react';

export interface RoutingProps {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  isLegacy?: boolean;
}

export interface Routes {
  path: string;
  exact: boolean;
  label: string;
  navigable: boolean;
  icon: ReactNode;
  list?: Routes[];
  alternativeUrls?: string[];
}
