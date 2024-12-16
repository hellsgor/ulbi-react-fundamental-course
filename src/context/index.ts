import { Context, createContext, Dispatch, SetStateAction } from 'react';

export interface AutoContextType {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext: Context<AutoContextType | null> =
  createContext<AutoContextType | null>(null);
