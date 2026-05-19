# 优肯418色

> 完整标题：优肯 / Artkal 418色（C197 + M221 官方合并）

- 生成日期：2026-05-19
- 系列短名：优肯418色
- 总颜色数：418
- 有 RGB：394
- 无 RGB / 透明或未公开：24
- 分组：C(157), CE(17), CG(7), CP(7), CT(9), MA(26), MB(32), MC(29), MD(26), ME(24), MF(25), MG(21), MH(23), MM(15)
- 国内手工小店主流度：A / 4.2 - 进阶全量/官方体系

## 文件

- `colors.json`：脚本读取用，采用 `pindou-color-palette`；每个颜色含 `code`、`hex`、`rgb`、`group`、`source`。
- `colors.xlsx`：人工查看用，不同色系分 sheet，色块 cell 已填充对应颜色。
- `legend.pdf`：可直接转发的人类友好图例，包含色号、HEX、RGB 和实际色块。
- `README.md`：本说明。

## 国内手工小店主流度评估

- 评级：A
- 分数：4.2 / 5
- 标签：进阶全量/官方体系
- 摘要：优肯/Artkal 418 色是 C197 + M221 的官方合并口径，色域和官方出处强；对普通手工小店不是最便宜默认选择，但对进阶备货和精细图纸很有价值。

证据：

- Artkal 官方分别发布 C197 和 M221 RGB chart。
- 比特拼豆称 Artkal 色号丰富，并把 Artkal/MARD 纳入主流色卡体系。
- 拼豆酱面向中国玩家列出优肯 Artkal，并标注其色彩丰富。

## 来源

- https://cdn.shopify.com/s/files/1/1323/8195/files/C_MINI_Beads_RGB_Color_Chart_2024.pdf?v=1744700289
- https://cdn.shopify.com/s/files/1/1323/8195/files/artkal_beads_C_series_color_chart.jpg?v=1744700233
- https://artkalfusebeads.com/pages/c-color-chart
- https://cdn.shopify.com/s/files/1/1323/8195/files/M_MINI_Beads_RGB_Color_Chart_2025.pdf?v=1760661747

## 来源质量统计

- `official_pdf`：393
- `official_chart_image`：2
- `official_chart_code_only`：23

## 注意事项

- RGB 是屏幕参考值，不等于实物颜色；严谨对色请以实物色卡为准。
- 下列色号没有可用 RGB 或属于透明/特殊材质未公开 RGB：CG01, CG02, CG03, CG04, CG05, CG06, CG07, CP01, CP02, CP03, CP04, CP05, CP06, CP07, CT01, CT02,
CT03, CT04, CT05, CT06, CT07, CT08, CT09, MH1

## JSON 结构简例

```json
{
  "schema": "pindou-color-palette",
  "id": "artkal-c197-m221-418-official",
  "title": "优肯418色",
  "count": 418,
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
