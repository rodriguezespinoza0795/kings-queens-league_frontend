import { useState, useEffect } from 'react';
import { HandleClose } from './useTournament.types';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  TournamentsDocument,
  CreateTournamentDocument,
  DeleteTournamentDocument,
  UpdateTournamentDocument,
  ClubCategoriesDocument,
} from '@/types';
import { useNavigate } from 'react-router-dom';

export const useTournament = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<unknown[]>([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    id: '',
    name: '',
    edition: '0',
    clubCategoryId: 1,
    numGroup: '1'
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

  const handleCreate = async (data: { clubCategoryId: number, edition: string, name: string, numGroup: string }) => {
    fetch({
      variables: {
        data: {
          clubCategoryId: data.clubCategoryId,
          edition: parseInt(data.edition, 10),
          name: data.name,
          numGroup: parseInt(data.numGroup, 10),
        }
      },
    });
  }

  const handleUpdate = async (data: { clubCategoryId: number, edition: string, name: string, numGroup: string }) => {
    fetchUpdate({
      variables: {
        tournamentId: defaultValues.id,
        data: {
          clubCategoryId: data.clubCategoryId,
          edition: parseInt(data.edition, 10),
          name: data.name,
          numGroup: parseInt(data.numGroup, 10),
        }
      },
    });
  };

  const headers = [
    { key: 'id', name: 'ID', type: 'text' },
    { key: 'edition', name: 'Edición', type: 'text' },
    { key: 'name', name: 'Nombre', type: 'text' },
    { key: 'clubCategory.image', name: 'Categoría', type: 'image' },
    { key: 'createdAt', name: 'Fecha de Creación', type: 'date' },
    { key: 'updatedAt', name: 'Fecha de Modificación', type: 'date' },
    { key: 'isActive', name: 'Activo', type: 'boolean' },
    { key: 'actions', name: 'Acciones', type: 'actions' },
  ];

  const seeDetails = (id: number) => {
    navigate(`/tournament/${id}`)
  }

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
    seeDetails
  };
};
