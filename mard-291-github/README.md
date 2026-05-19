# MARD家291色

> 完整标题：MARD 291色（公开源码库版）

- 生成日期：2026-05-19
- 系列短名：MARD家291色
- 总颜色数：291
- 有 RGB：291
- 无 RGB / 透明或未公开：0
- 分组：A(26), B(32), C(29), D(26), E(24), F(25), G(21), H(23), M(15), P(23), R(28), T(1), Y(5), ZG(8), Q(5)
- 国内手工小店主流度：S / 4.7 - 国内默认参考体系的完整版

## 文件

- `colors.json`：脚本读取用，采用 `pindou-color-palette`；每个颜色含 `code`、`hex`、`rgb`、`group`、`source`。
- `colors.xlsx`：人工查看用，不同色系分 sheet，色块 cell 已填充对应颜色。
- `legend.pdf`：可直接转发的人类友好图例，包含色号、HEX、RGB 和实际色块。
- `README.md`：本说明。

## 国内手工小店主流度评估

- 评级：S
- 分数：4.7 / 5
- 标签：国内默认参考体系的完整版
- 摘要：MARD 是国内玩家和手作小店最容易遇到的参考体系；291 色是 221 色基础上的扩展，全色制作用途强。

证据：

- 中工网报道中玩家称 MARD 色号体系逐渐成为默认参考标准，许多图纸和教程会标注 MARD 色号。
- 比特拼豆将 MARD 221/291 与 Artkal 等列入主流色卡，并称 MARD 221 是国内零售最常见版本。
- 拼豆工具站、豆豆工坊、Alfonse 等都以 MARD 作为核心色卡或默认色卡。

## 来源

- https://git.xiongxiao.me/abearxiong/get-colors-from-beans/src/branch/main/get-colors.json

## 来源质量统计

- `third_party_public_repository`：291

## 注意事项

- RGB 是屏幕参考值，不等于实物颜色；严谨对色请以实物色卡为准。
- 本系列包含公开源码/工具站数据，不等同于品牌官方标准。

## JSON 结构简例

```json
{
  "schema": "pindou-color-palette",
  "id": "mard-291-github",
  "title": "MARD家291色",
  "count": 291,
  "colors": [
    {
      "code": "A1",
      "hex": "#FAF5CD",
      "rgb": [
        250,
        245,
        205
      ],
      "group": "A"
    }
  ]
}
```
