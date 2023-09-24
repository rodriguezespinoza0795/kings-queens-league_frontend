import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  TablePagination,
} from '@mui/material';
import format from 'date-fns/format';
import {
  CheckCircle,
  Cancel,
  Delete,
  Edit,
  Settings,
} from '@mui/icons-material';
import { BasicTableProps } from './table.types';
import { get } from 'lodash';
import { useTable } from './useTable';

export default function BasicTable({
  headers,
  rows,
  deleteItem,
  updateItem,
  detailsItem,
}: BasicTableProps) {
  const {
    paginate,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTable();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <TableCell key={item.name}>{item.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginate(rows).map((row) => (
            <TableRow key={row.id}>
              {headers.map((column) => {
                switch (column.type) {
                  case 'image':
                    return (
                      <TableCell key={column.key}>
                        <Avatar alt={column.key} src={get(row, column.key)} />
                      </TableCell>
                    );
                  case 'date':
                    return (
                      <TableCell key={column.key}>
                        {format(new Date(get(row, column.key)), 'MM/dd/yyyy')}
                      </TableCell>
                    );
                  case 'boolean':
                    return (
                      <TableCell key={column.key}>
                        {get(row, column.key) ? (
                          <CheckCircle color="success" />
                        ) : (
                          <Cancel color="error" />
                        )}
                      </TableCell>
                    );
                  case 'text':
                    return (
                      <TableCell key={column.key}>
                        {get(row, column.key)}
                      </TableCell>
                    );
                  case 'actions':
                    return (
                      <TableCell key={column.key}>
                        {detailsItem && (
                          <IconButton
                            aria-label="edit"
                            size="small"
                            onClick={() => detailsItem(row.id)}
                          >
                            <Settings fontSize="inherit" />
                          </IconButton>
                        )}
                        <IconButton
                          aria-label="edit"
                          size="small"
                          onClick={() => updateItem(row)}
                        >
                          <Edit fontSize="inherit" />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          size="small"
                          onClick={() => deleteItem(row)}
                        >
                          <Delete fontSize="inherit" />
                        </IconButton>
                      </TableCell>
                    );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
