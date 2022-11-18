import HeadlineIntroModule from '../modules/HeadlineIntroModule'
import HeroModule from '../modules/HeroModule'
import IntroColumnsModule from '../modules/IntroColumnsModule'
import OverflowHeadlineModule from '../modules/OverflowHeadlineModule'
import BigHeadlineModule from '../modules/BigHeadlineModule'
import HeroListModule from '../modules/HeroListModule'
import HeroFooterNavModule from '../modules/HeroFooterNavModule'
import ProjectsModule from '../modules/ProjectsModule'

export const moduleIndex: { [key: string]: ({}: any) => {} } = {
  HeroModule,
  HeadlineIntroModule,
  IntroColumnsModule,
  OverflowHeadlineModule,
  BigHeadlineModule,
  HeroListModule,
  HeroFooterNavModule,
  ProjectsModule,
}
