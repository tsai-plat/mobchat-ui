<h1 align="center">Mobile UI Tutorial</h1>
<p align="center" >
  <a href="https://github.com/lotolab" target="blank">
    <img src="https://ucarecdn.com/eac2c945-177d-4fc9-8bc1-fa2be48ad3a2/lotolab_golden.svg" width="100" alt="Tsai Logo" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~tsailab" target="_blank"><img src="https://img.shields.io/npm/l/%40tsailab%2Fcli?color=%23FFDEAD&label=License" alt="License" /></a>
  <a href="https://discord.gg/lotolab" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://x.com/lamborghini171" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>  
  <a href="https://www.npmjs.com/~tsailab" target="_blank"><img src="https://img.shields.io/npm/v/%40tsailab%2Fcore-types" alt="@tsailab/core-types" /></a>
  <a href="https://www.npmjs.com/~tsailab" target="_blank"><img src="https://img.shields.io/npm/dy/%40tsailab%2Fcore-types?style=flat&logoColor=%23FA0809" alt="Downloads" /></a>
</p>


# Install

```bash
git clone git@github.com:tsai-plat/mobchat-ui-tutorial.git mobui-chat

cd mobui-chat
rm -rf .git node_modules pnpm-lock.yaml

pnpm install

git init
git add .gitignore
git commit -am 'ci: initialize'

```

## push new version on main branch

1. npx changeset : generate version with patch/minor or major
2. pnpm log: will generate changelog and push tag to remote
