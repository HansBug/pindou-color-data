# 优肯M221色

> 完整标题：优肯 / Artkal M系列 221色（官方整理）

- 生成日期：2026-05-19
- 系列短名：优肯M221色
- 总颜色数：221
- 有 RGB：221
- 无 RGB / 未填数值：0
- 分组：MA(26), MB(32), MC(29), MD(26), ME(24), MF(25), MG(21), MH(23), MM(15)
- 国内手工小店主流度：A- / 3.9 - 官方 MARD 兼容新体系

## 文件

- `colors.json`：脚本读取用，采用 `pindou-color-palette`；每个颜色含 `code`、`hex`、`rgb`、`group`、`source`。
- `colors.xlsx`：人工查看用，不同色系分 sheet，色块 cell 已填充对应颜色。
- `legend.pdf`：可直接转发的人类友好图例，包含色号、HEX、RGB 和实际色块。
- `README.md`：本说明。

## 国内手工小店主流度评估

- 评级：A-
- 分数：3.9 / 5
- 标签：官方 MARD 兼容新体系
- 摘要：Artkal M 221 是官方 M 系列，对 MARD 色号需求有兼容意义；国内小店主流度目前低于 MARD 标准本体，但官方性和扩展价值较强。

证据：

- Artkal M-2.6mm 官方页写明 221 colors，并提供 RGB color chart。
- 官方页说明 M 系列与 C 系列同材质同尺寸，可一起熔合。
- 优肯/Artkal 在多个工具和教程中被列为主流或常见品牌。

## 来源

- https://cdn.shopify.com/s/files/1/1323/8195/files/M_MINI_Beads_RGB_Color_Chart_2025.pdf?v=1760661747
- https://bitbead.pomodiary.com/zh/colors/artkal-mini/MH1

## 来源质量统计

- `official_pdf`：220
- `public_tool_display_hex`：1

## 注意事项

- RGB 是屏幕参考值，不等于实物颜色；严谨对色请以实物色卡为准。
- 本系列含透明色：普通颜色保持 `#RRGGBB` / `[r,g,b]`，透明颜色使用 `#RRGGBBAA` / `[r,g,b,a]`，并保留 `transparency` 字段。
- RGBA 中的 alpha 用于让数据消费者明确识别透明项，并用于图例预览；它不是品牌官方发布的物理透光率。
- `public_tool_display_hex` 表示公开工具站给出的屏幕显示 HEX/RGB；用于透明色等缺少官方数值的占位显示，不等同于官方物理颜色数值。

## JSON 结构简例

```json
{
  "schema": "pindou-color-palette",
  "id": "artkal-m-221-official",
  "title": "优肯M221色",
  "count": 221,
  "colors": [
    {
      "code": "MA1",
      "hex": "#FFF6D4",
      "rgb": [
        255,
        246,
        212
      ],
      "group": "MA"
    }
  ]
}
```
