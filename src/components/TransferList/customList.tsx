import {
  Box,
  Avatar,
  Typography,
  List,
  Card,
  CardHeader,
  ListItem,
  ListItemIcon,
  Checkbox,
  Divider,
} from '@mui/material';

export const customList = (
  title: React.ReactNode,
  items: readonly number[],
  dataList: any[],
  handleToggle: (value: number) => any,
  checked: readonly number[],
) => {
  return (
    <Card>
      <CardHeader sx={{ px: 2, py: 1 }} title={title} />
      <Divider />
      <List
        sx={{
          width: 300,
          height: 350,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value: number) => {
          const labelId = `transfer-list-all-item-${value}-label`;
          return (
            <ListItem key={value} role="listitem" onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <Box sx={{ display: 'flex' }} key={value}>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    dataList.find((item) => item.id === value.toString())?.image
                  }
                  sx={{ width: 40, height: 40 }}
                />
                <Typography>
                  {dataList.find((item) => item.id === value.toString())?.name}
                </Typography>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};
