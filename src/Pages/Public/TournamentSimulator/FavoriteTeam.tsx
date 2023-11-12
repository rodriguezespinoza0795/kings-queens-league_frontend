import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { TournamentGroup } from '@/types';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

const FavoriteTeam = ({
  club,
  handleOnDragEnd,
  completeRounds,
}: {
  club: any[] | TournamentGroup[];
  handleOnDragEnd: (result: DropResult) => void;
  completeRounds: () => void;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" textAlign={'center'}>
        Elige tu equipo Favorito
      </Typography>
      <Button variant="contained" onClick={completeRounds}>
        Simular grupos
      </Button>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              dense={true}
            >
              {club.map((item: TournamentGroup, index: number) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListItemButton>
                          <ListItemAvatar>
                            <Avatar src={item?.club?.image}></Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item?.club?.name}
                            // secondary={'Secondary text'}
                          />
                        </ListItemButton>
                      </ListItem>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default FavoriteTeam;
