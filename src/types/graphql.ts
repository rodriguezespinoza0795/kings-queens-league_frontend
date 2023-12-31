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

export type AuthenticationResponse = {
  __typename?: 'AuthenticationResponse';
  token: Scalars['String']['output'];
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
  clubPresident: ClubPresident;
  clubPresidentId: Scalars['Int']['output'];
  color: Scalars['String']['output'];
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

export type ClubCountry = BaseModel & {
  __typename?: 'ClubCountry';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClubCountryInput = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ClubInput = {
  clubCategoryId: Scalars['Int']['input'];
  clubCountryId: Scalars['Int']['input'];
  clubPresidentId: Scalars['Int']['input'];
  color: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ClubPresident = BaseModel & {
  __typename?: 'ClubPresident';
  club?: Maybe<Array<Club>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClubPresidentInput = {
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
  createClubCountry: ClubCountry;
  createClubPresident: ClubPresident;
  createPlayer: Player;
  createPlayerRound: Count;
  createPlayerType: PlayerType;
  createPosition: Club;
  createRoundMatches: Count;
  createTournament: Tournament;
  createTournamentGroup: Count;
  createTournamentRound: Count;
  createUser: User;
  deleteClub: Club;
  deleteClubCategory: ClubCategory;
  deleteClubCountry: ClubCountry;
  deleteClubPresident: ClubPresident;
  deletePlayer: Player;
  deletePlayerRound: PlayerRound;
  deletePlayerType: PlayerType;
  deletePosition: Position;
  deleteTournament: Tournament;
  deleteTournamentGroup: TournamentGroup;
  deleteTournamentRound: TournamentRound;
  signIn: AuthenticationResponse;
  updateClub: Club;
  updateClubCategory: ClubCategory;
  updateClubCountry: ClubCountry;
  updateClubPresident: ClubPresident;
  updatePlayer: Player;
  updatePlayerRound: PlayerRound;
  updatePlayerType: PlayerType;
  updatePosition: Position;
  updateTournament: Tournament;
  updateTournamentGroup: Count;
  updateTournamentRound: TournamentRound;
  validateEmail: User;
};


export type MutationCreateClubArgs = {
  data: ClubInput;
};


export type MutationCreateClubCategoryArgs = {
  data: ClubCategoryInput;
};


export type MutationCreateClubCountryArgs = {
  data: ClubCountryInput;
};


export type MutationCreateClubPresidentArgs = {
  data: ClubPresidentInput;
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


export type MutationCreateRoundMatchesArgs = {
  data: Array<InputMaybe<RoundMatchInput>>;
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


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationDeleteClubArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteClubCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteClubCountryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteClubPresidentArgs = {
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


export type MutationSignInArgs = {
  data: UserSignInInput;
};


export type MutationUpdateClubArgs = {
  data: ClubInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClubCategoryArgs = {
  data: ClubCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClubCountryArgs = {
  data: ClubCountryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClubPresidentArgs = {
  data: ClubPresidentInput;
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


export type MutationValidateEmailArgs = {
  data: UserValidateEmailInput;
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
  player: Player;
  playerId: Scalars['Int']['output'];
  round: TournamentRound;
  roundId: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
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
  clubCountries: Array<Maybe<ClubCountry>>;
  clubCountry?: Maybe<ClubCountry>;
  clubPresident?: Maybe<ClubPresident>;
  clubPresidents: Array<Maybe<ClubPresident>>;
  clubs: Array<Maybe<Club>>;
  player?: Maybe<Player>;
  playerRound?: Maybe<PlayerRound>;
  playerRounds: Array<Maybe<PlayerRound>>;
  playerType?: Maybe<PlayerType>;
  playerTypes: Array<Maybe<PlayerType>>;
  players: Array<Maybe<Player>>;
  position?: Maybe<Position>;
  positions: Array<Maybe<Position>>;
  roundMatch?: Maybe<RoundMatch>;
  roundMatches: Array<Maybe<RoundMatch>>;
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


export type QueryClubCountriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NameWhereInput>;
};


export type QueryClubCountryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClubPresidentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClubPresidentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NameWhereInput>;
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


export type QueryRoundMatchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRoundMatchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoundMatchWhereInput>;
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

export type RoundMatch = BaseModel & {
  __typename?: 'RoundMatch';
  clubAwayPoint: Scalars['Int']['output'];
  clubAwayScore: Scalars['Int']['output'];
  clubAwayScoreDraw?: Maybe<Scalars['Int']['output']>;
  clubHomePoints: Scalars['Int']['output'];
  clubHomeScore: Scalars['Int']['output'];
  clubHomeScoreDraw?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Int']['output'];
  round: TournamentRound;
  roundId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoundMatchInput = {
  clubAwayPoint: Scalars['Int']['input'];
  clubAwayScore: Scalars['Int']['input'];
  clubAwayScoreDraw?: InputMaybe<Scalars['Int']['input']>;
  clubHomePoints: Scalars['Int']['input'];
  clubHomeScore: Scalars['Int']['input'];
  clubHomeScoreDraw?: InputMaybe<Scalars['Int']['input']>;
  roundId: Scalars['Int']['input'];
};

export type RoundMatchWhereInput = {
  isActive?: InputMaybe<BoolFilterInput>;
  round?: InputMaybe<TournamentRoundWhereInput>;
  roundId?: InputMaybe<NumberFilterInput>;
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

export type User = BaseModel & {
  __typename?: 'User';
  code: Scalars['Int']['output'];
  codeEffectiveDate: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
  verified: Scalars['Int']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserSignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserValidateEmailInput = {
  code: Scalars['Int']['input'];
  email: Scalars['String']['input'];
};

export type BoolFilterInput = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClubsQueryVariables = Exact<{
  where?: InputMaybe<ClubWhereInput>;
}>;


export type ClubsQuery = { __typename?: 'Query', clubs: Array<{ __typename?: 'Club', id: string, name: string, image: string, clubCategoryId: number, clubPresidentId: number, updatedAt?: any | null, createdAt: any, isActive: number, clubCategory: { __typename?: 'ClubCategory', id: string, name: string, image: string }, clubPresident: { __typename?: 'ClubPresident', id: string, name: string, image: string } } | null> };

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

export type ClubAdminCataloguesQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
  whereCountry?: InputMaybe<NameWhereInput>;
  wherePresident?: InputMaybe<NameWhereInput>;
}>;


export type ClubAdminCataloguesQuery = { __typename?: 'Query', clubCategories: Array<{ __typename?: 'ClubCategory', id: string, name: string, image: string, isActive: number } | null>, clubCountries: Array<{ __typename?: 'ClubCountry', id: string, name: string, image: string, isActive: number } | null>, clubPresidents: Array<{ __typename?: 'ClubPresident', id: string, name: string, image: string, isActive: number, club?: Array<{ __typename?: 'Club', id: string, name: string }> | null } | null> };

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

export type ClubCountriesQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
}>;


export type ClubCountriesQuery = { __typename?: 'Query', clubCountries: Array<{ __typename?: 'ClubCountry', id: string, image: string, name: string, createdAt: any, updatedAt?: any | null, isActive: number } | null> };

export type CreateClubCountryMutationVariables = Exact<{
  data: ClubCountryInput;
}>;


export type CreateClubCountryMutation = { __typename?: 'Mutation', createClubCountry: { __typename?: 'ClubCountry', id: string } };

export type UpdateClubCountryMutationVariables = Exact<{
  ClubCountryId: Scalars['ID']['input'];
  data: ClubCountryInput;
}>;


export type UpdateClubCountryMutation = { __typename?: 'Mutation', updateClubCountry: { __typename?: 'ClubCountry', id: string } };

export type DeleteClubCountryMutationVariables = Exact<{
  ClubCountryId: Scalars['ID']['input'];
}>;


export type DeleteClubCountryMutation = { __typename?: 'Mutation', deleteClubCountry: { __typename?: 'ClubCountry', id: string } };

export type ClubPresidentsQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
}>;


export type ClubPresidentsQuery = { __typename?: 'Query', clubPresidents: Array<{ __typename?: 'ClubPresident', id: string, image: string, name: string, createdAt: any, updatedAt?: any | null, isActive: number, club?: Array<{ __typename?: 'Club', id: string, name: string }> | null } | null> };

export type CreateClubPresidentMutationVariables = Exact<{
  data: ClubPresidentInput;
}>;


export type CreateClubPresidentMutation = { __typename?: 'Mutation', createClubPresident: { __typename?: 'ClubPresident', id: string } };

export type UpdateClubPresidentMutationVariables = Exact<{
  ClubPresidentId: Scalars['ID']['input'];
  data: ClubPresidentInput;
}>;


export type UpdateClubPresidentMutation = { __typename?: 'Mutation', updateClubPresident: { __typename?: 'ClubPresident', id: string } };

export type DeleteClubPresidentMutationVariables = Exact<{
  ClubPresidentId: Scalars['ID']['input'];
}>;


export type DeleteClubPresidentMutation = { __typename?: 'Mutation', deleteClubPresident: { __typename?: 'ClubPresident', id: string } };

export type PlayersCataloguesQueryVariables = Exact<{
  where?: InputMaybe<NameWhereInput>;
  ClubWhereInput?: InputMaybe<ClubWhereInput>;
}>;


export type PlayersCataloguesQuery = { __typename?: 'Query', playerTypes: Array<{ __typename?: 'PlayerType', id: string, name: string } | null>, positions: Array<{ __typename?: 'Position', id: string, name: string } | null>, clubs: Array<{ __typename?: 'Club', id: string, name: string, image: string, clubCategoryId: number } | null>, clubCategories: Array<{ __typename?: 'ClubCategory', id: string, image: string, name: string, isActive: number } | null> };

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


export type TournamentRoundsQuery = { __typename?: 'Query', tournamentRounds: Array<{ __typename?: 'TournamentRound', id: string, tournamentId: number, clubIdHome: number, clubIdAway: number, round?: number | null, createdAt: any, updatedAt?: any | null, isActive: number, clubHome: { __typename?: 'Club', id: string, name: string, image: string, clubPresidentId: number }, clubAway: { __typename?: 'Club', id: string, name: string, image: string, clubPresidentId: number } } | null> };

export type TournamentGroupsQueryVariables = Exact<{
  where?: InputMaybe<TournamentGroupWhereInput>;
}>;


export type TournamentGroupsQuery = { __typename?: 'Query', tournamentGroups: Array<{ __typename?: 'TournamentGroup', id: string, name: string, tournamentId: number, clubId: number, createdAt: any, updatedAt?: any | null, isActive: number } | null> };

export type PlayerRoundsQueryVariables = Exact<{
  where?: InputMaybe<PlayerRoundWhereInput>;
}>;


export type PlayerRoundsQuery = { __typename?: 'Query', playerRounds: Array<{ __typename?: 'PlayerRound', id: string, playerId: number, score: number, roundId: number } | null> };

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

export type DeletePlayerRoundMutationVariables = Exact<{
  Id: Scalars['ID']['input'];
}>;


export type DeletePlayerRoundMutation = { __typename?: 'Mutation', deletePlayerRound: { __typename?: 'PlayerRound', id: string } };

export type UpdatePlayerRoundMutationVariables = Exact<{
  Id: Scalars['ID']['input'];
  data: PlayerRoundUpdateInput;
}>;


export type UpdatePlayerRoundMutation = { __typename?: 'Mutation', updatePlayerRound: { __typename?: 'PlayerRound', id: string } };

export type CreateRoundMatchesMutationVariables = Exact<{
  data: Array<InputMaybe<RoundMatchInput>> | InputMaybe<RoundMatchInput>;
}>;


export type CreateRoundMatchesMutation = { __typename?: 'Mutation', createRoundMatches: { __typename?: 'Count', count?: number | null } };

export type RoundMatchesQueryVariables = Exact<{
  where?: InputMaybe<RoundMatchWhereInput>;
}>;


export type RoundMatchesQuery = { __typename?: 'Query', roundMatches: Array<{ __typename?: 'RoundMatch', id: string, roundId: number, clubHomeScore: number, clubHomeScoreDraw?: number | null, clubHomePoints: number, clubAwayScore: number, clubAwayScoreDraw?: number | null, clubAwayPoint: number, isActive: number } | null> };

export type SignInMutationVariables = Exact<{
  data: UserSignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthenticationResponse', token: string } };

export type TopPlayersCataloguesQueryVariables = Exact<{
  where?: InputMaybe<PlayerRoundWhereInput>;
  whereCategory?: InputMaybe<NameWhereInput>;
  whereTournamentGroup?: InputMaybe<TournamentGroupWhereInput>;
  whereRoundMatches?: InputMaybe<RoundMatchWhereInput>;
  whereTournamentRounds?: InputMaybe<TournamentRoundWhereInput>;
}>;


export type TopPlayersCataloguesQuery = { __typename?: 'Query', playerRounds: Array<{ __typename?: 'PlayerRound', score: number, roundId: number, playerId: number, round: { __typename?: 'TournamentRound', round?: number | null }, player: { __typename?: 'Player', id: string, name: string, image: string, lastName?: string | null, positionId: number, playerTypeId: number, clubId: number, club: { __typename?: 'Club', id: string, name: string, image: string, color: string, clubCategoryId: number } } } | null>, clubCategories: Array<{ __typename?: 'ClubCategory', id: string, name: string, image: string, isActive: number } | null>, tournamentGroups: Array<{ __typename?: 'TournamentGroup', id: string, name: string, clubId: number, club: { __typename?: 'Club', id: string, name: string, image: string } } | null>, roundMatches: Array<{ __typename?: 'RoundMatch', id: string, roundId: number, clubHomeScore: number, clubHomeScoreDraw?: number | null, clubHomePoints: number, clubAwayScore: number, clubAwayScoreDraw?: number | null, clubAwayPoint: number, isActive: number } | null>, tournamentRounds: Array<{ __typename?: 'TournamentRound', id: string, tournamentId: number, clubIdHome: number, clubIdAway: number, round?: number | null, createdAt: any, updatedAt?: any | null, isActive: number } | null> };

export type TournamentSimulatorQueryVariables = Exact<{
  whereTournamentGroup?: InputMaybe<TournamentGroupWhereInput>;
  whereRoundMatches?: InputMaybe<RoundMatchWhereInput>;
  whereTournamentRounds?: InputMaybe<TournamentRoundWhereInput>;
}>;


export type TournamentSimulatorQuery = { __typename?: 'Query', tournamentGroups: Array<{ __typename?: 'TournamentGroup', id: string, name: string, clubId: number, club: { __typename?: 'Club', id: string, name: string, image: string } } | null>, roundMatches: Array<{ __typename?: 'RoundMatch', id: string, roundId: number, clubHomeScore: number, clubHomeScoreDraw?: number | null, clubHomePoints: number, clubAwayScore: number, clubAwayScoreDraw?: number | null, clubAwayPoint: number, isActive: number } | null>, tournamentRounds: Array<{ __typename?: 'TournamentRound', id: string, tournamentId: number, clubIdHome: number, clubIdAway: number, round?: number | null, createdAt: any, updatedAt?: any | null, isActive: number } | null> };


export const ClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Clubs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategoryId"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubPresidentId"}},{"kind":"Field","name":{"kind":"Name","value":"clubPresident"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<ClubsQuery, ClubsQueryVariables>;
export const CreateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClubMutation, CreateClubMutationVariables>;
export const UpdateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateClubMutation, UpdateClubMutationVariables>;
export const DeleteClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteClubMutation, DeleteClubMutationVariables>;
export const ClubAdminCataloguesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClubAdminCatalogues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereCountry"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wherePresident"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubCountries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereCountry"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubPresidents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wherePresident"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"club"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<ClubAdminCataloguesQuery, ClubAdminCataloguesQueryVariables>;
export const ClubCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClubCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<ClubCategoriesQuery, ClubCategoriesQueryVariables>;
export const CreateClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClubCategoryMutation, CreateClubCategoryMutationVariables>;
export const UpdateClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateClubCategoryMutation, UpdateClubCategoryMutationVariables>;
export const DeleteClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteClubCategoryMutation, DeleteClubCategoryMutationVariables>;
export const ClubCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"clubCountries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubCountries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<ClubCountriesQuery, ClubCountriesQueryVariables>;
export const CreateClubCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createClubCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCountryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClubCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClubCountryMutation, CreateClubCountryMutationVariables>;
export const UpdateClubCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClubCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubCountryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCountryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClubCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubCountryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateClubCountryMutation, UpdateClubCountryMutationVariables>;
export const DeleteClubCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteClubCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubCountryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClubCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubCountryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteClubCountryMutation, DeleteClubCountryMutationVariables>;
export const ClubPresidentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"clubPresidents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubPresidents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"club"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<ClubPresidentsQuery, ClubPresidentsQueryVariables>;
export const CreateClubPresidentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createClubPresident"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubPresidentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClubPresident"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClubPresidentMutation, CreateClubPresidentMutationVariables>;
export const UpdateClubPresidentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClubPresident"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubPresidentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubPresidentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClubPresident"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubPresidentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateClubPresidentMutation, UpdateClubPresidentMutationVariables>;
export const DeleteClubPresidentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteClubPresident"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubPresidentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClubPresident"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubPresidentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteClubPresidentMutation, DeleteClubPresidentMutationVariables>;
export const PlayersCataloguesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlayersCatalogues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubWhereInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playerTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategoryId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<PlayersCataloguesQuery, PlayersCataloguesQueryVariables>;
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
export const TournamentRoundsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TournamentRounds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentRoundWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tournamentRounds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"clubIdHome"}},{"kind":"Field","name":{"kind":"Name","value":"clubHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"clubPresidentId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubIdAway"}},{"kind":"Field","name":{"kind":"Name","value":"clubAway"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"clubPresidentId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<TournamentRoundsQuery, TournamentRoundsQueryVariables>;
export const TournamentGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TournamentGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentGroupWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tournamentGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<TournamentGroupsQuery, TournamentGroupsQueryVariables>;
export const PlayerRoundsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlayerRounds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRoundWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playerRounds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"roundId"}}]}}]}}]} as unknown as DocumentNode<PlayerRoundsQuery, PlayerRoundsQueryVariables>;
export const CreateTournamentGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTournamentGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentGroupInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTournamentGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreateTournamentGroupMutation, CreateTournamentGroupMutationVariables>;
export const CreateTournamentRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTournamentRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentRoundInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTournamentRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreateTournamentRoundMutation, CreateTournamentRoundMutationVariables>;
export const CreatePlayerRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlayerRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRoundInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlayerRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreatePlayerRoundMutation, CreatePlayerRoundMutationVariables>;
export const DeletePlayerRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePlayerRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"Id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlayerRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"Id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePlayerRoundMutation, DeletePlayerRoundMutationVariables>;
export const UpdatePlayerRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlayerRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"Id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRoundUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlayerRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"Id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePlayerRoundMutation, UpdatePlayerRoundMutationVariables>;
export const CreateRoundMatchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRoundMatches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoundMatchInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRoundMatches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreateRoundMatchesMutation, CreateRoundMatchesMutationVariables>;
export const RoundMatchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"roundMatches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RoundMatchWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roundMatches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roundId"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomeScore"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomeScoreDraw"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomePoints"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayScore"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayScoreDraw"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayPoint"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<RoundMatchesQuery, RoundMatchesQueryVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const TopPlayersCataloguesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopPlayersCatalogues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerRoundWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereCategory"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NameWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereTournamentGroup"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentGroupWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereRoundMatches"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RoundMatchWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereTournamentRounds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentRoundWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playerRounds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"roundId"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"playerTypeId"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"club"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"clubCategoryId"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereCategory"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereTournamentGroup"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"club"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"roundMatches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereRoundMatches"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roundId"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomeScore"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomeScoreDraw"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomePoints"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayScore"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayScoreDraw"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayPoint"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentRounds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereTournamentRounds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"clubIdHome"}},{"kind":"Field","name":{"kind":"Name","value":"clubIdAway"}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<TopPlayersCataloguesQuery, TopPlayersCataloguesQueryVariables>;
export const TournamentSimulatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TournamentSimulator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereTournamentGroup"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentGroupWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereRoundMatches"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RoundMatchWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"whereTournamentRounds"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TournamentRoundWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tournamentGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereTournamentGroup"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"club"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"roundMatches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereRoundMatches"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roundId"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomeScore"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomeScoreDraw"}},{"kind":"Field","name":{"kind":"Name","value":"clubHomePoints"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayScore"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayScoreDraw"}},{"kind":"Field","name":{"kind":"Name","value":"clubAwayPoint"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tournamentRounds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"whereTournamentRounds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tournamentId"}},{"kind":"Field","name":{"kind":"Name","value":"clubIdHome"}},{"kind":"Field","name":{"kind":"Name","value":"clubIdAway"}},{"kind":"Field","name":{"kind":"Name","value":"round"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<TournamentSimulatorQuery, TournamentSimulatorQueryVariables>;