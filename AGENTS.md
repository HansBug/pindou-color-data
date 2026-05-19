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
- 完全重复的颜色数据不要作为独立系列保留；只在 README/AGENTS 里记录别名、来源关系和去重原因。
- 不完全重复的数据需要保留，并在 README 里说明差异范围、优先参考口径和适用场景。
- 新增系列时同步更新根 `README.md` 和 `manifest.json`。
- 维护脚本放在 `scripts/`，调整 JSON 后需要重新生成 XLSX/PDF/README 时优先复用脚本。

## 已确认的数据关系

- `mard-221-alfonse-doudou` 与 `mard-221-github` 都是 MARD 221 色号体系，221 个色号集合完全一致，但有 77 个 HEX/RGB 不同；两者不是完全重复，需同时保留。默认优先参考 `mard-221-alfonse-doudou`，源码版用于交叉校验。
- `youken-mard-221-public` 与 `artkal-m-221-official` 在规范化色号后完全重复：`A1` 对应 `MA1`，`H1[透明]` 对应 `MH1`。独立目录已删除；需要优肯 MARD 同款 221 时使用 `artkal-m-221-official`。
- `artkal-c-197-official` 的 `CG/CP/CT` 特殊材质色号存在于 Artkal 官方 C 系列色卡图和商品体系，但官方 RGB PDF 未发布数值；当前用官方色卡图可见色块采样值补齐，来源质量标为 `official_chart_image_sampled`。
- `artkal-m-221-official` 的 `MH1` 官方 RGB PDF 只标为 Transparent；当前用比特拼豆 Artkal Mini 页面显示的 `#FFFFFF` 作屏幕占位，来源质量标为 `public_tool_display_hex`。不要把它写成 Artkal 官方发布的数值 RGB。
- `huangdoudou-291`、`xiaowu-291` 与 `mard-291-github` 在当前公开源码数据中 291 条 `code`、`hex`、`rgb` 完全一致。独立目录已删除；这只说明当前已收录公开数据重复，不代表品牌实物或未收录官方色卡一定没有差异。

## 推荐用法

重生成依赖：`python -m pip install openpyxl==3.1.5 pillow==12.2.0`。

其他项目可以将本仓库作为 submodule：

```bash
git submodule add https://github.com/HansBug/pindou-color-data.git data/pindou-color-data
```
