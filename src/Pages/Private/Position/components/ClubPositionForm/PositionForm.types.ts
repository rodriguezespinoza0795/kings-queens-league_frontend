export type DataValues = {
    id: string
    name: string
    description: string
}

export type PositionFormProps = {
    handleClose: () => void
    handleFunction: (data: {
        id: string
        name: string
        description: string
    }) => void
    defaultValues: DataValues
}
