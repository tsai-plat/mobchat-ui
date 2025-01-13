import './expandNodeGlobal.mjs'
import process from 'node:process'
import * as path from 'node:path'
import * as fs from 'node:fs'
import { execSync } from 'node:child_process'
import archiver from 'archiver'
import chalk from 'chalk'
import * as dotenv from 'dotenv'

dotenv.config()

const DistZipDirname = 'dist-zip'
main()
  .then((result) => {
    globalThis.console.log(chalk.cyanBright(`🎉🎉✨🎉🎉 process successfully. [${result}]`))
  })
  .catch((ex) => {
    console.error(ex)
  })

async function main() {
  const envInfo = buildCompressInfo()
  writeBuildInfo(envInfo)
  const zipFilePath = await compressZip(envInfo)

  // if (zipFilePath && envInfo.isPushRemote) pushRemote(zipFilePath, envInfo)

  return zipFilePath
}

// async function pushRemote(file, envInfo) {
//   const { remoteDist, sshPem, root, filename } = envInfo

//   const keyPath = path.resolve(root, 'dist-zip', sshPem)
//   const distZipDir = path.join(root, 'dist-zip')
//   const srcFile = `${filename}.zip`
//   const command = `CD ${distZipDir} && SCP -i ${sshPem} ${srcFile} ${remoteDist}/`
//   if (!fs.existsSync(keyPath)) throw new Error(`Unfound ssh key [${keyPath}]`)

//   globalThis.console.log(chalk.bgBlueBright(`✨✨ Begin push zip to remote: ${command}`))

//   execSync(command, { stdio: 'inherit' })

//   // const scp = spawn(command,{})
//   // scp.stdout.on('data', (data) => {
//   //   globalThis.console.log(data)
//   // })

//   // scp.stderr.on('data', (data) => {
//   //   globalThis.console.log(`SCP execute err : ${data}`)
//   // })

//   // scp.stdout.on('exit', (code, signal) => {
//   //   globalThis.console.log(code, signal)
//   //   globalThis.console.log(chalk.bgGreenBright(`Push Remote Completed. [${remoteDist}/${filename}.zip]`))
//   // })
// }

function buildCompressInfo() {
  const pkgJSON = globalThis.loadJSON('../../package.json', import.meta.url)
  const { name, version } = pkgJSON

  const now = new Date()
  let appName = name.split(/\@|\//)?.length > 0 ? name.split(/\@|\//).slice(-1)[0] : name

  const hash = execSync('git rev-parse --short HEAD').toString().trim()

  const zipDir = path.resolve(process.cwd(), DistZipDirname)
  if (!fs.existsSync(zipDir)) fs.mkdirSync(zipDir)

  const argvList = process.argv.splice(2)
  globalThis.console.log(argvList)
  const isPushRemote =
    argvList?.length && (argvList.find((v) => v === '--push') || argvList.find((v) => v === '-p'))

  const info = {
    buildInfoName: 'app_build.txt',
    filename: `${appName}_v${version}`,
    buildTime: now.toISOString(),
    root: process.cwd(),
    zipDir,
    commitHash: hash,
    isPushRemote: !!isPushRemote,
  }

  if (process.env.REMOTE_HOST) {
    info.remoteDist = `${process.env.REMOTE_HOST}:/data/zips`
    info.sshPem = process.env.SSH_PEM ?? 'svr_pem'
  }

  return info
}

function writeBuildInfo(envInfo) {
  const { buildInfoName, buildTime, filename, root, commitHash } = envInfo

  const data = `
name: ${filename}
buildTime: ${buildTime}
commitHash: ${commitHash}
  `
  const file = path.resolve(root, 'dist', buildInfoName)
  fs.writeFileSync(file, data, { encoding: 'utf-8' })
}

async function compressZip(envInfo) {
  const { filename, zipDir, root } = envInfo
  const outFile = path.resolve(zipDir, `${filename}.zip`)
  const stream = fs.createWriteStream(outFile)
  const zipSrcDir = path.resolve(root, 'dist')

  return new Promise((resolve, reject) => {
    globalThis.console.log(`✨ ${chalk.cyan(`[${filename}]`)} - begin compressing...`)
    const archive = archiver('zip', {
      zlib: { level: 9 },
    })

    archive
      .directory(zipSrcDir, false)
      .on('error', (err) => reject(err))
      .pipe(stream)

    stream.on('close', () => resolve(outFile))
    archive.finalize()
  })
}
