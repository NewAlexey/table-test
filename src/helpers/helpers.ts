import { ITableConfig, reversedTableConfig } from './config';
import { ITableData, SortType } from '../interfaces/interfaces';

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function getUpdatedWidthTableConfig(
  value: string,
  tableHeader: string,
  tableConfig: Array<ITableConfig>,
): Array<ITableConfig> {
  return tableConfig.map((config) => {
    if (config.header === tableHeader) {
      return {
        ...config,
        columnWidth: value,
      };
    }

    return config;
  });
}

export function getUpdatedHeadersColumnConfig(
  newTableHeader: string,
  indexOfColumn: number,
  tableConfig: Array<ITableConfig>,
): Array<ITableConfig> {
  return tableConfig.reduce((acc: Array<ITableConfig>, config, index) => {
    acc.push(config);
    if (indexOfColumn === index) {
      const newColumn = {
        header: newTableHeader,
        columnWidth: '5',
      };
      acc.push(newColumn);
    }

    return [...acc];
  }, []);
}

function getMappedTableHeader(tableHeader: string): string {
  return reversedTableConfig[tableHeader as keyof typeof reversedTableConfig];
}

function getMappedSelectHeader(select: string): string {
  return reversedTableConfig[select as keyof typeof reversedTableConfig];
}

export function getSortedTable(
  tableHeader: string,
  tableData: Array<ITableData>,
  sortDirection: SortType,
): Array<ITableData> {
  const dataField = getMappedTableHeader(tableHeader) as keyof ITableData;
  return tableData.sort((a, b) => {
    const valueA = getProperty(a, dataField);
    const valueB = getProperty(b, dataField);

    if (!valueA || !valueB) return 1;

    if (sortDirection === 'ASC') {
      return valueA < valueB ? -1 : 1;
    }
    return valueA < valueB ? 1 : -1;
  });
}

export function getSearchedTableData(
  searchInputValue: string,
  tableData: Array<ITableData>,
  initialTableData: Array<ITableData>,
): Array<ITableData> {
  if (!searchInputValue) return initialTableData;

  return initialTableData.filter(
    (item) =>
      item.capId.includes(searchInputValue) ||
      item.bodyType.includes(searchInputValue) ||
      item.model.includes(searchInputValue) ||
      item.status.includes(searchInputValue) ||
      item.manufacturer.includes(searchInputValue) ||
      item.modelDescription.includes(searchInputValue) ||
      item.column6?.includes(searchInputValue) ||
      item.column7?.includes(searchInputValue) ||
      item.column8?.includes(searchInputValue) ||
      item.column9?.includes(searchInputValue) ||
      item.column10?.includes(searchInputValue),
  );
}

export function getUpdatedTableData(
  newTableHeader: string,
  tableData: Array<ITableData>,
): Array<ITableData> {
  return tableData.map((tableItem) => ({
    ...tableItem,
    [getMappedSelectHeader(newTableHeader)]: 'newValue',
  }));
}
