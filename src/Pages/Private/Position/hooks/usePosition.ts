import { useState, useEffect } from 'react';
import { HandleClose } from './usePosition.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  PositionsDocument,
  CreatePositionDocument,
  Position,
  DeletePositionDocument,
  UpdatePositionDocument,
} from '@/types';

export const usePosition = () => {
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    description: '',
    id: '',
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose: HandleClose = () => setOpen(false);

  const handleClickOpenUpdate = (data: Position) => {
    setOpenUpdate(true);
    setDefaultValues(data);
  };
  const handleCloseUpdate: HandleClose = () => setOpenUpdate(false);

  const handleClickOpenDelete = (data: Position) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };
  const handleCloseDelete: HandleClose = () => setOpenDelete(false);

  const [getPositions, { refetch }] = useLazyQuery(
    PositionsDocument,
    {
      onCompleted: ({ positions }) => setRows(positions),
      onError: (error) => console.log('errors', error),
    },
  );

  const [fetch] = useMutation(CreatePositionDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchDelete] = useMutation(DeletePositionDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchUpdate] = useMutation(UpdatePositionDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const refetchData = async () => {
    const {
      data: { positions },
    } = await refetch();
    setRows(positions);
  };

  useEffect(() => {
    getPositions({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const deletePosition = () => {
    fetchDelete({
      variables: {
        PositionId: defaultValues.id,
      },
    });
  };

  const handleCreatePosition = async (data?: {
    id: string
    name: string
    description: string
  }) => {
    fetch({
      variables: {
        data: {
          name: data?.name || '',
          description: data?.description || '',
        },
      },
    });
  }

  const updatePosition = async (data?: {
    id: string
    name: string
    description: string
  }) => {
    fetchUpdate({
      variables: {
        PositionId: defaultValues.id,
        data: {
          name: data?.name || '',
          description: data?.description || '',
        },
      },
    });
  };

  const headers = [
    { key: 'id', name: 'ID', type: 'text' },
    { key: 'name', name: 'Posición', type: 'text' },
    { key: 'description', name: 'Descripción', type: 'text' },
    { key: 'createdAt', name: 'Fecha de Creación', type: 'date' },
    { key: 'updatedAt', name: 'Fecha de Modificación', type: 'date' },
    { key: 'isActive', name: 'Activo', type: 'boolean' },
    { key: 'actions', name: 'Acciones', type: 'actions' },
  ];

  return {
    headers,
    rows,
    deletePosition,
    updatePosition,
    handleCreatePosition,
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
