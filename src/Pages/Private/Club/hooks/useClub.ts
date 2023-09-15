import { useState, useEffect } from 'react';
import { HandleClose } from './useClub.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  ClubsDocument,
  CreateClubDocument,
  Club,
  DeleteClubDocument,
  UpdateClubDocument,
  ClubCategoriesDocument
} from '@/types';
import { uploadFile } from '@/utils';

export const useClub = () => {
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    image: '',
    id: '',
    clubCategoryId: 1
  });
  const [catalogues, setCatalogues] = useState<{ clubCategory: any[] }>({ clubCategory: [] });

  const [getClubCategories] = useLazyQuery(ClubCategoriesDocument, {
    onCompleted: ({ clubCategories }) => setCatalogues({ ...catalogues, "clubCategory": clubCategories }),
    onError: (error) => console.log('errors', error),
  },
  );

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

  const handleClickOpen = () => setOpen(true);
  const handleClose: HandleClose = () => setOpen(false);

  const handleClickOpenUpdate = (data: Club) => {
    setOpenUpdate(true);
    setDefaultValues(data);
  };
  const handleCloseUpdate: HandleClose = () => setOpenUpdate(false);

  const handleClickOpenDelete = (data: Club) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };
  const handleCloseDelete: HandleClose = () => setOpenDelete(false);

  const [getClubs, { refetch }] = useLazyQuery(
    ClubsDocument,
    {
      onCompleted: ({ clubs }) => setRows(clubs),
      onError: (error) => console.log('errors', error),
    },
  );

  const [fetch] = useMutation(CreateClubDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchDelete] = useMutation(DeleteClubDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchUpdate] = useMutation(UpdateClubDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const refetchData = async () => {
    const {
      data: { clubs },
    } = await refetch();
    setRows(clubs);
  };

  useEffect(() => {
    getClubs({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const deleteClub = () => {
    fetchDelete({
      variables: {
        ClubId: defaultValues.id,
      },
    });
  };

  const handleCreate = async (data?: {
    id: string
    name: string
    image: File[] | string
    clubCategoryId: number
  }) => {
    const formData = new FormData();
    formData.append('file', data?.image?.[0] || '');
    const response = await uploadFile(formData);
    fetch({
      variables: {
        data: {
          name: data?.name || '',
          image: response.secure_url,
          clubCategoryId: data?.clubCategoryId || 0
        },
      },
    });
  }

  const updateClub = async (data?: {
    id: string
    name: string
    image: File[] | string
    clubCategoryId: number
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
        ClubId: defaultValues.id,
        data: {
          name: data?.name || '',
          image: url,
          clubCategoryId: data?.clubCategoryId || 0
        },
      },
    });
  };

  const headers = [
    { key: 'id', name: 'ID', type: 'text' },
    { key: 'image', name: 'Icono', type: 'image' },
    { key: 'name', name: 'Nombre', type: 'text' },
    { key: 'clubCategory.image', name: 'Categoría', type: 'image' },
    { key: 'createdAt', name: 'Fecha de Creación', type: 'date' },
    { key: 'updatedAt', name: 'Fecha de Modificación', type: 'date' },
    { key: 'isActive', name: 'Activo', type: 'boolean' },
    { key: 'actions', name: 'Acciones', type: 'actions' },
  ];

  return {
    headers,
    rows,
    deleteClub,
    updateClub,
    handleCreate,
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
    catalogues,
  };
};
