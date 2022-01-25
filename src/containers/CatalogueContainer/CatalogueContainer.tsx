import React from 'react';
import { SearchComponent } from '../../components/SearchComponent';
import { TableComponent } from '../../components/TableComponent';

export const CatalogueContainer: React.FC = () => (
  <>
    <SearchComponent />
    <TableComponent />
  </>
);
