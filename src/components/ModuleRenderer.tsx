import React, { ReactElement } from 'react'
import { ModuleContent } from '../lib/modules'
import { moduleIndex } from './ModuleIndex'

type Props = {
  module: ModuleContent
}

export default function ModuleRenderer({ module }: Props) {
  const ModuleToRender: ReactElement | any = moduleIndex[module?.name]

  return <>{ModuleToRender && <ModuleToRender />}</>
}
