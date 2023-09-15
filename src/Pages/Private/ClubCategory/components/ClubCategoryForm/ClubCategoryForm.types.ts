export type DataValues = {
    id: string
    name: string
    image: File[] | string
}

export type ClubCategoryFormProps = {
    handleClose: () => void
    handleFunction: (data: {
        id: string
        name: string
        image: File[] | string
    }) => void
    defaultValues: DataValues
}
