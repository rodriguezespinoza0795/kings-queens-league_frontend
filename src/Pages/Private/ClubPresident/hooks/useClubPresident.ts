import { useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  ClubPresidentsDocument,
  CreateClubPresidentDocument,
  UpdateClubPresidentDocument,
  DeleteClubPresidentDocument,
  ClubPresident
} from '@/types';
import { useGlobal } from '@/context';
import { uploadFile } from '@/utils';

export const useClubPresident = () => {
  const { getError, getSuccess } = useGlobal()
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    image: '',
    id: '',
  });

  const [getClubPresidents, { refetch }] = useLazyQuery(
    ClubPresidentsDocument,
    {
      onCompleted: ({ clubPresidents }) => setRows(clubPresidents),
      onError: (error) => console.log('errors', error),
    },
  );

  const handleOpen = () => {
    setDefaultValues({
      name: '',
      image: '',
      id: '',
    }); setOpen(true);
  }

  const handleClose = () => setOpen(false);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleOpenUpdate = (data: ClubPresident) => {
    setDefaultValues(data);
    setOpen(true);
  };

  const onErrorFunction = (error: string) => {
    if (error === 'ALREADY_EXISTS') {
      getError("El nombre del país ya existe")
    }
  }

  const [fetchCreate] = useMutation(CreateClubPresidentDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => onErrorFunction(error.message),
  });

  const [fetchUpdate] = useMutation(UpdateClubPresidentDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => onErrorFunction(error.message),
  });

  const refetchData = async () => {
    getSuccess("Operación Exitosa")
    handleClose()
    const { data: { clubPresidents } } = await refetch();
    setRows(clubPresidents);
  };

  useEffect(() => {
    getClubPresidents({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const handleCreatePresident = async (data: {
    name: string
    image: File[] | string
  }) => {
    const formData = new FormData();
    formData.append('file', data?.image?.[0] || '');
    const response = await uploadFile(formData);
    fetchCreate({
      variables: {
        data: {
          name: data.name,
          image: response.secure_url,
        },
      },
    });
  }

  const handleUpdatePresident = async (data?: {
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
        ClubPresidentId: defaultValues.id,
        data: {
          name: data?.name || '',
          image: url
        },
      },
    });
  };


  const handleOpenDelete = (data: ClubPresident) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };

  const [fetchDelete] = useMutation(DeleteClubPresidentDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => onErrorFunction(error.message),
  });

  const deleteClubPresident = () => {
    fetchDelete({
      variables: {
        ClubPresidentId: defaultValues.id,
      },
    });
  };

  return {
    rows,
    handleOpen,
    handleClose,
    open,
    defaultValues,
    handleCreatePresident,
    handleUpdatePresident,
    handleOpenUpdate,
    handleCloseDelete,
    openDelete,
    handleOpenDelete,
    deleteClubPresident
  };
};
