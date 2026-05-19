# 优肯174色旧表

> 完整标题：优肯 174色（公开源码库旧表）

- 生成日期：2026-05-19
- 系列短名：优肯174色旧表
- 总颜色数：174
- 有 RGB：174
- 无 RGB / 透明或未公开：0
- 不可辨认色号：0
- 分组：C(157), CE(17)
- 国内手工小店主流度：B- / 3.0 - 旧公开表/参考价值高于采购价值

## 文件

- `colors.json`：脚本读取用，采用 `pindou-color-palette`；每个颜色含 `code`、`hex`、`rgb`、`group`、`source`，不可辨认色号会额外带 `unidentified: true`。
- `colors.xlsx`：人工查看用，不同色系分 sheet，色块 cell 已填充对应颜色。
- `legend.pdf`：可直接转发的人类友好图例，包含色号、HEX、RGB 和实际色块。
- `README.md`：本说明。

## 国内手工小店主流度评估

- 评级：B-
- 分数：3.0 / 5
- 标签：旧公开表/参考价值高于采购价值
- 摘要：优肯/Artkal 本身较主流，但此 174 色公开库旧表不是当前最完整官方体系；适合交叉参考，不建议作为主备货口径。

证据：

- Artkal 在比特拼豆和多个工具中被列为主流或常见品牌。
- 该表来自公开源码库的旧优肯数据，和官方 C197/M221 口径不完全一致。
- 当前采购和对色更应看 Artkal 官方 C197、M221 或 C+M418。

## 来源

- https://git.xiongxiao.me/abearxiong/get-colors-from-beans/src/branch/main/get-colors.json

## 来源质量统计

- `third_party_public_repository`：174

## 注意事项

- RGB 是屏幕参考值，不等于实物颜色；严谨对色请以实物色卡为准。
- 本系列包含公开源码/工具站数据，不等同于品牌官方标准。

## JSON 结构简例

```json
{
  "schema": "pindou-color-palette",
  "id": "youken-public-174",
  "title": "优肯174色旧表",
  "count": 174,
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
