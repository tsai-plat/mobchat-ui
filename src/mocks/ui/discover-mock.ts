import type { UiPosType } from './home-mock'
import aiScaleDraw from '@/assets/images/ai-draw-example1.jpg'
import aiScaleIcon from '@/assets/icons/icon-udio.png'
import aiMusicGen from '@/assets/images/a-music.jpg'
import aiMusicIcon from '@/assets/icons/icon-reecho.png'

import aiCreationDraw from '@/assets/images/ai-draw-example2.jpg'
import aiCreationIcon from '@/assets/icons/icon-chat01.png'

import aiTranslateImg from '@/assets/images/ai-translate2.jpg'
import aiTranslateIcon from '@/assets/icons/icon-prompt.png'

export type AgentItemInfo = {
  id: string
  name: string
  to?: string
  image?: string
  icon?: string
  styles?: Record<string, any>
  sortno?: number
  postype?: UiPosType
  text?: string
}

export const discoveAagents: AgentItemInfo[] = [
  {
    id: '1',
    name: 'AI 扩图',
    image: aiScaleDraw,
    icon: aiScaleIcon,
    text: '通过DALL.3修复小图片',
  },
  {
    id: '2',
    name: 'AI 音乐',
    image: aiMusicGen,
    icon: aiMusicIcon,
    text: '通过SUNO 1.6生成音乐',
  },
  {
    id: '3',
    name: 'AI 绘图',
    image: aiCreationDraw,
    icon: aiCreationIcon,
    text: '通过DALL.3修复小图片',
  },
  {
    id: '4',
    name: '专业翻译',
    image: aiTranslateImg,
    icon: aiTranslateIcon,
    text: '通过DALL.3修复小图片',
  },
  {
    id: '5',
    name: 'AI 视频',
    image: aiScaleDraw,
    icon: aiTranslateIcon,
    text: '通过可灵创作视频',
  },
]
