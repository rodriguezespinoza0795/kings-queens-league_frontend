import { useState, useEffect } from 'react';
import { HandleClose } from './useClub.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  ClubsDocument,
  CreateClubDocument,
  DeleteClubDocument,
  UpdateClubDocument,
  ClubAdminCataloguesDocument
} from '@/types';
import { uploadFile } from '@/utils';
import { useGlobal } from '@/context';

export const useClub = () => {
  const { getError, getSuccess } = useGlobal()
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    image: '',
    id: '',
    clubCategoryId: '',
    clubCountryId: '',
    clubPresidentId: '',
    color: '#ffffff'
  });
  const [catalogues, setCatalogues] = useState<{ clubCategories: any[], clubCountries: any[], clubPresidents: any[] }>({ clubCategories: [], clubCountries: [], clubPresidents: [] });

  const [getClubCategories] = useLazyQuery(ClubAdminCataloguesDocument, {
    onCompleted: (data) => setCatalogues(data as any),
    onError: (error) => console.log('errors', error),
  });

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

  const handleClickOpenUpdate = (data: any) => {
    setOpenUpdate(true);
    setDefaultValues(data);
  };
  const handleCloseUpdate: HandleClose = () => setOpenUpdate(false);

  const handleClickOpenDelete = (data: any) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };
  const handleCloseDelete: HandleClose = () => setOpenDelete(false);

  const onErrorFunction = (error: string) => {
    if (error === 'ALREADY_EXISTS') {
      getError("El nombre del país ya existe")
    }
  }

  const [getClubs, { refetch }] = useLazyQuery(
    ClubsDocument,
    {
      onCompleted: ({ clubs }) => setRows(clubs),
      onError: (error) => console.log('errors', error),
    },
  );

  const [fetchCreate] = useMutation(CreateClubDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => onErrorFunction(error.message),
  });

  const [fetchUpdate] = useMutation(UpdateClubDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => onErrorFunction(error.message),
  });

  const [fetchDelete] = useMutation(DeleteClubDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const refetchData = async () => {
    const { data: { clubs } } = await refetch();
    getSuccess("Operación Exitosa")
    handleClose()
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

  const handleCreate = async (data: {
    id: string
    name: string
    image: File[] | string
    clubCategoryId: string
    clubCountryId: string
    clubPresidentId: string
    color: string
  }) => {
    const formData = new FormData();
    formData.append('file', data?.image?.[0] || '');
    const response = await uploadFile(formData);
    fetchCreate({
      variables: {
        data: {
          name: data?.name || '',
          image: response.secure_url,
          clubCategoryId: parseInt(data.clubCategoryId, 10) || 0,
          clubCountryId: parseInt(data.clubCountryId, 10) || 0,
          clubPresidentId: parseInt(data.clubPresidentId, 10) || 0,
          color: data?.color.replace('#', '') || 'ffffff'
        },
      },
    });
  }

  const handleUpdate = async (data: {
    id: string
    name: string
    image: File[] | string
    clubCategoryId: string
    clubCountryId: string
    clubPresidentId: string
    color: string
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
          clubCategoryId: parseInt(data.clubCategoryId, 10) || 0,
          clubCountryId: parseInt(data.clubCountryId, 10) || 0,
          clubPresidentId: parseInt(data.clubPresidentId, 10) || 0,
          color: data?.color.replace('#', '') || 'ffffff'
        },
      },
    });
  };

  return {
    rows,
    deleteClub,
    handleUpdate,
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
