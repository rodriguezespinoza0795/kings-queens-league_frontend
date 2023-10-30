import { useState } from 'react';

export const useTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showFilter, setShowFilter] = useState(false);
  const [filterValues, setFilterValues] = useState<any | null>(null);

  const handleChange = (value: any) => {
    setFilterValues(value);
  };

  const toggleFilter = () => setShowFilter(!showFilter);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filterData = (data: any[]) => {
    let filterData = data
    if (filterValues) {
      filterData = filterData.filter(item => item.club.id === filterValues.id)
    }
    return filterData
  }

  const paginate = (data: any[]) => {
    return filterData(data).slice(
      page === 0 ? page : page * rowsPerPage,
      page === 0 ? rowsPerPage : page * rowsPerPage + rowsPerPage,
    )
  }

  return {
    paginate,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    showFilter,
    toggleFilter,
    filterValues,
    handleChange,
    filterData,
  };
};
