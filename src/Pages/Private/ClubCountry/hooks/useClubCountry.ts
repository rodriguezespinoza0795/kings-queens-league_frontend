import { useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  ClubCountriesDocument,
  CreateClubCountryDocument,
  UpdateClubCountryDocument,
  DeleteClubCountryDocument,
  ClubCountry
} from '@/types';
import { useGlobal } from '@/context';
import { uploadFile } from '@/utils';

export const useClubCountry = () => {
  const { getError, getSuccess } = useGlobal()
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    image: '',
    id: '',
  });

  const [getClubCountries, { refetch }] = useLazyQuery(
    ClubCountriesDocument,
    {
      onCompleted: ({ clubCountries }) => setRows(clubCountries),
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

  const handleOpenUpdate = (data: ClubCountry) => {
    setDefaultValues(data);
    setOpen(true);
  };

  const onErrorFunction = (error: string) => {
    if (error === 'COUNTRY_CLUB_ALREADY_EXISTS') {
      getError("El nombre del país ya existe")
    }
  }

  const [fetchCreate] = useMutation(CreateClubCountryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => onErrorFunction(error.message),
  });

  const [fetchUpdate] = useMutation(UpdateClubCountryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => onErrorFunction(error.message),
  });

  const refetchData = async () => {
    getSuccess("Operación Exitosa")
    handleClose()
    const { data: { clubCountries } } = await refetch();
    setRows(clubCountries);
  };

  useEffect(() => {
    getClubCountries({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const handleCreateCountry = async (data: {
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

  const handleUpdateCountry = async (data?: {
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
        ClubCountryId: defaultValues.id,
        data: {
          name: data?.name || '',
          image: url
        },
      },
    });
  };


  const handleOpenDelete = (data: ClubCountry) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };

  const [fetchDelete] = useMutation(DeleteClubCountryDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => onErrorFunction(error.message),
  });

  const deleteClubCountry = () => {
    fetchDelete({
      variables: {
        ClubCountryId: defaultValues.id,
      },
    });
  };

  return {
    rows,
    handleOpen,
    handleClose,
    open,
    defaultValues,
    handleCreateCountry,
    handleUpdateCountry,
    handleOpenUpdate,
    handleCloseDelete,
    openDelete,
    handleOpenDelete,
    deleteClubCountry
  };
};
