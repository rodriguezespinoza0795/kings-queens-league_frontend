import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type BaseModel = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Club = BaseModel & {
  __typename?: 'Club';
  clubCategory: ClubCategory;
  clubCategoryId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClubCategory = BaseModel & {
  __typename?: 'ClubCategory';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClubCategoryInput = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ClubInput = {
  clubCategoryId: Scalars['Int']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ClubWhereInput = {
  clubCategoryId?: InputMaybe<NumberFilterInput>;
  isActive?: InputMaybe<BoolFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type Count = {
  __typename?: 'Count';
  count?: Maybe<Scalars['Int']['output']>;
};

export type IdUpdateWhereInput = {
  id?: InputMaybe<NumberFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClub: Club;
  createClubCategory: ClubCategory;
  createPlayer: Player;
  createPlayerRound: Count;
  createPlayerType: PlayerType;
  createPosition: Club;
  createTournament: Tournament;
  createTournamentGroup: Count;
  createTournamentRound: Count;
  deleteClub: Club;
  deleteClubCategory: ClubCategory;
  deletePlayer: Player;
  deletePlayerRound: PlayerRound;
  deletePlayerType: PlayerType;
  deletePosition: Position;
  deleteTournament: Tournament;
  deleteTournamentGroup: TournamentGroup;
  deleteTournamentRound: TournamentRound;
  updateClub: Club;
  updateClubCategory: ClubCategory;
  updatePlayer: Player;
  updatePlayerRound: PlayerRound;
  updatePlayerType: PlayerType;
  updatePosition: Position;
  updateTournament: Tournament;
  updateTournamentGroup: Count;
  updateTournamentRound: TournamentRound;
};


export type MutationCreateClubArgs = {
  data: ClubInput;
};


export type MutationCreateClubCategoryArgs = {
  data: ClubCategoryInput;
};


export type MutationCreatePlayerArgs = {
  data: PlayerInput;
};


export type MutationCreatePlayerRoundArgs = {
  data: Array<InputMaybe<PlayerRoundInput>>;
};


export type MutationCreatePlayerTypeArgs = {
  data: NameInput;
};


export type MutationCreatePositionArgs = {
  data: PositionInput;
};


export type MutationCreateTournamentArgs = {
  data: TournamentInput;
};


export type MutationCreateTournamentGroupArgs = {
  data: Array<InputMaybe<TournamentGroupInput>>;
};


export type MutationCreateTournamentRoundArgs = {
  data: Array<InputMaybe<TournamentRoundInput>>;
};


export type MutationDeleteClubArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteClubCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePlayerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePlayerRoundArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePlayerTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePositionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTournamentGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTournamentRoundArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateClubArgs = {
  data: ClubInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClubCategoryArgs = {
  data: ClubCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlayerArgs = {
  data: PlayerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlayerRoundArgs = {
  data: PlayerRoundUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePlayerTypeArgs = {
  data: NameInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePositionArgs = {
  data: PositionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTournamentArgs = {
  data: TournamentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTournamentGroupArgs = {
  data: NameInput;
  where: IdUpdateWhereInput;
};


export type MutationUpdateTournamentRoundArgs = {
  data: TournamentRoundUpdateInput;
  id: Scalars['ID']['input'];
};

export type NameInput = {
  name: Scalars['String']['input'];
};

export type NameWhereInput = {
  isActive?: InputMaybe<BoolFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type NumberFilterInput = {
  contains?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type Player = BaseModel & {
  __typename?: 'Player';
  club: Club;
  clubId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nickName?: Maybe<Scalars['String']['output']>;
  playerType: PlayerType;
  playerTypeId: Scalars['Int']['output'];
  position: Position;
  positionId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PlayerInput = {
  clubId: Scalars['Int']['input'];
  image: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  playerTypeId: Scalars['Int']['input'];
  positionId: Scalars['Int']['input'];
};

export type PlayerRound = BaseModel & {
  __typename?: 'PlayerRound';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Int']['output'];
  player?: Maybe<Player>;
  playerId?: Maybe<Scalars['Int']['output']>;
  round?: Maybe<TournamentRound>;
  roundId?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PlayerRoundInput = {
  playerId?: InputMaybe<Scalars['Int']['input']>;
  roundId?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

export type PlayerRoundUpdateInput = {
  score: Scalars['Int']['input'];
};

export type PlayerRoundWhereInput = {
  isActive?: InputMaybe<BoolFilterInput>;
  playerId?: InputMaybe<NumberFilterInput>;
  round?: InputMaybe<TournamentRoundWhereInput>;
  roundId?: InputMaybe<NumberFilterInput>;
};

export type PlayerType = BaseModel & {
  __typename?: 'PlayerType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PlayerWhereInput = {
  clubId?: InputMaybe<NumberFilterInput>;
  isActive?: InputMaybe<BoolFilterInput>;
  playerTypeId?: InputMaybe<NumberFilterInput>;
  positionId?: InputMaybe<NumberFilterInput>;
};

export type Position = BaseModel & {
  __typename?: 'Position';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PositionInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  club?: Maybe<Club>;
  clubCategories: Array<Maybe<ClubCategory>>;
  clubCategory?: Maybe<ClubCategory>;
  clubs: Array<Maybe<Club>>;
  player?: Maybe<Player>;
  playerRound?: Maybe<PlayerRound>;
  playerRounds: Array<Maybe<PlayerRound>>;
  playerType?: Maybe<PlayerType>;
  playerTypes: Array<Maybe<PlayerType>>;
  players: Array<Maybe<Player>>;
  position?: Maybe<Position>;
  positions: Array<Maybe<Position>>;
  tournament?: Maybe<Tournament>;
  tournamentGroup?: Maybe<TournamentGroup>;
  tournamentGroups: Array<Maybe<TournamentGroup>>;
  tournamentRound?: Maybe<TournamentRound>;
  tournamentRounds: Array<Maybe<TournamentRound>>;
  tournaments: Array<Maybe<Tournament>>;
};


export type QueryClubArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClubCategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NameWhereInput>;
};


export type QueryClubCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClubsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlayerRoundArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlayerRoundsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerRoundWhereInput>;
};


export type QueryPlayerTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlayerTypesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NameWhereInput>;
};


export type QueryPlayersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryPositionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NameWhereInput>;
};


export type QueryTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTournamentGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTournamentGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentGroupWhereInput>;
};


export type QueryTournamentRoundArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTournamentRoundsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TournamentRoundWhereInput>;
};


export type QueryTournamentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NameWhereInput>;
};

export type StringFilterInput = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tournament = BaseModel & {
  __typename?: 'Tournament';
  clubCategory: ClubCategory;
  clubCategoryId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  edition: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  numGroup: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TournamentGroup = BaseModel & {
  __typename?: 'TournamentGroup';
  club: Club;
  clubId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tournament: Tournament;
  tournamentId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TournamentGroupInput = {
  clubId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  tournamentId: Scalars['Int']['input'];
};

export type TournamentGroupWhereInput = {
  isActive?: InputMaybe<BoolFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  tournamentId?: InputMaybe<NumberFilterInput>;
};

export type TournamentInput = {
  clubCategoryId: Scalars['Int']['input'];
  edition: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  numGroup: Scalars['Int']['input'];
};

export type TournamentRound = BaseModel & {
  __typename?: 'TournamentRound';
  clubAway: Club;
  clubHome: Club;
  clubIdAway: Scalars['Int']['output'];
  clubIdHome: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Int']['output'];
  round?: Maybe<Scalars['Int']['output']>;
  tournament: Tournament;
  tournamentId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TournamentRoundInput = {
  clubIdAway: Scalars['Int']['input'];
  clubIdHome: Scalars['Int']['input'];
  round: Scalars['Int']['input'];
  tournamentId: Scalars['Int']['input'];
};

export type TournamentRoundUpdateInput = {
  clubIdAway: Scalars['Int']['input'];
  clubIdHome: Scalars['Int']['input'];
};

export type TournamentRoundWhereInput = {
  cliendIdAway?: InputMaybe<NumberFilterInput>;
  cliendIdHome?: InputMaybe<NumberFilterInput>;
  isActive?: InputMaybe<BoolFilterInput>;
  round?: InputMaybe<NumberFilterInput>;
  tournamentId?: InputMaybe<NumberFilterInput>;
};

export type BoolFilterInput = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClubsQueryVariables = Exact<{
  where?: InputMaybe<ClubWhereInput>;
}>;


export type ClubsQuery = { __typename?: 'Query', clubs: Array<{ __typename?: 'Club', id: string, name: string, image: string, clubCategoryId: number, updatedAt?: any | null, createdAt: any, isActive: number, clubCategory: { __typename?: 'ClubCategory', id: string, name: string, image: string } } | null> };

export type CreateClubMutationVariables = Exact<{
  data: ClubInput;
}>;


export type CreateClubMutation = { __typename?: 'Mutation', createClub: { __typename?: 'Club', id: string } };

export type UpdateClubMutationVariables = Exact<{
  ClubId: Scalars['ID']['input'];
  data: ClubInput;
}>;


export type UpdateClubMutation = { __typename?: 'Mutation', updateClub: { __typename?: 'Club', id: string } };

export type DeleteClubMutationVariables = Exact<{
  ClubId: Scalars['ID']['input'];
}>;


export type DeleteClubMutation = { __typename?: 'Mutation', deleteClub: { __typename?: 'Club', id: string } };

export type ClubCategoriesQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
}>;


export type ClubCategoriesQuery = { __typename?: 'Query', clubCategories: Array<{ __typename?: 'ClubCategory', id: string, image: string, name: string, createdAt: any, updatedAt?: any | null, isActive: number } | null> };

export type CreateClubCategoryMutationVariables = Exact<{
  data: ClubCategoryInput;
}>;


export type CreateClubCategoryMutation = { __typename?: 'Mutation', createClubCategory: { __typename?: 'ClubCategory', id: string } };

export type UpdateClubCategoryMutationVariables = Exact<{
  ClubCategoryId: Scalars['ID']['input'];
  data: ClubCategoryInput;
}>;


export type UpdateClubCategoryMutation = { __typename?: 'Mutation', updateClubCategory: { __typename?: 'ClubCategory', id: string } };

export type DeleteClubCategoryMutationVariables = Exact<{
  ClubCategoryId: Scalars['ID']['input'];
}>;


export type DeleteClubCategoryMutation = { __typename?: 'Mutation', deleteClubCategory: { __typename?: 'ClubCategory', id: string } };

export type PlayersCataloguesQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
  ClubWhereInput?: InputMaybe<ClubWhereInput>;
}>;


export type PlayersCataloguesQuery = { __typename?: 'Query', playerTypes: Array<{ __typename?: 'PlayerType', id: string, name: string } | null>, positions: Array<{ __typename?: 'Position', id: string, name: string } | null>, clubs: Array<{ __typename?: 'Club', id: string, name: string, image: string } | null> };

export type PlayersQueryVariables = Exact<{
  where?: InputMaybe<PlayerWhereInput>;
}>;


export type PlayersQuery = { __typename?: 'Query', players: Array<{ __typename?: 'Player', id: string, name: string, lastName?: string | null, nickName?: string | null, playerTypeId: number, positionId: number, clubId: number, image: string, createdAt: any, updatedAt?: any | null, isActive: number, playerType: { __typename?: 'PlayerType', id: string, name: string }, position: { __typename?: 'Position', id: string, name: string }, club: { __typename?: 'Club', id: string, name: string, image: string } } | null> };

export type CreatePlayerMutationVariables = Exact<{
  data: PlayerInput;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename?: 'Player', id: string } };

export type UpdatePlayerMutationVariables = Exact<{
  PlayerId: Scalars['ID']['input'];
  data: PlayerInput;
}>;


export type UpdatePlayerMutation = { __typename?: 'Mutation', updatePlayer: { __typename?: 'Player', id: string } };

export type DeletePlayerMutationVariables = Exact<{
  PlayerId: Scalars['ID']['input'];
}>;


export type DeletePlayerMutation = { __typename?: 'Mutation', deletePlayer: { __typename?: 'Player', id: string } };

export type PlayerTypesQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
}>;


export type PlayerTypesQuery = { __typename?: 'Query', playerTypes: Array<{ __typename?: 'PlayerType', id: string, name: string, createdAt: any, updatedAt?: any | null, isActive: number } | null> };

export type CreatePlayerTypeMutationVariables = Exact<{
  data: NameInput;
}>;


export type CreatePlayerTypeMutation = { __typename?: 'Mutation', createPlayerType: { __typename?: 'PlayerType', id: string } };

export type UpdatePlayerTypeMutationVariables = Exact<{
  PlayerTypeId: Scalars['ID']['input'];
  data: NameInput;
}>;


export type UpdatePlayerTypeMutation = { __typename?: 'Mutation', updatePlayerType: { __typename?: 'PlayerType', id: string } };

export type DeletePlayerTypeMutationVariables = Exact<{
  PlayerTypeId: Scalars['ID']['input'];
}>;


export type DeletePlayerTypeMutation = { __typename?: 'Mutation', deletePlayerType: { __typename?: 'PlayerType', id: string } };

export type PositionsQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
}>;


export type PositionsQuery = { __typename?: 'Query', positions: Array<{ __typename?: 'Position', id: string, name: string, description: string, createdAt: any, updatedAt?: any | null, isActive: number } | null> };

export type CreatePositionMutationVariables = Exact<{
  data: PositionInput;
}>;


export type CreatePositionMutation = { __typename?: 'Mutation', createPosition: { __typename?: 'Club', id: string } };

export type UpdatePositionMutationVariables = Exact<{
  PositionId: Scalars['ID']['input'];
  data: PositionInput;
}>;


export type UpdatePositionMutation = { __typename?: 'Mutation', updatePosition: { __typename?: 'Position', id: string } };

export type DeletePositionMutationVariables = Exact<{
  PositionId: Scalars['ID']['input'];
}>;


export type DeletePositionMutation = { __typename?: 'Mutation', deletePosition: { __typename?: 'Position', id: string } };

export type TournamentsQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
}>;


export type TournamentsQuery = { __typename?: 'Query', tournaments: Array<{ __typename?: 'Tournament', id: string, name: string, edition: number, clubCategoryId: number, numGroup: number, createdAt: any, updatedAt?: any | null, isActive: number, clubCategory: { __typename?: 'ClubCategory', id: string, name: string, image: string } } | null> };

export type CreateTournamentMutationVariables = Exact<{
  data: TournamentInput;
}>;


export type CreateTournamentMutation = { __typename?: 'Mutation', createTournament: { __typename?: 'Tournament', id: string } };

export type UpdateTournamentMutationVariables = Exact<{
  tournamentId: Scalars['ID']['input'];
  data: TournamentInput;
}>;


export type UpdateTournamentMutation = { __typename?: 'Mutation', updateTournament: { __typename?: 'Tournament', id: string } };

export type DeleteTournamentMutationVariables = Exact<{
  tournamentId: Scalars['ID']['input'];
}>;


export type DeleteTournamentMutation = { __typename?: 'Mutation', deleteTournament: { __typename?: 'Tournament', id: string } };

export type TournamentQueryVariables = Exact<{
  tournamentId: Scalars['ID']['input'];
}>;


export type TournamentQuery = { __typename?: 'Query', tournament?: { __typename?: 'Tournament', id: string, name: string, edition: number, clubCategoryId: number, numGroup: number, createdAt: any, updatedAt?: any | null, isActive: number, clubCategory: { __typename?: 'ClubCategory', id: string, name: string, image: string } } | null };

export type TournamentRoundsQueryVariables = Exact<{
  where?: InputMaybe<TournamentRoundWhereInput>;
}>;


export type TournamentRoundsQuery = { __typename?: 'Query', tournamentRounds: Array<{ __typename?: 'TournamentRound', id: string, tournamentId: number, clubIdHome: number, clubIdAway: number, round?: number | null, createdAt: any, updatedAt?: any | null, isActive: number, clubHome: { __typename?: 'Club', id: string, name: string, image: string }, clubAway: { __typename?: 'Club', id: string, name: string, image: string } } | null> };

export type TournamentGroupsQueryVariables = Exact<{
  where?: InputMaybe<TournamentGroupWhereInput>;
}>;


export type TournamentGroupsQuery = { __typename?: 'Query', tournamentGroups: Array<{ __typename?: 'TournamentGroup', id: string, name: string, tournamentId: number, clubId: number, createdAt: any, updatedAt?: any | null, isActive: number } | null> };

export type PlayerRoundsQueryVariables = Exact<{
  where?: InputMaybe<PlayerRoundWhereInput>;
}>;


export type PlayerRoundsQuery = { __typename?: 'Query', playerRounds: Array<{ __typename?: 'PlayerRound', playerId?: number | null, score?: number | null, roundId?: number | null } | null> };

export type CreateTournamentGroupMutationVariables = Exact<{
  data: Array<InputMaybe<TournamentGroupInput>> | InputMaybe<TournamentGroupInput>;
}>;


export type CreateTournamentGroupMutation = { __typename?: 'Mutation', createTournamentGroup: { __typename?: 'Count', count?: number | null } };

export type CreateTournamentRoundMutationVariables = Exact<{
  data: Array<InputMaybe<TournamentRoundInput>> | InputMaybe<TournamentRoundInput>;
}>;


export type CreateTournamentRoundMutation = { __typename?: 'Mutation', createTournamentRound: { __typename?: 'Count', count?: number | null } };

export type CreatePlayerRoundMutationVariables = Exact<{
  data: Array<InputMaybe<PlayerRoundInput>> | InputMaybe<PlayerRoundInput>;
}>;


export type CreatePlayerRoundMutation = { __typename?: 'Mutation', createPlayerRound: { __typename?: 'Count', count?: number | null } };


export const ClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clubs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<ClubsQuery, ClubsQueryVariables>;
export const CreateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClubMutation, CreateClubMutationVariables>;
export const UpdateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateClubMutation, UpdateClubMutationVariables>;
export const DeleteClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteClubMutation, DeleteClubMutationVariables>;
export const ClubCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClubCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<ClubCategoriesQuery, ClubCategoriesQueryVariables>;
export const CreateClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClubCategoryMutation, CreateClubCategoryMutationVariables>;
export const UpdateClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateClubCategoryMutation, UpdateClubCategoryMutationVariables>;
export const DeleteClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteClubCategoryMutation, DeleteClubCategoryMutationVariables>;
export const PlayersCataloguesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlayersCatalogues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubWhereInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playerTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<PlayersCataloguesQuery, PlayersCataloguesQueryVariables>;
export const PlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Players"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"players"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nickName"}},{"kind":"Field","name":{"kind":"Name","value":"playerTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"playerType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"club"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<PlayersQuery, PlayersQueryVariables>;
export const CreatePlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlayer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const UpdatePlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PlayerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlayer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PlayerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePlayerMutation, UpdatePlayerMutationVariables>;
export const DeletePlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PlayerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlayer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PlayerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePlayerMutation, DeletePlayerMutationVariables>;
export const PlayerTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlayerTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playerTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<PlayerTypesQuery, PlayerTypesQueryVariables>;
export const CreatePlayerTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlayerType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NameInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlayerType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePlayerTypeMutation, CreatePlayerTypeMutationVariables>;
export const UpdatePlayerTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePlayerType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PlayerTypeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NameInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlayerType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PlayerTypeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePlayerTypeMutation, UpdatePlayerTypeMutationVariables>;
export const DeletePlayerTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePlayerType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PlayerTypeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlayerType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PlayerTypeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePlayerTypeMutation, DeletePlayerTypeMutationVariables>;
export const PositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Positions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<PositionsQuery, PositionsQueryVariables>;
export const CreatePositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PositionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePositionMutation, CreatePositionMutationVariables>;
export const UpdatePositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PositionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PositionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PositionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePositionMutation, UpdatePositionMutationVariables>;
export const DeletePositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PositionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PositionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePositionMutation, DeletePositionMutationVariables>;
export const TournamentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tournaments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tournaments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"edition"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numGroup"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<TournamentsQuery, TournamentsQueryVariables>;
export const CreateTournamentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTournament"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTournament"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTournamentMutation, CreateTournamentMutationVariables>;
export const UpdateTournamentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTournament"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tournamentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTournament"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tournamentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateTournamentMutation, UpdateTournamentMutationVariables>;
export const DeleteTournamentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTournament"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tournamentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTournament"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tournamentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTournamentMutation, DeleteTournamentMutationVariables>;
export const TournamentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tournament"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tournamentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tournament"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tournamentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"edition"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numGroup"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<TournamentQuery, TournamentQueryVariables>;
export const TournamentRoundsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TournamentRounds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentRoundWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tournamentRounds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"clubIdHome"}},{"kind":"Field","name":{"kind":"Name","value":"clubHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubIdAway"}},{"kind":"Field","name":{"kind":"Name","value":"clubAway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<TournamentRoundsQuery, TournamentRoundsQueryVariables>;
export const TournamentGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TournamentGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentGroupWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tournamentGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<TournamentGroupsQuery, TournamentGroupsQueryVariables>;
export const PlayerRoundsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlayerRounds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRoundWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playerRounds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playerId"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"roundId"}}]}}]}}]} as unknown as DocumentNode<PlayerRoundsQuery, PlayerRoundsQueryVariables>;
export const CreateTournamentGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTournamentGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentGroupInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTournamentGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreateTournamentGroupMutation, CreateTournamentGroupMutationVariables>;
export const CreateTournamentRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTournamentRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentRoundInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTournamentRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreateTournamentRoundMutation, CreateTournamentRoundMutationVariables>;
export const CreatePlayerRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlayerRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRoundInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlayerRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreatePlayerRoundMutation, CreatePlayerRoundMutationVariables>;