export type DataValues = {
    name: string
    file: File[]
}

export type CreateClubCategoryProps = {
    handleClose: () => void
    handleCreate: (name: string, icon: string) => void
}