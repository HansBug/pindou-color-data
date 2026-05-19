# AGENTS.md

这是一个拼豆色卡数据仓库，不是应用仓库。维护时请保持数据结构稳定，方便其他项目以 git submodule 方式引用。

## 仓库定位

- 根目录下每个子目录代表一个色卡系列。
- 每个系列目录固定包含 `colors.json`、`colors.xlsx`、`legend.pdf`、`README.md`。
- `colors.json` 是机器读取的主数据；`colors.xlsx` 和 `legend.pdf` 是人工核对与转发材料。
- 顶层 `manifest.json` 是所有系列的清单。

## 数据维护规则

- 更新颜色数据时，同步更新对应系列的 JSON、XLSX、PDF 和 README。
- 不要只改人工文件而不同步 `colors.json`。
- 保留 `source_url`、`source_quality`、`notes` 字段，避免混淆官方来源与公开工具站来源。
- RGB 是屏幕参考值，不等于实物颜色；不要在说明中宣称其为绝对实物标准。
- 普通颜色保持 `#RRGGBB` / `[r,g,b]`；带 `transparency` 的透明颜色使用 `#RRGGBBAA` / `[r,g,b,a]`，让数据消费者能明确识别透明项。alpha 是仓库的数据表达/图例预览口径，不是品牌官方物理透光率。
- 无法从多路公开来源确认真实品牌色号的颜色，使用稳定占位 `UNKNOWN-*`，并必须带 `unidentified: true` 与 `original_code`。下游严格使用品牌色号时应过滤 `unidentified` 项。
- 不要把不可辨认色号按相近 RGB 猜成某个品牌色号；只有在至少两路独立公开来源或官方来源能确认时才修正 `code`。
- 完全重复的颜色数据不要作为独立系列保留；只在 README/AGENTS 里记录别名、来源关系和去重原因。
- 不完全重复的数据需要保留，并在 README 里说明差异范围、优先参考口径和适用场景。
- 新增系列时同步更新根 `README.md` 和 `manifest.json`。
- 维护脚本放在 `scripts/`，调整 JSON 后需要重新生成 XLSX/PDF/README 时优先复用脚本。

## 异常色号处理流程

- 每次改动颜色数据后，至少扫描 `colors.json` 中的空串、`-`、`unknown`、无字母数字/中文的色号，以及同系列重复 `code`。
- 如果发现上游错码或重复码，先核对原始 HTML/JSON，再用官方资料、公开源码、工具站前端数据等多路来源交叉验证；当前常用交叉源包括 get-colors-from-beans、xiaoana、Zippland/perler-beads、PinDou 前端 colorSystemMapping。
- 只有真实品牌色号能被官方来源或至少两路独立公开来源支持时，才直接修正 `code`。修正时保留原始 HEX/RGB，并在该颜色 `notes` 写明原始上游错误和修正依据。
- 如果只能确认上游色号不可读，但不能确认真实品牌色号，不能用 RGB 最近邻或相似 W 色号猜测。此时分配稳定占位 `UNKNOWN-01`、`UNKNOWN-02` 等，写入 `unidentified: true`、`original_code` 和说明性 `notes`。
- `UNKNOWN-*` 是仓库占位 ID，不是品牌官方色号。面向严格采购、配色转换或图纸生成的下游应用应默认过滤 `unidentified: true` 的颜色，除非用户明确允许使用未知色。
- 修改 JSON 后运行 `python scripts/generate_deliverables.py`，并确认 README、XLSX、PDF、manifest 都反映 `unidentified` 数量和说明。
- 不要为了让表面统计更整齐而删除不可辨认色；保留带标记的原始颜色比静默丢弃更利于后续追溯和修复。

## 已确认的数据关系

- `mard-221-alfonse-doudou` 与 `mard-221-github` 都是 MARD 221 色号体系，221 个色号集合完全一致，但有 77 个 HEX/RGB 不同；两者不是完全重复，需同时保留。默认优先参考 `mard-221-alfonse-doudou`，源码版用于交叉校验。
- `manman-278` 原始上游 HTML 中有 5 组重复色号；已用 xiaoana、Zippland/perler-beads、PinDou 前端 colorSystemMapping 和 get-colors-from-beans colorMap 交叉验证修正为唯一色号，RGB/HEX 仍沿用原始页面采样值。
- `panpan-289` 与 `mixiaowo-290` 原始上游 HTML 中各有 4 个 `-` 色号；这些 HEX 未能在多路公开映射中确认真实品牌色号，当前标为 `UNKNOWN-01` 到 `UNKNOWN-04`，并带 `unidentified: true`。
- `youken-mard-221-public` 与 `artkal-m-221-official` 在规范化色号后完全重复：`A1` 对应 `MA1`，`H1[透明]` 对应 `MH1`。独立目录已删除；需要优肯 MARD 同款 221 时使用 `artkal-m-221-official`。
- `artkal-c-197-official` 的 `CG/CP/CT` 特殊材质色号存在于 Artkal 官方 C 系列色卡图和商品体系，但官方 RGB PDF 未发布数值；当前用官方色卡图可见色块采样值补齐，来源质量标为 `official_chart_image_sampled`。其中 `CT01-CT09` 是透明材质，写作 `#RRGGBBAA` / `[r,g,b,a]`。
- `artkal-m-221-official` 的 `MH1` 官方 RGB PDF 只标为 Transparent；当前用比特拼豆 Artkal Mini 页面显示的 `#FFFFFF` 作基底色，写作 `#FFFFFF00` / `[255,255,255,0]`，来源质量标为 `public_tool_display_hex`。不要把它写成 Artkal 官方发布的数值 RGB。
- `huangdoudou-291`、`xiaowu-291` 与 `mard-291-github` 在当前公开源码数据中 291 条 `code`、`hex`、`rgb` 完全一致。独立目录已删除；这只说明当前已收录公开数据重复，不代表品牌实物或未收录官方色卡一定没有差异。

## 推荐用法

重生成依赖：`python -m pip install openpyxl==3.1.5 pillow==12.2.0`。

其他项目可以将本仓库作为 submodule：

```bash
git submodule add https://github.com/HansBug/pindou-color-data.git data/pindou-color-data
```
