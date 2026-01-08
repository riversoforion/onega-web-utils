export class Color {
  public readonly name: string;
  public readonly alias?: string;
  public readonly section: string;
  public readonly minCssLevel: number = 3;
  public readonly hex: string;
  public readonly red: number;
  public readonly green: number;
  public readonly blue: number;
  public readonly hue: number;
  public readonly saturation: number;
  public readonly lightness: number;

  constructor(name: string, section: string, hex: string, minCssLevel?: number, alias?: string) {
    this.name = name;
    this.alias = alias;
    this.section = section;
    this.hex = hex;
    if (minCssLevel) {
      this.minCssLevel = minCssLevel;
    }

    // Convert hex to RGB
    const bigint = parseInt(hex.slice(1), 16);
    this.red = (bigint >> 16) & 255;
    this.green = (bigint >> 8) & 255;
    this.blue = bigint & 255;

    // Convert RGB to HSL
    const r = this.red / 255;
    const g = this.green / 255;
    const b = this.blue / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    this.hue = Math.round(h * 360);
    this.saturation = Math.round(s * 100);
    this.lightness = Math.round(l * 100);
  }
}

export const NAMED_COLORS: Color[] = [
  // Reds & Oranges
  new Color('LightSalmon', 'Reds & Oranges', '#FFA07A'),
  new Color('DarkSalmon', 'Reds & Oranges', '#E9967A'),
  new Color('Salmon', 'Reds & Oranges', '#FA8072'),
  new Color('LightCoral', 'Reds & Oranges', '#F08080'),
  new Color('IndianRed', 'Reds & Oranges', '#CD5C5C'),
  new Color('Coral', 'Reds & Oranges', '#FF7F50'),
  new Color('Orange', 'Reds & Oranges', '#FFA500', 2),
  new Color('DarkOrange', 'Reds & Oranges', '#FF8C00'),
  new Color('Tomato', 'Reds & Oranges', '#FF6347'),
  new Color('OrangeRed', 'Reds & Oranges', '#FF4500'),
  new Color('Red', 'Reds & Oranges', '#FF0000', 1),
  new Color('Crimson', 'Reds & Oranges', '#DC143C'),
  new Color('Firebrick', 'Reds & Oranges', '#B22222'),
  new Color('DarkRed', 'Reds & Oranges', '#8B0000'),
  new Color('Maroon', 'Reds & Oranges', '#800000', 1),
  // Yellows
  new Color('LightYellow', 'Yellows', '#FFFFE0'),
  new Color('LemonChiffon', 'Yellows', '#FFFACD'),
  new Color('LightGoldenrodYellow', 'Yellows', '#FAFAD2'),
  new Color('PapayaWhip', 'Yellows', '#FFEFD5'),
  new Color('Moccasin', 'Yellows', '#FFE4B5'),
  new Color('PaleGoldenrod', 'Yellows', '#EEE8AA'),
  new Color('Yellow', 'Yellows', '#FFFF00', 1),
  new Color('PeachPuff', 'Yellows', '#FFDAB9'),
  new Color('Khaki', 'Yellows', '#F0E68C'),
  new Color('DarkKhaki', 'Yellows', '#BDB76B'),
  new Color('Gold', 'Yellows', '#FFD700'),
  // Greens
  new Color('PaleGreen', 'Greens', '#98FB98'),
  new Color('GreenYellow', 'Greens', '#ADFF2F'),
  new Color('LightGreen', 'Greens', '#90EE90'),
  new Color('Chartreuse', 'Greens', '#7FFF00'),
  new Color('LawnGreen', 'Greens', '#7CFC00'),
  new Color('YellowGreen', 'Greens', '#9ACD32'),
  new Color('MediumAquamarine', 'Greens', '#66CDAA'),
  new Color('DarkSeaGreen', 'Greens', '#8FBC8F'),
  new Color('MediumSpringGreen', 'Greens', '#00FA9A'),
  new Color('SpringGreen', 'Greens', '#00FF7F'),
  new Color('Lime', 'Greens', '#00FF00', 1),
  new Color('LimeGreen', 'Greens', '#32CD32'),
  new Color('MediumSeaGreen', 'Greens', '#3CB371'),
  new Color('OliveDrab', 'Greens', '#6B8E23'),
  new Color('Olive', 'Greens', '#808000', 1),
  new Color('SeaGreen', 'Greens', '#2E8B57'),
  new Color('ForestGreen', 'Greens', '#228B22'),
  new Color('DarkOliveGreen', 'Greens', '#556B2F'),
  new Color('Green', 'Greens', '#008000', 1),
  new Color('DarkGreen', 'Greens', '#006400'),
  // Cyans
  new Color('LightCyan', 'Cyans', '#E0FFFF'),
  new Color('PaleTurquoise', 'Cyans', '#AFEEEE'),
  new Color('Aquamarine', 'Cyans', '#7FFFD4'),
  new Color('Aqua', 'Cyans', '#00FFFF', 1, 'Cyan'),
  new Color('Turquoise', 'Cyans', '#40E0D0'),
  new Color('MediumTurquoise', 'Cyans', '#48D1CC'),
  new Color('DarkTurquoise', 'Cyans', '#00CED1'),
  new Color('CadetBlue', 'Cyans', '#5F9EA0'),
  new Color('LightSeaGreen', 'Cyans', '#20B2AA'),
  new Color('DarkCyan', 'Cyans', '#008B8B'),
  new Color('Teal', 'Cyans', '#008080', 1),
  // Blues
  new Color('PowderBlue', 'Blues', '#B0E0E6'),
  new Color('LightBlue', 'Blues', '#ADD8E6'),
  new Color('LightSteelBlue', 'Blues', '#B0C4DE'),
  new Color('LightSkyBlue', 'Blues', '#87CEFA'),
  new Color('SkyBlue', 'Blues', '#87CEEB'),
  new Color('CornflowerBlue', 'Blues', '#6495ED'),
  new Color('DeepSkyBlue', 'Blues', '#00BFFF'),
  new Color('DodgerBlue', 'Blues', '#1E90FF'),
  new Color('SteelBlue', 'Blues', '#4682B4'),
  new Color('RoyalBlue', 'Blues', '#4169E1'),
  new Color('Blue', 'Blues', '#0000FF', 1),
  new Color('MediumBlue', 'Blues', '#0000CD'),
  new Color('DarkBlue', 'Blues', '#00008B'),
  new Color('Navy', 'Blues', '#000080', 1),
  new Color('MidnightBlue', 'Blues', '#191970'),
  // Purples & Pinks
  new Color('Lavender', 'Purples & Pinks', '#E6E6FA'),
  new Color('Thistle', 'Purples & Pinks', '#D8BFD8'),
  new Color('Pink', 'Purples & Pinks', '#FFC0CB'),
  new Color('LightPink', 'Purples & Pinks', '#FFB6C1'),
  new Color('Plum', 'Purples & Pinks', '#DDA0DD'),
  new Color('Violet', 'Purples & Pinks', '#EE82EE'),
  new Color('Orchid', 'Purples & Pinks', '#DA70D6'),
  new Color('HotPink', 'Purples & Pinks', '#FF69B4'),
  new Color('MediumOrchid', 'Purples & Pinks', '#BA55D3'),
  new Color('PaleVioletRed', 'Purples & Pinks', '#DB7093'),
  new Color('MediumPurple', 'Purples & Pinks', '#9370DB'),
  new Color('MediumSlateBlue', 'Purples & Pinks', '#7B68EE'),
  new Color('SlateBlue', 'Purples & Pinks', '#6A5ACD'),
  new Color('DeepPink', 'Purples & Pinks', '#FF1493'),
  new Color('Fuchsia', 'Purples & Pinks', '#FF00FF', 1, 'Magenta'),
  new Color('DarkOrchid', 'Purples & Pinks', '#9932CC'),
  new Color('BlueViolet', 'Purples & Pinks', '#8A2BE2'),
  new Color('RebeccaPurple', 'Purples & Pinks', '#663399', 4),
  new Color('DarkViolet', 'Purples & Pinks', '#9400D3'),
  new Color('MediumVioletRed', 'Purples & Pinks', '#C71585'),
  new Color('DarkMagenta', 'Purples & Pinks', '#8B008B'),
  new Color('Purple', 'Purples & Pinks', '#800080', 1),
  new Color('DarkSlateBlue', 'Purples & Pinks', '#483D8B'),
  new Color('Indigo', 'Purples & Pinks', '#4B0082'),
  // Grays
  new Color('Gainsboro', 'Grays', '#DCDCDC'),
  new Color('LightGray', 'Grays', '#D3D3D3', undefined, 'LightGrey'),
  new Color('Silver', 'Grays', '#C0C0C0', 1),
  new Color('DarkGray', 'Grays', '#A9A9A9', undefined, 'DarkGrey'),
  new Color('LightSlateGray', 'Grays', '#778899', undefined, 'LightSlateGrey'),
  new Color('Gray', 'Grays', '#808080', 1, 'Grey'),
  new Color('SlateGray', 'Grays', '#708090', undefined, 'SlateGrey'),
  new Color('DimGray', 'Grays', '#696969', undefined, 'DimGrayGrey'),
  new Color('DarkSlateGray', 'Grays', '#2F4F4F', undefined, 'DarkSlateGrey'),
  new Color('Black', 'Grays', '#000000', 1),
  // Whites
  new Color('White', 'Whites', '#FFFFFF', 1),
  new Color('Ivory', 'Whites', '#FFFFF0'),
  new Color('Snow', 'Whites', '#FFFAFA'),
  new Color('MintCream', 'Whites', '#F5FFFA'),
  new Color('Azure', 'Whites', '#F0FFFF'),
  new Color('FloralWhite', 'Whites', '#FFFAF0'),
  new Color('Honeydew', 'Whites', '#F0FFF0'),
  new Color('GhostWhite', 'Whites', '#F8F8FF'),
  new Color('Seashell', 'Whites', '#FFF5EE'),
  new Color('AliceBlue', 'Whites', '#F0F8FF'),
  new Color('OldLace', 'Whites', '#FDF5E6'),
  new Color('LavenderBlush', 'Whites', '#FFF0F5'),
  new Color('WhiteSmoke', 'Whites', '#F5F5F5'),
  new Color('Beige', 'Whites', '#F5F5DC'),
  new Color('Linen', 'Whites', '#FAF0E6'),
  new Color('AntiqueWhite', 'Whites', '#FAEBD7'),
  new Color('MistyRose', 'Whites', '#FFE4E1'),
  // Browns
  new Color('Cornsilk', 'Browns', '#FFF8DC'),
  new Color('BlanchedAlmond', 'Browns', '#FFEBCD'),
  new Color('Bisque', 'Browns', '#FFE4C4'),
  new Color('NavajoWhite', 'Browns', '#FFDEAD'),
  new Color('Wheat', 'Browns', '#F5DEB3'),
  new Color('Burlywood', 'Browns', '#DEB887'),
  new Color('Tan', 'Browns', '#D2B48C'),
  new Color('RosyBrown', 'Browns', '#BC8F8F'),
  new Color('SandyBrown', 'Browns', '#F4A460'),
  new Color('Goldenrod', 'Browns', '#DAA520'),
  new Color('Peru', 'Browns', '#CD853F'),
  new Color('DarkGoldenrod', 'Browns', '#B8860B'),
  new Color('Chocolate', 'Browns', '#D2691E'),
  new Color('Sienna', 'Browns', '#A0522D'),
  new Color('SaddleBrown', 'Browns', '#8B4513'),
  new Color('Brown', 'Browns', '#A52A2A'),
];

export function allByCategory(): Record<string, Color[]> {
  const categories: Record<string, Color[]> = {};
  for (const color of NAMED_COLORS) {
    if (!categories[color.section]) {
      categories[color.section] = [];
    }
    categories[color.section].push(color);
  }
  return categories;
}

type SortKey = 'name' | 'hue' | 'saturation' | 'lightness' | 'red' | 'green' | 'blue';

export function sortBy(colors: Color[], key: SortKey, ...additionalKeys: SortKey[]): Color[] {
  const allKeys = [key, ...additionalKeys];
  return colors.slice().sort((a, b) => {
    for (const k of allKeys) {
      if (a[k] < b[k]) return -1;
      if (a[k] > b[k]) return 1;
    }
    return 0;
  });
}

export function filterByMinCssLevel(colors: Color[], level: number): Color[] {
  return colors.filter((color) => color.minCssLevel >= level);
}
