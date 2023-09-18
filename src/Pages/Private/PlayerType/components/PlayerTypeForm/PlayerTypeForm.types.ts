export type DataValues = {
    id: string
    name: string
}

export type PlayerTypeFormProps = {
    handleClose: () => void
    handleFunction: (data: {
        id: string
        name: string
    }) => void
    defaultValues: DataValues
}
