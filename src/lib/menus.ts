import userMenus from '../../meta/navigation.json'
import { MenuAction } from './types'

interface Menus {
  mainMenu: MenuAction[]
  footerMenu: MenuAction[]
}

export const menus = userMenus as Menus
