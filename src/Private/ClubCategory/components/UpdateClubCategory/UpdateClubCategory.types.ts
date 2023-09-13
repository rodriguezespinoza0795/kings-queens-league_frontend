import {ClubCategoryInput, ClubCategory} from '@/types'

export type DataValues = {
    name: string
    file: File[]
}

export type UpdateClubCategoryProps = {
    handleClose: () => void
    handleUpdate: (id:string, data: ClubCategoryInput) => void
    defaultValues: ClubCategory | { name: string, image: string, id:string  }
}