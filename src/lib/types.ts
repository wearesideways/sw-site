export interface ActionEternalLink {
  type: 'external_link'
  openInNewTab: boolean
  label: string
  path: string
}

export interface ActionPageLink {
  type: 'page_link'
  label: string
  page: string
}

export type Action = ActionEternalLink | ActionPageLink

export type MenuAction = Action & { current?: boolean }
