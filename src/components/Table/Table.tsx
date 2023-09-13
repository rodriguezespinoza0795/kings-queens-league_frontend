import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import format from 'date-fns/format'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {BasicTableProps} from './table.types'
import {get} from 'lodash'

export default function BasicTable({headers, rows, deleteItem, updateItem}: BasicTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              headers.map(item => (
                <TableCell key={item.name}>{item.name}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {headers.map(column => {
                if (column.type === 'image') return <TableCell key={column.key}><Avatar alt={column.key} src={get(row, column.key)} /></TableCell>
                if (column.type === 'date') return <TableCell key={column.key}>{format(new Date(get(row, column.key)), 'MM/dd/yyyy')}</TableCell>
                if (column.type === 'boolean') return <TableCell key={column.key}>{get(row, column.key) ? <CheckCircleIcon color="success"/> : <CancelIcon color="error"/>}</TableCell>
                if (column.type === 'text')return <TableCell key={column.key}>{get(row, column.key)}</TableCell>
                if (column.type === 'actions') return (
                  <TableCell key={column.key}>
                    <IconButton aria-label="edit" size="small" onClick={()=> updateItem(row)}>
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small" onClick={()=> deleteItem(row.id)}>
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}