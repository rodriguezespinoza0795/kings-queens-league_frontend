import { useState, useEffect } from 'react';
import { HandleClose, catalogueType, DataValues } from './usePlayer.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  PlayersDocument,
  CreatePlayerDocument,
  DeletePlayerDocument,
  UpdatePlayerDocument,
  PlayersCataloguesDocument
} from '@/types';
import { uploadFile } from '@/utils';

export const usePlayer = () => {
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState<DataValues>({
    id: '',
    name: '',
    lastName: '',
    nickName: '',
    playerTypeId: 0,
    positionId: 0,
    clubId: 0,
    image: ''
  });
  const [catalogues, setCatalogues] = useState<catalogueType>(
    {
      clubs: [],
      positions: [],
      playerTypes: [],
      clubCategories: []
    }
  );

  const [getCatalogues] = useLazyQuery(PlayersCataloguesDocument, {
    onCompleted: (data) => setCatalogues(data),
    onError: (error) => console.log('errors', error),
  },
  );

  useEffect(() => {
    getCatalogues({
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

  const handleClickOpenUpdate = (data: DataValues) => {
    setOpenUpdate(true);
    setDefaultValues(data);
  };
  const handleCloseUpdate: HandleClose = () => setOpenUpdate(false);

  const handleClickOpenDelete = (data: DataValues) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };
  const handleCloseDelete: HandleClose = () => setOpenDelete(false);

  const [getPlayers, { refetch }] = useLazyQuery(
    PlayersDocument,
    {
      onCompleted: ({ players }) => setRows(players),
      onError: (error) => console.log('errors', error),
    },
  );

  const [fetch] = useMutation(CreatePlayerDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchDelete] = useMutation(DeletePlayerDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchUpdate] = useMutation(UpdatePlayerDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const refetchData = async () => {
    const {
      data: { players },
    } = await refetch();
    setRows(players);
  };

  useEffect(() => {
    getPlayers({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const deletePlayer = () => {
    fetchDelete({
      variables: {
        PlayerId: defaultValues.id,
      },
    });
  };

  const handleCreate = async (data?: {
    id: string
    name: string
    lastName?: string
    nickName?: string
    image: File[] | string
    clubId: number
    playerTypeId: number,
    positionId: number,
  }) => {
    const formData = new FormData();
    formData.append('file', data?.image?.[0] || '');
    const response = await uploadFile(formData);
    fetch({
      variables: {
        data: {
          name: data?.name || '',
          lastName: data?.lastName || '',
          nickName: data?.nickName || '',
          image: response.secure_url,
          clubId: data?.clubId || 0,
          playerTypeId: data?.playerTypeId || 0,
          positionId: data?.positionId || 0
        },
      },
    });
  }

  const updatePlayer = async (data?: {
    id: string
    name: string
    lastName?: string
    nickName?: string
    image: File[] | string
    clubId: number
    playerTypeId: number,
    positionId: number
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
        PlayerId: defaultValues.id,
        data: {
          name: data?.name || '',
          lastName: data?.lastName || '',
          nickName: data?.nickName || '',
          image: url,
          clubId: data?.clubId || 0,
          playerTypeId: data?.playerTypeId || 0,
          positionId: data?.positionId || 0
        },
      },
    });
  };

  const headers = [
    { key: 'id', name: 'ID', type: 'text' },
    { key: 'image', name: 'Icono', type: 'image' },
    { key: 'name', name: 'Nombre', type: 'text' },
    { key: 'club.image', name: 'Categoría', type: 'image' },
    { key: 'createdAt', name: 'Fecha de Creación', type: 'date' },
    { key: 'updatedAt', name: 'Fecha de Modificación', type: 'date' },
    { key: 'isActive', name: 'Activo', type: 'boolean' },
    { key: 'actions', name: 'Acciones', type: 'actions' },
  ];

  return {
    headers,
    rows,
    deletePlayer,
    updatePlayer,
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
