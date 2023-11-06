export type DataValues = {
    id: string
    name: string
    lastName?: string | undefined
    nickName?: string | undefined
    image: File[] | string
    playerTypeId: number,
    positionId: number,
    clubId: number,
}

export type catalogueType = { clubs?: any[], positions?: any[], playerTypes?: any[], clubCategories?: any[] }

export type PlayerFormProps = {
    handleClose: () => void
    handleFunction: (data: {
        id: string
        name: string
        lastName?: string | undefined
        nickName?: string | undefined
        image: File[] | string
        playerTypeId: number,
        positionId: number,
        clubId: number,
    }) => void
    defaultValues: DataValues
    catalogues: catalogueType
}
