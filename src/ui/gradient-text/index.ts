export interface Gradient {
  from: string
  to: string
  deg?: number | string // 渐变角度，默认 252，单位 deg
}
export interface GradientTextProps {
  gradient?: string | Gradient // 文字渐变色参数
  size?: number | string // 文字大小，不指定单位时，默认单位 px
  weight?: number // 文字粗细
  type?: 'primary' | 'info' | 'success' | 'warning' | 'error' // 渐变文字的类型
}


export { default as GradientText } from './GradientText.vue'
