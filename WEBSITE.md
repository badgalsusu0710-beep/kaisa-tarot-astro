# Kaisa Tarot & Astrology 官网

## 本地预览

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

构建结果位于 `dist/`，可以直接上传到静态网站托管服务。

## 上线前必须替换

网站目前使用明确标注的占位内容，不能直接作为正式版本发布。

1. 在 `src/data/site.ts` 中替换微信号、邮箱、Instagram 地址、服务项目、价格、时长、交付方式和客户反馈。
2. 所有原始与网页用素材统一保存在 `website-assets/`；当前形象照、证书和二维码已经接入。
3. 根据最终域名修改 `astro.config.mjs` 中的 `site`，以及 `public/robots.txt` 中的站点地图地址。
4. 使用正式肖像和品牌信息重新制作 `website-assets/public/images/og-image.png`。
5. 核对 LSA、ISAR 资质的正式中英文名称，并补充证书图片或验证信息。

## 阿里云香港发布

1. 购买并确认独立域名。
2. 在阿里云香港区域创建 OSS Bucket，开启静态网站托管，首页设为 `index.html`，错误页设为 `404.html`。
3. 运行 `npm run build`，将 `dist/` 内全部文件上传到 Bucket 根目录。
4. 绑定自定义域名并配置 HTTPS 证书。
5. 如启用 CDN，选择“全球（不含中国大陆）”，将 CDN 域名回源至 OSS，并配置 DNS CNAME。
6. 发布后分别使用中国大陆移动、联通、电信网络及海外网络检查速度、二维码和语言切换。

## 页面路径

- 中文：`/zh/`、`/zh/about/`、`/zh/services/`、`/zh/approach/`、`/zh/contact/`
- English: `/en/`, `/en/about/`, `/en/services/`, `/en/approach/`, `/en/contact/`

根路径 `/` 自动进入中文站。站点不包含数据库、在线支付、登录或内容后台。
