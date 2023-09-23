import { useState, useEffect } from 'react';
import { HandleClose } from './useTournament.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  TournamentsDocument,
  CreateTournamentDocument,
  Tournament,
  DeleteTournamentDocument,
  UpdateTournamentDocument,
  ClubCategoriesDocument,
  TournamentInput,
} from '@/types';

export const useTournament = () => {
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    id: '',
    name: '',
    edition: 0,
    clubCategoryId: 1,
    numGroup: 1
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

  const handleClickOpenUpdate = (data: Tournament) => {
    setOpenUpdate(true);
    setDefaultValues(data);
  };
  const handleCloseUpdate: HandleClose = () => setOpenUpdate(false);

  const handleClickOpenDelete = (data: Tournament) => {
    setOpenDelete(true);
    setDefaultValues(data);
  };
  const handleCloseDelete: HandleClose = () => setOpenDelete(false);

  const [getTournaments, { refetch }] = useLazyQuery(
    TournamentsDocument,
    {
      onCompleted: ({ tournaments }) => setRows(tournaments),
      onError: (error) => console.log('errors', error),
    },
  );

  const [fetch] = useMutation(CreateTournamentDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchDelete] = useMutation(DeleteTournamentDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [fetchUpdate] = useMutation(UpdateTournamentDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const refetchData = async () => {
    const {
      data: { tournaments },
    } = await refetch();
    setRows(tournaments);
  };

  useEffect(() => {
    getTournaments({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const deleteTournament = () => {
    fetchDelete({
      variables: {
        tournamentId: defaultValues.id,
      },
    });
  };

  const handleCreate = async (data: TournamentInput) => {
    fetch({
      variables: {
        data: data,
      },
    });
  }

  const handleUpdate = async (data: TournamentInput) => {
    fetchUpdate({
      variables: {
        tournamentId: defaultValues.id,
        data: data,
      },
    });
  };

  const headers = [
    { key: 'id', name: 'ID', type: 'text' },
    { key: 'edition', name: 'text', type: 'text' },
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
    deleteTournament,
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
