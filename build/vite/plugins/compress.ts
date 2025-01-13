import type { Plugin } from 'vite'

import compressPlugin from 'vite-plugin-compression'
/**
 * @see https://github.com/anncwb/vite-plugin-compression
 * @param compress
 * @param deleteOriginFile
 */
export function configCompressPlugin(
  compress: 'gzip' | 'brotli' | 'none' | 'gzip,brotli' = 'none',
  deleteOriginFile = false,
) {
  const compressList = compress.split(',')
  const plugins: Plugin[] = []
  if (compressList.includes('gzip')) {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        deleteOriginFile,
      }),
    )
  }

  if (compressList.includes('brotli')) {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile,
      }),
    )
  }
  return plugins
}
