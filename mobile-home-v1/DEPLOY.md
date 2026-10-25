# 运行、部署与旧成果保护

## 推荐部署：静态托管

本版 dist/ 就是完整发布目录，不需要 npm install，不需要 API 密钥、数据库或构建。

### Vercel

1. 先审阅独立分支或下载源码，不直接覆盖旧项目。
2. 从 GitHub 导入本仓库，新建独立 Vercel 项目，选择独立版本分支。
3. Root Directory 设为 mobile-home-v1；Framework Preset 选 Other；Build Command 留空；Output Directory 设为 dist；不设 Install Command。
4. 先检查生成的预览地址与手机表现。测试表单、复制、清空，确认“不发送”的提示。
5. 正式投放前接上已确认的业务联系入口并完善对应隐私说明，再决定是否绑定自己的域名。不要覆盖 x-pm.ai 的现有 DNS 或切换既有站点流量，除非已核查旧部署并获授权。

### GitHub Pages（可选）

审阅并合并独立分支后，可在 Settings → Pages 选择 GitHub Actions，用官方静态站点工作流上传 mobile-home-v1/dist。当前未启用，也未替用户更改仓库设置。路径均为相对路径，可运行在仓库子路径下。

### 其他托管

把 dist 目录内容上传至任意支持 HTTPS 的静态托管。无需 SPA fallback，首页为 index.html。对中国大陆访客实际测试网络、微信内置浏览器及 HTTPS；中国大陆托管可能有备案等要求，应由运营者按实际落地区域核实。

## 安全核查 Mac 上的旧代码

下面都是只读命令，可在本地 Codex 使用。不要先执行 git reset、clean、pull、强推或复制覆盖。

```bash
cd /Users/yujianjing/.openclaw/workspace/x-pm-ai-site
pwd
git status --short --branch
git remote -v
git branch -avv
git log --all --oneline -15
git ls-files
```

检查 index.html、styles.css、README.md 及部署配置；不要输出 .env、令牌或客户名单。保留未提交文件和本地分支。需要比较时，在另一个目录检出新分支；先 diff 再有选择地移入，禁止整目录覆盖。

## 回滚

本次不合并 main。GitHub 独立分支及 PR 可保留或关闭，不影响 main。Sites 为独立私有审阅站，原域名及其他托管不受影响。将来上线前记录上一部署版本，失败时在托管控制台恢复旧版本；不要通过删除历史恢复。
