import React from 'react';
import { GlobalContext } from './GlobalContext';

export const useGlobal = (): any => (
  React.useContext(GlobalContext)
);
