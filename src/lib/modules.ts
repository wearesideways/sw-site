import modules from '../../meta/modules.yml'

export type ModuleContent = {
  readonly slug: string
  readonly name: string
}

const moduleMap: { [key: string]: ModuleContent } = generateModuleMap()

function generateModuleMap(): { [key: string]: ModuleContent } {
  let result: { [key: string]: ModuleContent } = {}
  for (const moduleToRender of modules.modules) {
    result[moduleToRender.slug] = moduleToRender
  }
  return result
}

export function getModule(slug: string) {
  return moduleMap[slug]
}
