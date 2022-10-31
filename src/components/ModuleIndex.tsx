import HeadlineIntroModule from '../modules/HeadlineIntroModule'
import IntroColumnsModule from '../modules/IntroColumnsModule'
import OverflowHeadlineModule from '../modules/OverflowHeadlineModule'
import BigHeadlineModule from '../modules/BigHeadlineModule'
import HeroListModule from '../modules/HeroListModule'
import HeroFooterNavModule from '../modules/HeroFooterNavModule'

export const moduleIndex: { [key: string]: ({}: any) => {} } = {
  HeadlineIntroModule,
  IntroColumnsModule,
  OverflowHeadlineModule,
  BigHeadlineModule,
  HeroListModule,
  HeroFooterNavModule,
}
