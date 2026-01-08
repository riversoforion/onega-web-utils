import { describe, expect, it } from 'vitest';
import { NAMED_COLORS } from '$lib/colors';

describe('lib/colors', () => {
  it('should have a list of named colors', async () => {
    // This test will ensure that the NAMED_COLORS array is defined and contains Color instances.
    // You can expand this test to check for specific colors or properties if needed.
    expect(NAMED_COLORS).toBeDefined();
    expect(Array.isArray(NAMED_COLORS)).toBe(true);
    expect(NAMED_COLORS.length).toBeGreaterThan(0);
    expect(NAMED_COLORS[0]).toHaveProperty('name');
    expect(NAMED_COLORS[0]).toHaveProperty('section');
    expect(NAMED_COLORS[0]).toHaveProperty('hex');
  });

  describe('allByCategory', () => {
    it('should return colors grouped by category', async () => {
      const { allByCategory } = await import('./colors');
      const categories = allByCategory();
      expect(categories).toHaveProperty('Reds & Oranges');
      expect(categories['Grays']).toHaveLength(10);
    });
  });

  describe('sortBy', () => {
    it('should sort colors by name', async () => {
      const { allByCategory, sortBy } = await import('./colors');
      const categories = allByCategory();
      const sortedColors = sortBy(categories['Reds & Oranges'], 'name');
      expect(sortedColors[0].name).toBe('Coral');
    });

    it('should sort colors by hue', async () => {
      const { sortBy } = await import('./colors');
      const sortedColors = sortBy(NAMED_COLORS, 'hue');
      expect(sortedColors[0].hue).toBe(0);
    });

    it('should sort colors by red, green, blue', async () => {
      const { allByCategory, sortBy } = await import('./colors');
      const categories = allByCategory();
      const sortedColors = sortBy(categories['Cyans'], 'red', 'green', 'blue');
      expect(sortedColors[0].name).toBe('Teal');
    });
  });

  describe('filterByMinCssLevel', () => {
    it('should filter colors by minimum CSS level', async () => {
      const { filterByMinCssLevel } = await import('./colors');
      const filteredColors = filterByMinCssLevel(NAMED_COLORS, 3);
      expect(filteredColors.every((color) => color.minCssLevel >= 3)).toBe(true);
    });
  });

  describe('Color class', () => {
    it('should correctly convert hex to RGB and HSL', async () => {
      const { Color } = await import('./colors');
      const color1 = new Color('Test Color', 'Test Section', '#ff0b21');
      expect(color1.red).toBe(255);
      expect(color1.green).toBe(11);
      expect(color1.blue).toBe(33);
      expect(color1.hue).toBe(355);
      expect(color1.saturation).toBe(100);
      expect(color1.lightness).toBe(52);

      const color2 = new Color('Another Color', 'Another Section', '#00ff00');
      expect(color2.red).toBe(0);
      expect(color2.green).toBe(255);
      expect(color2.blue).toBe(0);
      expect(color2.hue).toBe(120);
      expect(color2.saturation).toBe(100);
      expect(color2.lightness).toBe(50);

      const color3 = new Color('Gray Color', 'Gray Section', '#808080');
      expect(color3.red).toBe(128);
      expect(color3.green).toBe(128);
      expect(color3.blue).toBe(128);
      expect(color3.hue).toBe(0);
      expect(color3.saturation).toBe(0);
      expect(color3.lightness).toBe(50);
    });
  });
});
