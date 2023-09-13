import { useState, useEffect } from 'react';
import { HandleClose } from './useClubCategory.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  ClubCategoriesDocument,
  CreateClubCategoryDocument,
  ClubCategoryInput,
  ClubCategory,
  DeleteClubCategoryDocument,
  UpdateClubCategoryDocument
} from '@/types';

export const useClubCategory = () => {
  const [rows, setRows] = useState<unknown[]>([])
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [defaultValues, setDefaultValues] = useState({name:'', image:'', id:''})

  const handleClickOpen = () => setOpen(true);
  const handleClose:HandleClose = () => setOpen(false);

  const handleClickOpenUpdate = (data: ClubCategory) => {
    setOpenUpdate(true)
    setDefaultValues(data)
  };
  const handleCloseUpdate:HandleClose = () => setOpenUpdate(false);

  const [getClubCategories, { refetch }] = useLazyQuery(ClubCategoriesDocument, {
    onCompleted: ({clubCategories}) => setRows(clubCategories),
    onError: (error) => console.log('errors',error)
  });

  const [fetch] = useMutation(CreateClubCategoryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors',error)
  });

  const [fetchDelete] = useMutation(DeleteClubCategoryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors',error)
  });

  const [fetchUpdate] = useMutation(UpdateClubCategoryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors',error)
  });

  const refetchData = async () => {
    const {data:{clubCategories}} = await refetch()
    setRows(clubCategories)
  }

  const handleCreateCategory = (name:string, image:string) => (
    fetch({
      variables: {
          data: {
            name: name,
            image: image,
          }
        }
    })
  );

  useEffect(()=> {
    getClubCategories({
      variables: {
        where: {
          isActive: {
            equals: true
          }
        }
      }
    })
  },[])

  const deleteClubCategory = (id:string) => {
    fetchDelete({
      variables: {
          ClubCategoryId: id
        }
    })
  }

  const updateClubCategory = (id:string, data: ClubCategoryInput) => {
    fetchUpdate({
      variables: {
          ClubCategoryId: id,
          data:data
        }
    })
  }

  const headers = [
    {key: 'id',name:'ID',type:'text'},
    {key: 'image',name:'Icono',type:'image'},
    {key: 'name',name:'Nombre',type:'text'},
    {key: 'createdAt',name:'Fecha de Creación',type:'date'},
    {key: 'updatedAt',name:'Fecha de Modificación',type:'date'},
    {key: 'isActive',name:'Activo',type:'boolean'},
    {key: 'actions',name:'Acciones',type:'actions'}
  ]

  return {
    headers,
    rows,
    deleteClubCategory,
    updateClubCategory,
    handleClickOpen,
    handleClose,
    open,
    handleClickOpenUpdate,
    handleCloseUpdate,
    openUpdate,
    handleCreateCategory,
    defaultValues
  };
};
