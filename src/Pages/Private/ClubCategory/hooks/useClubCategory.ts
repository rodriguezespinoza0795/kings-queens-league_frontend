import { useState, useEffect } from 'react';
import { HandleClose } from './useClubCategory.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  ClubCategoriesDocument,
  CreateClubCategoryDocument,
  ClubCategory,
  DeleteClubCategoryDocument,
  UpdateClubCategoryDocument,
} from '@/types';
import { uploadFile } from '@/utils';

export const useClubCategory = () => {
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    image: '',
    id: '',
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose: HandleClose = () => setOpen(false);

  const handleClickOpenUpdate = (data: ClubCategory) => {
    setOpenUpdate(true);
    setDefaultValues(data);
  };
  const handleCloseUpdate: HandleClose = () => setOpenUpdate(false);

  const handleClickOpenDelete = (data: ClubCategory) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };
  const handleCloseDelete: HandleClose = () => setOpenDelete(false);

  const [getClubCategories, { refetch }] = useLazyQuery(
    ClubCategoriesDocument,
    {
      onCompleted: ({ clubCategories }) => setRows(clubCategories),
      onError: (error) => console.log('errors', error),
    },
  );

  const [fetch] = useMutation(CreateClubCategoryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchDelete] = useMutation(DeleteClubCategoryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchUpdate] = useMutation(UpdateClubCategoryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const refetchData = async () => {
    const {
      data: { clubCategories },
    } = await refetch();
    setRows(clubCategories);
  };

  useEffect(() => {
    getClubCategories({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const deleteClubCategory = () => {
    fetchDelete({
      variables: {
        ClubCategoryId: defaultValues.id,
      },
    });
  };

  const handleCreateCategory = async (data?: {
    id: string
    name: string
    image: File[] | string
  }) => {
    const formData = new FormData();
    formData.append('file', data?.image?.[0] || '');
    const response = await uploadFile(formData);
    fetch({
      variables: {
        data: {
          name: data?.name || '',
          image: response.secure_url,
        },
      },
    });
  }

  const updateClubCategory = async (data?: {
    id: string
    name: string
    image: File[] | string
  }) => {
    let url = defaultValues?.image;
    if (data?.image.length === 1) {
      const formData = new FormData();
      formData.append('file', data.image[0]);
      const response = await uploadFile(formData);
      url = response.secure_url;
    }
    fetchUpdate({
      variables: {
        ClubCategoryId: defaultValues.id,
        data: {
          name: data?.name || '',
          image: url
        },
      },
    });
  };

  const headers = [
    { key: 'id', name: 'ID', type: 'text' },
    { key: 'image', name: 'Icono', type: 'image' },
    { key: 'name', name: 'Nombre', type: 'text' },
    { key: 'createdAt', name: 'Fecha de Creación', type: 'date' },
    { key: 'updatedAt', name: 'Fecha de Modificación', type: 'date' },
    { key: 'isActive', name: 'Activo', type: 'boolean' },
    { key: 'actions', name: 'Acciones', type: 'actions' },
  ];

  return {
    headers,
    rows,
    deleteClubCategory,
    updateClubCategory,
    handleCreateCategory,
    handleClickOpen,
    handleClose,
    open,
    handleClickOpenUpdate,
    handleCloseUpdate,
    openUpdate,
    handleClickOpenDelete,
    handleCloseDelete,
    openDelete,
    defaultValues,
  };
};
