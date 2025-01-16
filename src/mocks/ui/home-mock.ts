import financialLogo from '@/assets/icons/ai-financial.png'
import travelLogo from '@/assets/icons/ai-travel.png'
import fitnessLogo from '@/assets/icons/ai-fitness.png'

import chat01 from '@/assets/icons/icon-chat01.png'
import chatPrompt from '@/assets/icons/icon-prompt.png'
import chatDiandian from '@/assets/icons/icon-diandian.png'

export type UiPosType = 'home-major' | 'home-agent' | 'home-prompts'

export type ChatbotItem = {
  chatid: string
  title: string
  description?: string
  logo?: string
  icon?: string
  styles?: Record<string, any>
  sortno?: number
  postype?: UiPosType
  showBadge?: boolean
  badge?: string
}

export const majorItems: ChatbotItem[] = [
  {
    chatid: 'chat-001',
    title: '理财助手',
    logo: financialLogo,
    sortno: 1,
    description:
      '管理您个人及家庭日常收入支出,AI帮你更好的规划您的财务收支。AI自动整理微信、支付宝、邮件、短信等日常收支数据，自动分类打造您的私人财务数据库。',
    showBadge: true,
    badge: '999+',
  },
  {
    chatid: 'chat-002',
    title: '旅行规划',
    logo: travelLogo,
    sortno: 2,
    description:
      '管理您个人及家庭日常收入支出,AI帮你更好的规划您的财务收支。AI自动整理微信、支付宝、邮件、短信等日常收支数据，自动分类打造您的私人财务数据库。',
  },
  {
    chatid: 'chat-003',
    title: '健身助手',
    logo: fitnessLogo,
    sortno: 3,
    description:
      '管理您个人及家庭日常收入支出,AI帮你更好的规划您的财务收支。AI自动整理微信、支付宝、邮件、短信等日常收支数据，自动分类打造您的私人财务数据库。',
    showBadge: true,
    badge: '10k+',
  },
]

export const promptItems: ChatbotItem[] = [
  {
    chatid: 'chat-101',
    title: '视频脚本优化',
    logo: fitnessLogo,
    icon: chat01,
    sortno: 4,
    description:
      '管理您个人及家庭日常收入支出,AI帮你更好的规划您的财务收支。AI自动整理微信、支付宝、邮件、短信等日常收支数据，自动分类打造您的私人财务数据库。',
    showBadge: true,
    badge: '10k+',
  },
  {
    chatid: 'chat-102',
    title: '小红书营销文案',
    logo: fitnessLogo,
    icon: chatPrompt,
    sortno: 4,
    description:
      '管理您个人及家庭日常收入支出,AI帮你更好的规划您的财务收支。AI自动整理微信、支付宝、邮件、短信等日常收支数据，自动分类打造您的私人财务数据库。',
    showBadge: true,
    badge: '10k+',
  },
  {
    chatid: 'chat-103',
    title: '点点带你学营销',
    logo: fitnessLogo,
    icon: chatDiandian,
    sortno: 4,
    description:
      '管理您个人及家庭日常收入支出,AI帮你更好的规划您的财务收支。AI自动整理微信、支付宝、邮件、短信等日常收支数据，自动分类打造您的私人财务数据库。',
    showBadge: true,
    badge: '10k+',
  },
  ...majorItems.map((v) => ({ ...v, icon: v.logo })),
]
