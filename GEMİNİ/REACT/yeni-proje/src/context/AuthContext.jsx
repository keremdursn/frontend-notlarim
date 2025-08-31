import { createContext } from 'react';

// Uygulama genelinde erişilecek olan AuthContext'i oluşturuyoruz.
// null, başlangıçta varsayılan değerdir.
export const AuthContext = createContext(null);