export type DataValues = {
    id: string
    name: string
    image: File[] | string
}

export type ClubFormProps = {
    handleClose: () => void
    handleFunction: (data: {
        id: string
        name: string
        image: File[] | string
    }) => void
    defaultValues: DataValues
}
