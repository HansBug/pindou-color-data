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
- 新增系列时同步更新根 `README.md` 和 `manifest.json`。
- 维护脚本放在 `scripts/`，调整 JSON 后需要重新生成 XLSX/PDF/README 时优先复用脚本。

## 推荐用法

重生成依赖：`python -m pip install openpyxl pillow`。

其他项目可以将本仓库作为 submodule：

```bash
git submodule add https://github.com/HansBug/pindou-color-data.git data/pindou-color-data
```
