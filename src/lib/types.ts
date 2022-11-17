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

export enum MediaTypes {
  IMAGE = 'img',
  MP4_URL = 'mp4',
  // TODO define video formats to use
}
