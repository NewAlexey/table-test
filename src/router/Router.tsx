import React from 'react';
import {
  Link,
  LinkProps,
  useMatch,
  useResolvedPath,
  useRoutes,
  Navigate,
} from 'react-router-dom';

import { CatalogueContainer } from '../containers/CatalogueContainer';
import { InventoryContainer } from '../containers/InventoryContainer';

export interface IRoute {
  path: string;
  title: string;
  element: React.ReactElement;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const CustomLink = ({ children, to }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} style={match ? matchRoute : notMatchRoute}>
      {children}
    </Link>
  );
};

export const APP_ROUTER: Array<IRoute> = [
  {
    path: '/',
    title: '',
    element: <Navigate to="catalogue" />,
  },
  {
    path: '/catalogue',
    title: 'Catalogue',
    element: <CatalogueContainer />,
  },
  {
    path: '/inventory',
    title: 'Inventory',
    element: <InventoryContainer />,
  },
];

export const AppRouterContent: React.FC = () => useRoutes(APP_ROUTER);

const matchRoute = {
  fontSize: '20px',
  color: '#EC6409',
  backgroundColor: '#eeeeee',
  padding: '10px 40px',
  borderBottom: '2px solid #EC6409',
};

const notMatchRoute = {
  fontSize: '20px',
  color: '#9C9C9D',
  backgroundColor: 'white',
  padding: '10px 40px',
  borderBottom: '2px solid #9C9C9D',
};
