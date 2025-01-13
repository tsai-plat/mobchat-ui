export class RandomHelper {
  /**
   * Client
   * @param prefix ClientTypeEnum.mobileChat
   * @returns
   */
  static clientUUID(prefix?: string) {
    if (!prefix?.length) {
      const prex1 = (Math.random() * Math.pow(36, 1)) | 0
      const prex2 = (Math.random() * Math.pow(36, 1)) | 0
      prefix = prex1.toString(36).toUpperCase() + prex2.toString(36).toUpperCase()
    }

    const now = Date.now()
    const random = (Math.random() * Math.pow(36, 4)) | 0
    const temp = `00000${random}`.slice(-4)
    const uuid = Number(`${now}${temp}`).toString(36)

    return `${prefix}_${uuid}`
  }
}
