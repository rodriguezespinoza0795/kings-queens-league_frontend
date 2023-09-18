import { useState, useEffect } from 'react';
import { HandleClose } from './usePlayerType.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  PlayerTypesDocument,
  CreatePlayerTypeDocument,
  PlayerType,
  DeletePlayerTypeDocument,
  UpdatePlayerTypeDocument,
} from '@/types';

export const usePlayerType = () => {
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    id: '',
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose: HandleClose = () => setOpen(false);

  const handleClickOpenUpdate = (data: PlayerType) => {
    setOpenUpdate(true);
    setDefaultValues(data);
  };
  const handleCloseUpdate: HandleClose = () => setOpenUpdate(false);

  const handleClickOpenDelete = (data: PlayerType) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };
  const handleCloseDelete: HandleClose = () => setOpenDelete(false);

  const [getPlayerTypes, { refetch }] = useLazyQuery(
    PlayerTypesDocument,
    {
      onCompleted: ({ playerTypes }) => setRows(playerTypes),
      onError: (error) => console.log('errors', error),
    },
  );

  const [fetch] = useMutation(CreatePlayerTypeDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchDelete] = useMutation(DeletePlayerTypeDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchUpdate] = useMutation(UpdatePlayerTypeDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const refetchData = async () => {
    const {
      data: { playerTypes },
    } = await refetch();
    setRows(playerTypes);
  };

  useEffect(() => {
    getPlayerTypes({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const deletePlayerType = () => {
    fetchDelete({
      variables: {
        PlayerTypeId: defaultValues.id,
      },
    });
  };

  const handleCreatePlayerType = async (data?: {
    id: string
    name: string
  }) => {
    fetch({
      variables: {
        data: {
          name: data?.name || '',
        },
      },
    });
  }

  const updatePlayerType = async (data?: {
    id: string
    name: string
  }) => {
    fetchUpdate({
      variables: {
        PlayerTypeId: defaultValues.id,
        data: {
          name: data?.name || '',
        },
      },
    });
  };

  const headers = [
    { key: 'id', name: 'ID', type: 'text' },
    { key: 'name', name: 'Nombre', type: 'text' },
    { key: 'createdAt', name: 'Fecha de Creación', type: 'date' },
    { key: 'updatedAt', name: 'Fecha de Modificación', type: 'date' },
    { key: 'isActive', name: 'Activo', type: 'boolean' },
    { key: 'actions', name: 'Acciones', type: 'actions' },
  ];

  return {
    headers,
    rows,
    deletePlayerType,
    updatePlayerType,
    handleCreatePlayerType,
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
