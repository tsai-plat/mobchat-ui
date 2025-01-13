import { isEmail } from './is.email'
import { is86Phone } from './is.mobile'

export const accountValidator = (account: string) => {
  if (!account?.length) return false
  if (!is86Phone(account) && !isEmail(account)) return false
  return true
}
