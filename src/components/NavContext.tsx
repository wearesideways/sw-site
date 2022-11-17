import { createContext, useContext } from 'react'

interface NavContextValue {
  logoVisible: boolean
  setLogoVisible: (visible: boolean) => void
  navVisible: boolean
  setNavVisible: (expanded: boolean) => void
  navExpanded: boolean
  setNavExpanded: (expanded: boolean) => void
}

const NavContext = createContext<NavContextValue | undefined>(undefined)

export const NavContextProvider = NavContext.Provider

export function useNavContext() {
  const context = useContext(NavContext)

  if (!context) {
    throw new Error('useNavContext must be used within a NavContextProvider')
  }

  return context
}
