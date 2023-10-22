import React from 'react';
import { Global } from './useGlobal.types'

export const GlobalContext = (
  React.createContext<Global | null>(null)
);
