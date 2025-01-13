export default {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375,
      exclude: [/node_modules/],
      unitToConvert: 'px',
      unitPrecision: 5, // 单位转换后保留的精度
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
