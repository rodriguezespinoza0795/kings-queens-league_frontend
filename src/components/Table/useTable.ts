import { useState } from 'react';

export const useTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginate = (data: any[]) => {
    return data.slice(
      page === 0 ? page : page * rowsPerPage,
      page === 0 ? rowsPerPage : page * rowsPerPage + rowsPerPage,
    )
  }


  return {
    paginate,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage
  };
};
