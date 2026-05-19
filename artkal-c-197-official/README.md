# 优肯197色

> 完整标题：优肯 / Artkal C系列 197色（官方整理）

- 生成日期：2026-05-19
- 系列短名：优肯197色
- 总颜色数：197
- 有 RGB：197
- 无 RGB / 未填数值：0
- 分组：C(157), CE(17), CG(7), CP(7), CT(9)
- 国内手工小店主流度：A / 4.1 - 官方稳定/进阶常用

## 文件

- `colors.json`：脚本读取用，采用 `pindou-color-palette`；每个颜色含 `code`、`hex`、`rgb`、`group`、`source`。
- `colors.xlsx`：人工查看用，不同色系分 sheet，色块 cell 已填充对应颜色。
- `legend.pdf`：可直接转发的人类友好图例，包含色号、HEX、RGB 和实际色块。
- `README.md`：本说明。

## 国内手工小店主流度评估

- 评级：A
- 分数：4.1 / 5
- 标签：官方稳定/进阶常用
- 摘要：Artkal/优肯是国内外都可见的成熟品牌；C 系列 197 色有官方色卡和 RGB PDF，适合对官方出处和颜色稳定性要求更高的玩家/小店。

证据：

- Artkal 官方 C-2.6mm 页面写明 197 colors，并提供 RGB color chart。
- 比特拼豆将 Artkal 与 MARD 等列入主流色卡体系。
- 拼豆酱和爱拼豆等工具把 Artkal/优肯纳入国内品牌色卡支持。

## 来源

- https://cdn.shopify.com/s/files/1/1323/8195/files/C_MINI_Beads_RGB_Color_Chart_2024.pdf?v=1744700289
- https://cdn.shopify.com/s/files/1/1323/8195/files/artkal_beads_C_series_color_chart.jpg?v=1744700233

## 来源质量统计

- `official_pdf`：172
- `official_chart_image`：2
- `official_chart_image_sampled`：23

## 注意事项

- RGB 是屏幕参考值，不等于实物颜色；严谨对色请以实物色卡为准。
- 本系列含透明色：普通颜色保持 `#RRGGBB` / `[r,g,b]`，透明颜色使用 `#RRGGBBAA` / `[r,g,b,a]`，并保留 `transparency` 字段。
- RGBA 中的 alpha 用于让数据消费者明确识别透明项，并用于图例预览；它不是品牌官方发布的物理透光率。
- `official_chart_image_sampled` 表示从 Artkal 官方色卡图可见色块采样得到的参考 RGB；官方 RGB PDF 未发布这些特殊材质的数值。

## JSON 结构简例

```json
{
  "schema": "pindou-color-palette",
  "id": "artkal-c-197-official",
  "title": "优肯197色",
  "count": 197,
  "colors": [
    {
      "code": "C01",
      "hex": "#FFFFFF",
      "rgb": [
        255,
        255,
        255
      ],
      "group": "C"
    }
  ]
}
```
