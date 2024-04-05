import { createContext } from 'react';
import { UserContextType } from '../types/types';

const UserContext = createContext<UserContextType>({
  userName: ''
});

export default UserContext;