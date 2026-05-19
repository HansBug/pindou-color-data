# 优肯MARD同款221色

> 完整标题：优肯 MARD同款 221色（公开源码库版）

- 生成日期：2026-05-19
- 原始查询名：优肯418色 / 优肯MARD同款
- 总颜色数：221
- 有 RGB：221
- 无 RGB / 透明或未公开：0
- 分组：A(26), B(32), C(29), D(26), E(24), F(25), G(21), H(23), M(15)
- 国内手工小店主流度：A- / 3.8 - MARD 兼容补充体系

## 文件

- `colors.json`：脚本读取用，包含 metadata、groups、colors 数组；每个颜色含 `code`、`hex`、`rgb`、`source_quality`、`source_url`、`notes`。
- `colors.xlsx`：人工查看用，不同色系分 sheet，色块 cell 已填充对应颜色。
- `legend.pdf`：可直接转发的人类友好图例，包含色号、HEX、RGB 和实际色块。
- `README.md`：本说明。

## 国内手工小店主流度评估

- 评级：A-
- 分数：3.8 / 5
- 标签：MARD 兼容补充体系
- 摘要：优肯 MARD 同款 221 色承接 MARD 色号体系的需求，适合已经按 MARD 做图纸但想用优肯/Artkal 供应链的场景。

证据：

- 抖音搜索结果可见“优肯拼豆推出 Mard 同款 221 个色号，加上之前 197 个色号共 418 个色号”的内容摘要。
- Artkal M 系列官方页写明 M-2.6mm 与 C 系列同材质同尺寸，并提供 221 色 RGB chart。
- 公开源码库收录优肯Mard-221 色卡。

## 来源

- https://git.xiongxiao.me/abearxiong/get-colors-from-beans/src/branch/main/get-colors.json

## 来源质量统计

- `third_party_public_repository`：221

## 注意事项

- RGB 是屏幕参考值，不等于实物颜色；严谨对色请以实物色卡为准。
- 本系列包含公开源码/工具站数据，不等同于品牌官方标准。
- MARD 公开来源之间存在 HEX 差异；顶层目录保留了 `Mard-221-source-differences.json` 供核对。

## JSON 结构简例

```json
{
  "series_id": "youken-mard-221-public",
  "count": 221,
  "colors": [
    {
      "code": "A1",
      "hex": "#FFF6D4",
      "rgb": {
        "r": 255,
        "g": 246,
        "b": 212
      },
      "group": "A"
    }
  ]
}
```
