export type DataValues = {
    id: string
    name: string
    image: File[] | string
}

export type ClubCategoryFormProps = {
    handleClose: () => void
    handleCreate: (data: {
        name: string
        image: File[] | string
    }) => void
    handleUpdate: (data: {
        id: string
        name: string
        image: File[] | string
    }) => void
    defaultValues: DataValues
}
