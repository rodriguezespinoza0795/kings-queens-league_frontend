import { TournamentInput } from "@/types";

export type TournamentFormProps = {
    handleClose: () => void
    handleFunction: (data: TournamentInput) => void
    defaultValues: TournamentInput
    catalogues: { clubCategory: any[] }
}
