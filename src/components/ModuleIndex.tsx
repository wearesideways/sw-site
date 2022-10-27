import HeadlineIntroModule from '../modules/HeadlineIntroModule'
import IntroColumnsModule from '../modules/IntroColumnsModule'
import OverflowHeadlineModule from '../modules/OverflowHeadlineModule'
import BigHeadlineModule from '../modules/BigHeadlineModule'
import HeroListModule from '../modules/HeroListModule'

export const moduleIndex: { [key: string]: ({}: any) => {} } = {
  HeadlineIntroModule,
  IntroColumnsModule,
  OverflowHeadlineModule,
  BigHeadlineModule,
  HeroListModule,
}
