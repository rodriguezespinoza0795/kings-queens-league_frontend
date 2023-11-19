export type catalogueType = { clubs?: any[], positions?: any[], playerTypes?: any[], clubCategories?: any[] }

export type BasicTableProps = {
  headers: { key: string; name: string; type: string }[];
  name: string;
  rows: any[];
  catalogues?: catalogueType;
  deleteItem: (data: any) => void;
  updateItem: (data: any) => void;
  detailsItem?: (id: number) => void;
  filter?: boolean
};
