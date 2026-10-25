# 实际开发状态核查

核查日：2026-10-25（上海时间）。先核查再新建，未修改原 main。

## 当前可验证的事实

仓库：https://github.com/pmakashic-bit/x-pm-ai-site

- 分支 API 仅返回 main，HEAD 为 42a07ed3dd005dc711372d096ee3866c1bb9766b。
- 提交列表仅一条：2026-10-08T08:42:54Z，docs: initialize X-PM AI project README。
- 根目录只有 README.md，其内容明确尚无源码、依赖、启动命令或测试。
- 全部 PR 查询为空，Actions runs total_count=0。
- 仓库元数据 homepage=null、has_pages=false；可确认 GitHub Pages 未启用，不能据此判断 Vercel 等平台。
- 当前账户 Sites 列表为空，未发现可复用的 Sites 站点。
- 当前云端工作目录没有既有源码，没有挂载用户 Mac。
- GitHub deployments/pages 专用接口不在当前连接器允许范围，未能读取；未访问 Vercel 账户控制台，未验证 x-pm.ai 域名状态。

证据接口：仓库、branches、commits、contents、pulls?state=all、actions/runs，均在 GitHub API 对应仓库路径下。

## 找到但无法直接验证的旧成果线索

历史对话检索出现：用户曾描述 Mac 目录 /Users/yujianjing/.openclaw/workspace/x-pm-ai-site 内有 index.html、styles.css、README.md，且已本地 Git 提交。此为历史陈述，不等同于此次读取到文件。当前环境无法访问这个 Mac 路径。

历史记录还提过 Vercel 部署计划及 x-pm.ai / www.x-pm.ai；均不能作为部署成功证据。“云环境已发布”也不等同于网站已部署。

文件搜索只定位到仓库创建/初始化相关截图线索，未取到可复用源码。没有据截图摘要作出当前代码内容判断。

结论：远端目前是初始化状态；本地可能存在未同步成果。必须先在 Mac 对该目录只读检查，才能确认与本版是否需要合并。不能说项目从未开发，不能说原站从未部署。

## 本次新增

全新隔离工作目录及独立 GitHub 分支，原 README 与 main 保留。新增文件置于 mobile-home-v1/，避免与可能存在的根目录 HTML/CSS 同名覆盖。另建私有 Sites 审阅版本，不改原域名、不切换原站流量。

## 本版验证结果

- node --check dist/app.js 通过。
- 云端 Chrome 实测：服务卡片预选主题；未勾选说明时阻止生成；勾选后摘要正确；点击复制显示“已复制，尚未发送”；清空后主题和确认复位、摘要隐藏。
- 390px 宽 iframe 检查（内容可用宽度 375px）：单列首屏、底部咨询入口正常，body.scrollWidth 等于 clientWidth，无横向溢出。
- 尚未在真实 iPhone/Safari、微信内置浏览器或大陆网络实测，也未测试实际收件，因为未接收件渠道。
