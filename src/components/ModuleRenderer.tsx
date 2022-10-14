import { ModuleContent } from '../lib/modules'
import { moduleIndex } from './ModuleIndex'

type Props = {
  module: ModuleContent
}

export default function ModuleRenderer({ module }: Props) {
  const ModuleToRender = moduleIndex[module?.name]

  return <>{ModuleToRender && <ModuleToRender />}</>
}
