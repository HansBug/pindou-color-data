const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "output");
fs.mkdirSync(outDir, { recursive: true });

const SOURCE_GET_COLORS =
  "https://git.xiongxiao.me/abearxiong/get-colors-from-beans/src/branch/main/get-colors.json";
const SOURCE_ALFONSE_MARD = "https://www.alfonse.online/";
const SOURCE_DOUDOU_MARD = "https://www.doudougongfang.com/kb/beads/mard-palette";
const SOURCE_ARTKAL_C_PAGE = "https://artkalfusebeads.com/pages/c-color-chart";
const SOURCE_ARTKAL_C_PDF =
  "https://cdn.shopify.com/s/files/1/1323/8195/files/C_MINI_Beads_RGB_Color_Chart_2024.pdf?v=1744700289";
const SOURCE_ARTKAL_C_IMAGE =
  "https://cdn.shopify.com/s/files/1/1323/8195/files/artkal_beads_C_series_color_chart.jpg?v=1744700233";
const SOURCE_ARTKAL_M_PAGE =
  "https://www.artkalfusebeads.com/collections/m-2-6mm-mini-beads";
const SOURCE_ARTKAL_M_PDF =
  "https://cdn.shopify.com/s/files/1/1323/8195/files/M_MINI_Beads_RGB_Color_Chart_2025.pdf?v=1760661747";

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(clean)) return { r: "", g: "", b: "" };
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function rgbToHex(r, g, b) {
  if ([r, g, b].some((n) => !Number.isFinite(n) || n < 0 || n > 255)) return "";
  return (
    "#" +
    [r, g, b]
      .map((n) => n.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function csvEscape(value) {
  const s = value == null ? "" : String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function writeCsv(fileName, rows) {
  const headers = [
    "source_set",
    "brand",
    "palette",
    "color_code",
    "hex",
    "r",
    "g",
    "b",
    "transparency",
    "source_quality",
    "source_url",
    "notes",
  ];
  const body = [
    headers.join(","),
    ...rows.map((row) => headers.map((h) => csvEscape(row[h])).join(",")),
  ].join("\n");
  fs.writeFileSync(path.join(outDir, fileName), body + "\n");
}

function writeJson(fileName, rows) {
  fs.writeFileSync(path.join(outDir, fileName), JSON.stringify(rows, null, 2) + "\n");
}

function normalizeRowsFromHexList(sourceSet, brand, palette, list, sourceUrl, quality) {
  return list.map((item) => {
    const hex = item.color.toUpperCase();
    const rgb = hexToRgb(hex);
    return {
      source_set: sourceSet,
      brand,
      palette,
      color_code: item["color-name"],
      hex,
      r: rgb.r,
      g: rgb.g,
      b: rgb.b,
      transparency: /透明|transparent/i.test(item["color-name"]) ? "possible" : "",
      source_quality: quality,
      source_url: sourceUrl,
      notes: "Extracted from public HTML color data repository.",
    };
  });
}

function parseArtkalText(text, palette, seriesLabel, sourceUrl, pageUrl) {
  const rows = [];
  const regex =
    /\b((?:C(?:E)?|M[A-Z]+)\d{1,3})\b\s+(?:(Transparent)|(\d{1,3})\s+(\d{1,3})\s+(\d{1,3}))/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const code = match[1];
    const transparent = Boolean(match[2]);
    const r = transparent ? "" : Number(match[3]);
    const g = transparent ? "" : Number(match[4]);
    const b = transparent ? "" : Number(match[5]);
    const invalid =
      !transparent && [r, g, b].some((n) => !Number.isFinite(n) || n < 0 || n > 255);
    rows.push({
      source_set: palette,
      brand: "优肯 / Artkal",
      palette: seriesLabel,
      color_code: code,
      hex: transparent || invalid ? "" : rgbToHex(r, g, b),
      r: transparent || invalid ? "" : r,
      g: transparent || invalid ? "" : g,
      b: transparent || invalid ? "" : b,
      transparency: transparent ? "transparent" : "",
      source_quality: invalid ? "official_pdf_text_needs_manual_check" : "official_pdf",
      source_url: sourceUrl,
      notes: invalid
        ? `PDF text extraction produced out-of-range RGB for ${code}; inspect original PDF/image manually. Page: ${pageUrl}`
        : "Extracted from official Artkal RGB PDF.",
    });
  }
  return dedupeByCode(rows);
}

function dedupeByCode(rows) {
  const seen = new Map();
  for (const row of rows) seen.set(row.color_code, row);
  return [...seen.values()].sort((a, b) =>
    a.color_code.localeCompare(b.color_code, "en", { numeric: true })
  );
}

function parseAlfonseMard221() {
  const htmlPath = path.join(__dirname, "alfonse.html");
  if (!fs.existsSync(htmlPath)) return [];
  const html = fs.readFileSync(htmlPath, "utf8");
  const colorDataMatch = html.match(/const colorData = \{([\s\S]*?)\n\s*\};/);
  if (!colorDataMatch) return [];
  const rows = [];
  const seriesRegex = /([A-Z]+)\s*:\s*\[([^\]]+)\]/g;
  let match;
  while ((match = seriesRegex.exec(colorDataMatch[1])) !== null) {
    const series = match[1];
    const colors = [...match[2].matchAll(/"#([0-9a-fA-F]{6})"/g)].map(
      (m) => `#${m[1].toUpperCase()}`
    );
    colors.forEach((hex, idx) => {
      const rgb = hexToRgb(hex);
      rows.push({
        source_set: "Mard-221-alfonse-doudou",
        brand: "MARD",
        palette: "221色",
        color_code: `${series}${idx + 1}`,
        hex,
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        transparency: "",
        source_quality: "public_tool_site_claims_mard_official",
        source_url: `${SOURCE_ALFONSE_MARD} ; ${SOURCE_DOUDOU_MARD}`,
        notes:
          "Alfonse page labels this as MARD official bead palette; checked entries match the DouDouGongFang Mard page.",
      });
    });
  }
  return rows;
}

const publicData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "get-colors.json"), "utf8")
);

const requestedPublicSets = [
  ["COCO-291", "COCO", "291色"],
  ["Mard-291", "MARD", "291色"],
  ["Mard-221", "MARD", "221色"],
  ["咪小窝-290", "咪小窝", "290色"],
  ["小舞-291", "小舞", "291色"],
  ["漫漫-278", "漫漫", "278色"],
  ["盼盼-289", "盼盼", "289色"],
  ["黄豆豆-291", "黄豆豆", "291色"],
  ["优肯-174", "优肯 / Artkal", "公开库174色"],
  ["优肯Mard-221", "优肯 / Artkal", "公开库Mard同款221色"],
];

const publicRows = [];
for (const [key, brand, palette] of requestedPublicSets) {
  if (!publicData[key]) throw new Error(`Missing set in get-colors.json: ${key}`);
  const quality =
    brand === "优肯 / Artkal"
      ? "third_party_public_repository"
      : "third_party_public_repository";
  const rows = normalizeRowsFromHexList(
    key,
    brand,
    palette,
    publicData[key],
    SOURCE_GET_COLORS,
    quality
  );
  publicRows.push(...rows);
  writeCsv(`${key}.csv`, rows);
  writeJson(`${key}.json`, rows);
}

const mard221AlfonseRows = parseAlfonseMard221();
if (mard221AlfonseRows.length) {
  writeCsv("Mard-221-alfonse-doudou.csv", mard221AlfonseRows);
  writeJson("Mard-221-alfonse-doudou.json", mard221AlfonseRows);
}

const artkalCText = fs.readFileSync(path.join(__dirname, "artkal-c-197-rgb.txt"), "utf8");
const artkalMText = fs.readFileSync(path.join(__dirname, "artkal-m-221-rgb.txt"), "utf8");

let artkalCOfficial = parseArtkalText(
  artkalCText,
  "Artkal-C-197",
  "C-2.6mm Mini Beads / C系列",
  SOURCE_ARTKAL_C_PDF,
  SOURCE_ARTKAL_C_PAGE
);
const artkalCImageOverrides = {
  C35: [160, 159, 157],
  C152: [194, 189, 224],
};

for (const [code, rgb] of Object.entries(artkalCImageOverrides)) {
  const existingIndex = artkalCOfficial.findIndex((row) => row.color_code === code);
  const row = {
    source_set: "Artkal-C-197",
    brand: "优肯 / Artkal",
    palette: "C-2.6mm Mini Beads / C系列",
    color_code: code,
    hex: rgbToHex(...rgb),
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    transparency: "",
    source_quality: "official_chart_image",
    source_url: SOURCE_ARTKAL_C_IMAGE,
    notes:
      code === "C152"
        ? "Official RGB PDF text renders/extracts B as 273; official 197-color chart image shows this RGB."
        : "Official 197-color chart image shows this RGB; the official RGB PDF labels this color as Silver without numeric RGB.",
  };
  if (existingIndex >= 0) artkalCOfficial[existingIndex] = row;
  else artkalCOfficial.push(row);
}

const knownMissingC2024 = [
  "CT08",
  "CT09",
  "CT01",
  "CT02",
  "CT03",
  "CT04",
  "CT05",
  "CT06",
  "CT07",
  "CG01",
  "CG02",
  "CG03",
  "CG04",
  "CG05",
  "CG06",
  "CG07",
  "CP01",
  "CP02",
  "CP03",
  "CP04",
  "CP05",
  "CP06",
  "CP07",
];

const existingC = new Set(artkalCOfficial.map((r) => r.color_code));
for (const code of knownMissingC2024) {
  if (!existingC.has(code)) {
    const padded = code.replace(/([A-Z]+)(\d)$/, "$10$2");
    artkalCOfficial.push({
      source_set: "Artkal-C-197",
      brand: "优肯 / Artkal",
      palette: "C-2.6mm Mini Beads / C系列",
      color_code: padded,
      hex: "",
      r: "",
      g: "",
      b: "",
      transparency: code.startsWith("CT") ? "transparent" : "",
      source_quality: "official_chart_code_only",
      source_url: SOURCE_ARTKAL_C_PAGE,
      notes:
        "Code appears on the official 197-color chart image; RGB value was not present in the official RGB PDF text extraction.",
    });
  }
}
artkalCOfficial = dedupeByCode(artkalCOfficial);

const artkalMOfficial = parseArtkalText(
  artkalMText,
  "Artkal-M-221",
  "M-2.6mm Mini Beads / M系列",
  SOURCE_ARTKAL_M_PDF,
  SOURCE_ARTKAL_M_PAGE
);

const artkal418 = [
  ...artkalCOfficial.map((r) => ({ ...r, source_set: "Artkal-C197+M221-418" })),
  ...artkalMOfficial.map((r) => ({ ...r, source_set: "Artkal-C197+M221-418" })),
];

writeCsv("Artkal-C-197-official.csv", artkalCOfficial);
writeJson("Artkal-C-197-official.json", artkalCOfficial);
writeCsv("Artkal-M-221-official.csv", artkalMOfficial);
writeJson("Artkal-M-221-official.json", artkalMOfficial);
writeCsv("Artkal-C197-plus-M221-418-official.csv", artkal418);
writeJson("Artkal-C197-plus-M221-418-official.json", artkal418);

const allRows = [
  ...publicRows,
  ...mard221AlfonseRows,
  ...artkalCOfficial,
  ...artkalMOfficial,
  ...artkal418,
];
writeCsv("all_requested_palettes.csv", allRows);
writeJson("all_requested_palettes.json", allRows);

const summary = {};
for (const row of allRows) {
  summary[row.source_set] ||= {
    brand: row.brand,
    palette: row.palette,
    total_rows: 0,
    rows_with_rgb: 0,
    rows_without_rgb: 0,
    source_quality: {},
  };
  summary[row.source_set].total_rows += 1;
  if (row.hex) summary[row.source_set].rows_with_rgb += 1;
  else summary[row.source_set].rows_without_rgb += 1;
  summary[row.source_set].source_quality[row.source_quality] =
    (summary[row.source_set].source_quality[row.source_quality] || 0) + 1;
}
fs.writeFileSync(path.join(outDir, "summary.json"), JSON.stringify(summary, null, 2) + "\n");
console.log(summary);
