import { ClubCategory } from "@/types";

export type BasicTableProps = {
    headers:{key:string,name:string, type:string}[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rows: any[],
    deleteItem: (id:string) => void,
    updateItem: (data: ClubCategory) => void
}