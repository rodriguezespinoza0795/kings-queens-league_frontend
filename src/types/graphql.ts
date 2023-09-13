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

export type ClubCategoryWhereInput = {
  isActive?: InputMaybe<BoolFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type ClubInput = {
  clubCategoryId: Scalars['Int']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ClubWhereInput = {
  name?: InputMaybe<StringFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClub: Club;
  createClubCategory: ClubCategory;
  deleteClubCategory: ClubCategory;
  updateClubCategory: ClubCategory;
};


export type MutationCreateClubArgs = {
  data: ClubInput;
};


export type MutationCreateClubCategoryArgs = {
  data: ClubCategoryInput;
};


export type MutationDeleteClubCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateClubCategoryArgs = {
  data: ClubCategoryInput;
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  club?: Maybe<Club>;
  clubCategories: Array<Maybe<ClubCategory>>;
  clubCategory?: Maybe<ClubCategory>;
  clubs: Array<Maybe<Club>>;
};


export type QueryClubArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClubCategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubCategoryWhereInput>;
};


export type QueryClubCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClubsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClubWhereInput>;
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

export type BoolFilterInput = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClubCategoriesQueryVariables = Exact<{
  where?: InputMaybe<ClubCategoryWhereInput>;
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


export type DeleteClubCategoryMutation = { __typename?: 'Mutation', deleteClubCategory: { __typename?: 'ClubCategory', createdAt: any, id: string, image: string, isActive: number, name: string, updatedAt?: any | null } };


export const ClubCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClubCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCategoryWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<ClubCategoriesQuery, ClubCategoriesQueryVariables>;
export const CreateClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClubCategoryMutation, CreateClubCategoryMutationVariables>;
export const UpdateClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ClubCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateClubCategoryMutation, UpdateClubCategoryMutationVariables>;
export const DeleteClubCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteClubCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClubCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ClubCategoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<DeleteClubCategoryMutation, DeleteClubCategoryMutationVariables>;