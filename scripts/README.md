# scripts

这个目录保留数据重生成脚本，方便后续维护色卡 JSON 后重新生成 XLSX/PDF/README。

## generate_deliverables.py

从仓库各系列目录的 `colors.json` 重新生成完整四件套：`colors.json`、`colors.xlsx`、`legend.pdf`、`README.md`、`manifest.json`。

当前发布仓库根目录已经是生成后的结构；如果需要重新生成，在仓库根目录运行：

```bash
python scripts/generate_deliverables.py
```

依赖：

```bash
python -m pip install openpyxl==3.1.5 pillow==12.2.0
```

## build_tables.js

从原始公开 JSON / PDF 抽取早期源数据。这个脚本更偏上游采集与清洗，正常只改现有系列 JSON 时不需要运行。

依赖：Node.js；优肯官方 PDF 的文本抽取依赖 `pdftotext`。

## 维护建议

- 常规小改：改对应系列 `colors.json`，然后同步更新 XLSX/PDF/README。
- 大规模重建：确认各系列 `colors.json` 已符合 `pindou-color-palette` 后运行 `generate_deliverables.py`。
- 如果新增系列，需要新增系列目录与 `colors.json`，并在 `generate_deliverables.py` 里补 `MARKET_ASSESSMENTS`。
