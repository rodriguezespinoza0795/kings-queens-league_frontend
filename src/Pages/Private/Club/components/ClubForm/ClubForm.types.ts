export type DataValues = {
    id: string
    name: string
    image: File[] | string
    clubCategoryId: number
}

export type ClubFormProps = {
    handleClose: () => void
    handleFunction: (data: {
        id: string
        name: string
        image: File[] | string
        clubCategoryId: number
    }) => void
    defaultValues: DataValues
    catalogues: { clubCategory: any[] }
}
