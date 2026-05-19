# 拼豆色卡四件套交付目录

生成日期：2026-05-19

每个子目录包含：`colors.json`、`colors.xlsx`、`legend.pdf`、`README.md`。

本仓库定位为拼豆色卡数据仓库，适合其他应用以 git submodule 方式挂载使用。维护脚本保留在 `scripts/`，后续调整 JSON 后可复用脚本重新生成 XLSX/PDF/README。

## 系列清单

| 系列 | 主流度 | 说明 | 子目录 | 颜色数 | 有 RGB | 无 RGB | 不可辨认 |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| [MARD家](mard-221-alfonse-doudou/) | S / 5.0 | 国内最主流/默认参考 | `mard-221-alfonse-doudou` | 221 | 221 | 0 | 0 |
| [MARD家源码版](mard-221-github/) | S / 5.0 | 国内最主流/默认参考 | `mard-221-github` | 221 | 221 | 0 | 0 |
| [MARD家291色](mard-291-github/) | S / 4.7 | 国内默认参考体系的完整版 | `mard-291-github` | 291 | 291 | 0 | 0 |
| [优肯418色](artkal-c197-m221-418-official/) | A / 4.2 | 进阶全量/官方体系 | `artkal-c197-m221-418-official` | 418 | 418 | 0 | 0 |
| [优肯197色](artkal-c-197-official/) | A / 4.1 | 官方稳定/进阶常用 | `artkal-c-197-official` | 197 | 197 | 0 | 0 |
| [优肯M221色](artkal-m-221-official/) | A- / 3.9 | 官方 MARD 兼容新体系 | `artkal-m-221-official` | 221 | 221 | 0 | 0 |
| [COCO](coco-291/) | A- / 3.9 | 常见性价比品牌 | `coco-291` | 291 | 291 | 0 | 0 |
| [漫漫家](manman-278/) | B+ / 3.7 | 老牌/图纸生态常见 | `manman-278` | 278 | 278 | 0 | 0 |
| [盼盼家](panpan-289/) | B+ / 3.6 | 工具生态常见品牌 | `panpan-289` | 289 | 289 | 0 | 4 |
| [咪小窝](mixiaowo-290/) | B / 3.4 | 常见但偏工具/玩家圈 | `mixiaowo-290` | 290 | 290 | 0 | 4 |
| [优肯174色旧表](youken-public-174/) | B- / 3.0 | 旧公开表/参考价值高于采购价值 | `youken-public-174` | 174 | 174 | 0 | 0 |

## 数据关系与去重说明

### 上游错码、缺码与不可辨认色号处理

- `manman-278` 原始上游 HTML 中有 5 组重复色号；本仓库用 xiaoana、Zippland/perler-beads、PinDou 前端 colorSystemMapping 和 get-colors-from-beans colorMap 交叉验证后修正色号，保留原始 HEX/RGB。
- `panpan-289` 与 `mixiaowo-290` 原始上游 HTML 中各有 4 个色号为 `-` 的颜色；这些 HEX 只在对应上游页面自身出现，未能在 xiaoana、Zippland/perler-beads 或 PinDou colorSystemMapping 中确认真实品牌色号。
- 不可确认真实品牌色号的颜色不猜测、不套用相近 W 色号；JSON 使用稳定占位 `UNKNOWN-*`，并写入 `unidentified: true` 与 `original_code: "-"`，方便下游过滤。

### MARD 221 两个来源不是完全重复

- `mard-221-alfonse-doudou`（MARD家）与 `mard-221-github`（MARD家源码版）都是 MARD 221 色号体系，221 个色号集合完全一致。
- 两者颜色数据不完全一致：逐色号对比后有 77 个 HEX/RGB 不同，144 个一致。因此两者都保留；默认建议优先看 `mard-221-alfonse-doudou`，源码版用于交叉校验。
- 差异明细保留在 `Mard-221-source-differences.json`。

### 优肯 MARD 同款 221 与优肯 M221

- 原 `youken-mard-221-public` 与 `artkal-m-221-official` 规范化色号后颜色数据完全重复：`A1` 对应 `MA1`，`H1[透明]` 对应 `MH1`。
- 因此不再保留 `youken-mard-221-public` 独立目录；需要优肯 MARD 同款 221 时直接使用 `artkal-m-221-official`。它是优肯/Artkal M 系列官方口径，不是 MARD 原厂色卡。

### 优肯特殊材质 RGB 补齐口径

- `artkal-c-197-official` 中 `CG/CP/CT` 特殊材质色号存在于 Artkal 官方 C 系列色卡图和商品体系，但官方 RGB PDF 未发布这些色号的数值；当前用官方色卡图可见色块采样值补齐，并以 `official_chart_image_sampled` 标注。
- `CT01-CT09` 是透明材质，JSON 使用 `#RRGGBBAA` / `[r,g,b,a]`（当前 alpha 为 128）和 `transparency` 字段显式标记，避免数据消费者把它当成普通不透明 RGB。
- `artkal-m-221-official` 中 `MH1` 官方 RGB PDF 只标为 Transparent；当前用比特拼豆 Artkal Mini 页面给出的 `#FFFFFF` 作基底色，JSON 写为 `#FFFFFF00` / `[255,255,255,0]`，来源质量为 `public_tool_display_hex`。
- RGBA 中的 alpha 是本仓库的数据表达和图例预览口径，不应当等同为 Artkal 官方发布的物理透光率。

### 黄豆豆、小舞家与 MARD 291

- 当前公开源码数据中，`huangdoudou-291`、`xiaowu-291` 与 `mard-291-github` 的 291 个色号、HEX、RGB 完全一致。
- 为避免把完全重复数据列成独立系列，当前仓库不再保留黄豆豆、小舞家独立目录；需要这两者公开源码口径时可暂按 `mard-291-github` 读取。
- 这只说明当前已收录公开数据完全重复，不代表品牌实物或其他未收录官方色卡一定没有差异；后续拿到可信独立色卡后可恢复独立目录。

## 主流度评级口径

- S：国内手工小店/玩家图纸交流中的默认或最主流体系。
- A：成熟、常见、有较强官方或工具生态支撑，但不一定是普通小店默认。
- B：常见于工具、材料包或玩家圈，适合作为补充品牌。
- 分数为 1-5 的相对评估，综合媒体报道、工具站覆盖、公开色卡生态、搜索可见度与官方资料。

## 调研来源

- 中工网/北京青年报：年轻人涌进 DIY 拼豆店：https://www.workercn.cn/c/2026-02-25/8740893.shtml；报道提到 COCO 手工店价格；MARD 店铺粉丝、复购、抢购；玩家称 MARD 色号体系逐渐成为默认参考标准。
- 淮南日报 PDF：拼豆热升温，手作带火体验经济：https://hnrb.huainannet.com/attachment/202604/08/40d9546e-d38a-43b4-b314-b4b300b22616.pdf；报道 2025-2026 年拼豆消费热度，并引用 Mard 月均产量和供应链增长信息。
- 比特拼豆色卡：https://bitbead.pomodiary.com/zh/colors；将 Perler、Hama、Artkal、MARD 称为四大主流品牌；称 MARD 221 是国内零售最常见版本。
- 拼豆工具站 Mard 标准色卡/售卖页：https://www.pindou.online/colors；以 Mard 标准色卡作为站内核心色卡；售卖页说明豆子与 221 色卡完全对应。
- PinDou 图纸生成器：https://pindou-e90.pages.dev/；覆盖 Perler、Hama、Artkal、MARD、COCO、漫漫、盼盼、咪小窝等 8 大品牌。
- xiaoana 拼豆工具色号映射：https://www.xiaoana.cn/；前端包内含 MARD、COCO、漫漫、盼盼、咪小窝的 HEX 到品牌色号映射，可用于交叉验证国内品牌色号身份。
- Zippland/perler-beads 公开源码：https://github.com/Zippland/perler-beads；公开 `colorSystemMapping.json` 与 CSV 色号对应表，和 xiaoana 映射一致，用于校验漫漫/盼盼/咪小窝异常色号。
- BeadPattern 拼豆图纸生成器：https://beadpattern.net/zh/about；支持 MARD、COCO、漫漫、盼盼、Artkal 等 5 大品牌色号系统。
- 爱拼豆 App Store：https://apps.apple.com/cn/app/%E7%88%B1%E6%8B%BC%E8%B1%86/id6756688364；支持 20+ 种主流拼豆品牌色板，列出 Artkal、MARD、可可、慢慢家、盼盼等。
- 拼豆酱 Perler Chan：https://pindou.baby/；面向中国拼豆玩家，内置 Mard、优肯、黄豆豆色卡；页面标注 Mard 为国内主流，黄豆豆新手友好。
- 公开源码 get-colors-from-beans：https://git.xiongxiao.me/abearxiong/get-colors-from-beans；公开库覆盖 COCO、Mard、优肯、咪小窝、小舞、漫漫、盼盼、黄豆豆等色卡。

附加文件：

- `manifest.json`：所有子目录和统计的机器可读清单。
- `Mard-221-source-differences.json`：MARD 221 两个公开来源之间的 HEX 差异。

## 作为 Submodule 使用

```bash
git submodule add https://github.com/HansBug/pindou-color-data.git data/pindou-color-data
```

## 维护脚本

- `scripts/generate_deliverables.py`：从 `colors.json` 重生成各系列四件套。
- `scripts/build_tables.js`：上游采集/清洗辅助脚本。
- 依赖：`python -m pip install openpyxl==3.1.5 pillow==12.2.0`。
