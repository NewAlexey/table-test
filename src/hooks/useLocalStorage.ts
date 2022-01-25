import React from 'react';
import { ITableConfig } from '../helpers/config';
import { ITableData } from '../interfaces/interfaces';

const { localStorage } = window;

export function setUpdatedTableConfigToLS(
  tableConfig: Array<ITableConfig>,
): void {
  localStorage.setItem('tableConfig', JSON.stringify(tableConfig));
}
export function setUpdatedTableDataToLS(tableData: Array<ITableData>): void {
  localStorage.setItem('tableData', JSON.stringify(tableData));
}

export function localStorageGetTableConfigWrapper(): Array<ITableConfig> | null {
  const storedTableConfig = localStorage.getItem('tableConfig');

  return storedTableConfig ? JSON.parse(storedTableConfig) : null;
}

export function localStorageGetTableDataWrapper(): Array<ITableData> | null {
  const storedTableData = localStorage.getItem('tableData');

  return storedTableData ? JSON.parse(storedTableData) : null;
}

export function getTableConfigFromLS(): Array<ITableConfig> | null {
  return localStorageGetTableConfigWrapper();
}

export function getTableDataFromLS(): Array<ITableData> | null {
  return localStorageGetTableDataWrapper();
}

export function useLocalStorage(
  tableConfig: Array<ITableConfig>,
  setTableConfig: React.Dispatch<React.SetStateAction<Array<ITableConfig>>>,
  tableData: Array<ITableData>,
  setTableData: React.Dispatch<React.SetStateAction<Array<ITableData>>>,
): void {
  React.useLayoutEffect((): void => {
    const tableConfigFromLS = getTableConfigFromLS();
    const tableDataFromLS = getTableDataFromLS();

    if (!tableConfigFromLS || !tableDataFromLS) return;

    setTableConfig(tableConfigFromLS);
    setTableData(tableDataFromLS);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    setUpdatedTableConfigToLS(tableConfig);
    setUpdatedTableDataToLS(tableData);
  }, [tableConfig]);
}
