import banner0 from '@/assets/images/banner-aigc0.png'
import banner1 from '@/assets/images/banner-aigc1.png'
import banner2 from '@/assets/images/banner-aigc2.png'
import banner3 from '@/assets/images/banner-aigc3.png'

export interface HomeHeadBanner {
  link?: string
  banner: string
  slogan?: string
}
export const banners: HomeHeadBanner[] = [
  {
    banner: banner0,
  },
  {
    banner: banner1,
  },
  {
    banner: banner2,
  },
  {
    banner: banner3,
  },
]
