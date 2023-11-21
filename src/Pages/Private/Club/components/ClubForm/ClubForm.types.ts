export type DataValues = {
    id: string
    name: string
    image: File[] | string
    clubCategoryId: string
    clubCountryId: string
    clubPresidentId: string
    color: string
}

export type ClubFormProps = {
    handleClose: () => void
    handleCreate: (data: {
        id: string
        name: string
        image: File[] | string
        clubCategoryId: string;
        clubCountryId: string
        clubPresidentId: string
        color: string
    }) => void
    handleUpdate: (data: {
        id: string
        name: string
        image: File[] | string
        clubCategoryId: string
        clubCountryId: string
        clubPresidentId: string
        color: string
    }) => void
    defaultValues: DataValues
    catalogues: { clubCategories: any[], clubCountries: any[], clubPresidents: any[] };
}
