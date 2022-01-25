import { ITableData } from '../interfaces/interfaces';

export const COLOURS = {
  orange: '#ec6409',
  grey: '#ECF0F4',
  bcGrey: '#f3f6f9',
  bcTableEven: '#FBFCFD',
  weakOrange: '#F4E9E2',
  statusRed: '#EC2C09',
  statusYellow: '#ECAF09',
  statusGreen: '#1AEC09',
  statusBCGrey: '#EDF1F4',
};

export interface ITableConfig {
  header: string;
  columnWidth: string;
}

export const selectMockData = [
  'Column 6',
  'Column 7',
  'Column 8',
  'Column 9',
  'Column 10',
];

export const tableConfig: ITableData = {
  capId: 'ID No',
  manufacturer: 'Manufacturer',
  model: 'Model',
  bodyType: 'Range',
  modelDescription: 'Derivative',
  status: 'Status',
  column6: 'Column 6',
  column7: 'Column 7',
  column8: 'Column 8',
  column9: 'Column 9',
  column10: 'Column 10',
};

export const reversedTableConfig = {
  'ID No': 'capId',
  Manufacturer: 'manufacturer',
  Model: 'model',
  Range: 'bodyType',
  Derivative: 'modelDescription',
  Status: 'status',
  'Column 6': 'column6',
  'Column 7': 'column7',
  'Column 8': 'column8',
  'Column 9': 'column9',
  'Column 10': 'column10',
};

export enum StatusList {
  draft = 'Draft',
  published = 'Published',
  readyToPublish = 'Ready to publish',
}

export const defaultTableConfig: Array<ITableConfig> = [
  {
    header: tableConfig.capId,
    columnWidth: '5',
  },
  {
    header: tableConfig.manufacturer,
    columnWidth: '10',
  },
  {
    header: tableConfig.model,
    columnWidth: '10',
  },
  {
    header: tableConfig.bodyType,
    columnWidth: '10',
  },
  {
    header: tableConfig.modelDescription,
    columnWidth: '23',
  },
  {
    header: tableConfig.status,
    columnWidth: '9',
  },
  {
    header: '',
    columnWidth: '17',
  },
];
