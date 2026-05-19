# MARD家源码版

> 完整标题：MARD 221色（公开源码库版）

- 生成日期：2026-05-19
- 系列短名：MARD家源码版
- 总颜色数：221
- 有 RGB：221
- 无 RGB / 透明或未公开：0
- 分组：A(26), B(32), C(29), D(26), E(24), F(25), G(21), H(23), M(15)
- 国内手工小店主流度：S / 5.0 - 国内最主流/默认参考

## 文件

- `colors.json`：脚本读取用，采用 `pindou-color-palette`；每个颜色含 `code`、`hex`、`rgb`、`group`、`source`。
- `colors.xlsx`：人工查看用，不同色系分 sheet，色块 cell 已填充对应颜色。
- `legend.pdf`：可直接转发的人类友好图例，包含色号、HEX、RGB 和实际色块。
- `README.md`：本说明。

## 国内手工小店主流度评估

- 评级：S
- 分数：5.0 / 5
- 标签：国内最主流/默认参考
- 摘要：MARD 221 是国内零售和图纸工具最常见的标准版本之一，适合作为手工小店备货和图纸交流的基准色卡。

证据：

- 比特拼豆页面直接称 MARD 221 是国内零售最常见的版本。
- 中工网报道提到 MARD 店铺粉丝、复购和抢购，并引用玩家称其色号体系成默认参考。
- 拼豆工具站售卖页说明豆子与 Mard 221 色卡完全对应，可直接按色号选购。

## 来源

- https://git.xiongxiao.me/abearxiong/get-colors-from-beans/src/branch/main/get-colors.json

## 来源质量统计

- `third_party_public_repository`：221

## 注意事项

- RGB 是屏幕参考值，不等于实物颜色；严谨对色请以实物色卡为准。
- 本系列包含公开源码/工具站数据，不等同于品牌官方标准。

## JSON 结构简例

```json
{
  "schema": "pindou-color-palette",
  "id": "mard-221-github",
  "title": "MARD家源码版",
  "count": 221,
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
