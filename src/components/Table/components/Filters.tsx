import { Grid, Autocomplete, TextField, Box } from '@mui/material';

export type catalogueType = {
  clubs?: any[];
  positions?: any[];
  playerTypes?: any[];
  clubCategories?: any[];
};

const Filters = ({
  handleChange,
  catalogues,
  filterValues,
}: {
  handleChange: (value: any, key: string) => void;
  catalogues?: catalogueType;
  filterValues: any;
}) => {
  return (
    <Grid
      container
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        gap: '10px',
      }}
    >
      <Grid item xs={3}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          getOptionLabel={(option) => option.name}
          options={
            catalogues?.clubCategories?.filter(
              (category) => category.id !== '4',
            ) || []
          }
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={option.image}
                alt={option.name}
              />
              {option.name}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Categoría" />}
          onChange={(_event: any, newValue: any | null) => {
            handleChange(newValue, 'CategoryId');
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <Autocomplete
          value={filterValues?.ClubId || null}
          disablePortal
          id="combo-box-demo"
          getOptionLabel={(option) => option.name}
          options={
            catalogues?.clubs?.filter(
              (club) =>
                club?.clubCategoryId ===
                parseInt(filterValues?.CategoryId?.id, 10),
            ) || []
          }
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={option.image}
                alt={option.name}
              />
              {option.name}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Club" />}
          onChange={(_event: any, newValue: any | null) => {
            handleChange(newValue, 'ClubId');
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
