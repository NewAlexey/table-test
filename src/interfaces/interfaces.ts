export interface ITableData {
  capId: string;
  manufacturer: string;
  model: string;
  bodyType: string;
  modelDescription: string;
  status: string;
  column6?: string;
  column7?: string;
  column8?: string;
  column9?: string;
  column10?: string;
}

export type SortType = 'ASC' | 'DESC';
