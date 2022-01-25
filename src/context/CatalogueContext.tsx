import React from 'react';

import { defaultTableConfig, ITableConfig } from '../helpers/config';
import {
  getSearchedTableData,
  getSortedTable,
  getUpdatedHeadersColumnConfig,
  getUpdatedTableData,
  getUpdatedWidthTableConfig,
} from '../helpers/helpers';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { mockTableData } from '../helpers/constants';
import { ITableData, SortType } from '../interfaces/interfaces';

interface ICatalogueContext {
  tableData: Array<ITableData>;
  tableConfig: Array<ITableConfig>;
  searchData: string;
  handleSetSearchData: (searchInputData: string) => void;
  handleSetTableWidthSetting: (inputValue: string, tableHeader: string) => void;
  handleSetNewTableConfig: (optionValue: string, indexOfColumn: number) => void;
  handleSetSortedTable: (tableHeader: string) => void;
}

const CatalogueContext = React.createContext({} as ICatalogueContext);

export const CatalogueContextProvider: React.FC = ({ children }) => {
  const [initialTableData] = React.useState<Array<ITableData>>(mockTableData);
  const [tableData, setTableData] =
    React.useState<Array<ITableData>>(mockTableData);
  const [tableConfig, setTableConfig] =
    React.useState<Array<ITableConfig>>(defaultTableConfig);
  const [sortDirection, setSortDirection] = React.useState<SortType>('ASC');
  const [searchData, setSearchData] = React.useState('');

  useLocalStorage(tableConfig, setTableConfig, tableData, setTableData);

  const handleSetTableWidthSetting = React.useCallback(
    (inputValue, tableHeader) => {
      const updatedConfig = getUpdatedWidthTableConfig(
        inputValue,
        tableHeader,
        tableConfig,
      );
      setTableConfig(updatedConfig);
    },
    [tableConfig],
  );

  const handleSetNewTableConfig = React.useCallback(
    (newTableHeader, indexOfColumn) => {
      const newTableConfig = getUpdatedHeadersColumnConfig(
        newTableHeader,
        indexOfColumn,
        tableConfig,
      );

      const newTableData = getUpdatedTableData(newTableHeader, tableData);

      setTableConfig(newTableConfig);
      setTableData(newTableData);
    },
    [tableConfig, tableData],
  );

  const handleSetSortedTable = React.useCallback(
    (indexOfColumn) => {
      const sortedTableByClickedColumn = getSortedTable(
        indexOfColumn,
        tableData,
        sortDirection,
      );
      setTableData([...sortedTableByClickedColumn]);
      setSortDirection((prevState) => (prevState === 'ASC' ? 'DESC' : 'ASC'));
    },
    [sortDirection, tableData],
  );

  const handleSetSearchData = React.useCallback(
    (searchInputValue: string): void => {
      setSearchData(searchInputValue);
      const searchedTableData = getSearchedTableData(
        searchInputValue,
        tableData,
        initialTableData,
      );

      setTableData(searchedTableData);
    },
    [initialTableData, tableData],
  );

  const memoizedContextValue = React.useMemo(
    () => ({
      tableData,
      tableConfig,
      searchData,
      handleSetSearchData,
      handleSetNewTableConfig,
      handleSetTableWidthSetting,
      handleSetSortedTable,
    }),
    [
      tableData,
      tableConfig,
      searchData,
      handleSetSearchData,
      handleSetNewTableConfig,
      handleSetTableWidthSetting,
      handleSetSortedTable,
    ],
  );

  return (
    <CatalogueContext.Provider value={memoizedContextValue}>
      {children}
    </CatalogueContext.Provider>
  );
};

export const useCatalogueContext = (): ICatalogueContext =>
  React.useContext(CatalogueContext);
