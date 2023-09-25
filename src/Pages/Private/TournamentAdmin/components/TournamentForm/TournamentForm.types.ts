import { TournamentRoundInput, Club } from "@/types";

export type TournamentFormProps = {
    handleClose: () => void
    handleFunction: (data: TournamentRoundInput) => void
    catalogues: Club[] | undefined
}
