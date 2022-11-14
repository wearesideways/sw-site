import HeadlineIntroModule from '../modules/HeadlineIntroModule'
import IntroColumnsModule from '../modules/IntroColumnsModule'
import OverflowHeadlineModule from '../modules/OverflowHeadlineModule'
import BigHeadlineModule from '../modules/BigHeadlineModule'
import ProjectsModule from '../modules/ProjectsModule'

export const moduleIndex: { [key: string]: ({}: any) => {} } = {
  HeadlineIntroModule,
  IntroColumnsModule,
  OverflowHeadlineModule,
  BigHeadlineModule,
  ProjectsModule,
}
