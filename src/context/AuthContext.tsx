import { createContext, ReactNode } from 'react'
import * as AuthSession from 'expo-auth-session'

interface UserProps {
  name: string
  avatarUrl: string
}

export interface AuthContextDataProps {
  user: UserProps
  signIn: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

//armazena o contexto
export const AuthContext = createContext({} as AuthContextDataProps)

//Prove o contexto para a aplicação
export function AuthContextProvider({ children }: AuthProviderProps) {
  console.log(AuthSession.makeRedirectUri({ useProxy: true }))

  async function signIn() {}

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: 'Eduardo',
          avatarUrl: 'https://github.com/edumoraes.png'
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
