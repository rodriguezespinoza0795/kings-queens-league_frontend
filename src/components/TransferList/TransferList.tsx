import { Grid, Button } from '@mui/material';
import { useTransferList } from './useTransferList';
import { customList } from './customList';

export default function TransferList({
  dataList,
  defaultValues,
  catalogue,
}: {
  dataList: any[];
  defaultValues: number[][];
  catalogue: unknown[];
}) {
  const {
    handleToggle,
    checked,
    left,
    handleCheckedRight,
    leftChecked,
    handleCheckedLeft,
    rightChecked,
    right,
    handleCreate,
  } = useTransferList(defaultValues, catalogue);

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          {customList('Grupo A', left, dataList, handleToggle, checked)}
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          {customList('Grupo B', right, dataList, handleToggle, checked)}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        onClick={handleCreate}
        disabled={!!defaultValues[0].length}
      >
        Guardar
      </Button>
    </>
  );
}
