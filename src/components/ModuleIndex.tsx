import HeadlineIntroModule from '../modules/HeadlineIntroModule'
import HeroModule from '../modules/HeroModule'
import IntroColumnsModule from '../modules/IntroColumnsModule'
import OverflowHeadlineModule from '../modules/OverflowHeadlineModule'
import BigHeadlineModule from '../modules/BigHeadlineModule'
import ProjectsModule from '../modules/ProjectsModule'

export const moduleIndex: { [key: string]: ({}: any) => {} } = {
  HeroModule,
  HeadlineIntroModule,
  IntroColumnsModule,
  OverflowHeadlineModule,
  BigHeadlineModule,
  ProjectsModule,
}
