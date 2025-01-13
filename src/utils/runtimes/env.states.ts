export const isDevMode = () => !!import.meta.env.DEV
export function getAppEnvConfig() {
  const { VITE_GLOBAL_API_URL, VITE_GLOB_APP_TITLE, VITE_GLOB_IMG_URL } = import.meta.env
  return { VITE_GLOBAL_API_URL, VITE_GLOB_IMG_URL, VITE_GLOB_APP_TITLE }
}
