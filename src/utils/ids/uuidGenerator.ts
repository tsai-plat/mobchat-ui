import { customAlphabet } from 'nanoid'

export const APPKEY_DEFAULT_SEED = '$-.abcdefghjkmnpqrstuvwxyz123456789ABDCEFGHJKLMNPQRSTUVW_'

/**
 *
 * @param prefix
 * @returns string
 */
export function generateRequestId(prefix?: string): string {
  const nanoid = customAlphabet(APPKEY_DEFAULT_SEED, 16)

  const id = nanoid()
  return prefix?.length ? `${prefix}${id}` : id
}
