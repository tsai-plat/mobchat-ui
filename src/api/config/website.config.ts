import pkg from '../../../package.json'

export const webappConfig = Object.freeze({
  title: import.meta.env.VITE_GLOB_APP_TITLE,
  version: pkg.version,
  author: pkg.author,
})
