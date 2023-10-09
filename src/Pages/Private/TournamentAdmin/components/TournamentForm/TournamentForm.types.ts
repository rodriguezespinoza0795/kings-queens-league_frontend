import { TournamentRoundInput, Club } from "@/types";

export type TournamentFormProps = {
    handleClose: () => void
    handleFunction: (data: TournamentRoundInput, matches: number) => void
    catalogues: Club[] | undefined
}
