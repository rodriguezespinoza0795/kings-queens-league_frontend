export type BasicTableProps = {
  headers: { key: string; name: string; type: string }[];
  rows: any[];
  deleteItem: (data: any) => void;
  updateItem: (data: any) => void;
  detailsItem?: (id: number) => void;
};
