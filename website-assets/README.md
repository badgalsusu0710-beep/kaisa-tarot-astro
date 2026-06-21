# 官网素材目录

本目录集中保存 Kaisa Tarot & Astrology 官网需要的全部视觉素材。

## `originals/`

- 用户提供的原始形象照、场景照片、证书和微信二维码。
- 文件仅用于后续选图与重新导出，不会被 Astro 发布到网站。

## `public/`

- 网站实际发布的静态素材目录，由 `astro.config.mjs` 的 `publicDir` 指向。
- `images/media/` 保存经过网页尺寸压缩的 WebP 图片和二维码 PNG。
- `favicon.svg`、`images/og-image.png` 与 `robots.txt` 分别用于浏览器图标、社交分享和搜索引擎。

## 当前选图

- 关于页主形象：`portrait-main.webp`
- 关于页形象组：`portrait-close.webp`、`portrait-editorial.webp`
- LSA 证书：`credential-lsa.webp`
- 首页场景：`tarot-city.webp`、`practice-astrology.webp`、`practice-ocean.webp`
- 微信预约：`wechat-qr.png`

所有网页用图均保留原比例，仅进行旋转校正、尺寸压缩和 WebP 转换，没有生成式修改人物、证书或二维码内容。
