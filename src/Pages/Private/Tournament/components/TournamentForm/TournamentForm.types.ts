export type TournamentFormProps = {
    handleClose: () => void
    handleFunction: (data: { clubCategoryId: number, edition: string, name: string, numGroup: string }) => void
    defaultValues: { clubCategoryId: number, edition: string, name: string, numGroup: string }
    catalogues: { clubCategory: any[] }
}
