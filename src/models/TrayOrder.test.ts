import { describe, expect, test } from 'vitest';
import { TrayOrder } from './TrayOrder';
import { SearchScope } from '../enums/SearchScope';

describe('TrayOrder', () => {
  const trayOrder = new TrayOrder();
  describe('compareLeftToRight()', () => {
    test('Catalog comes before Articles', () => {
      expect(
        trayOrder.compareLeftToRight(SearchScope.Catalog, SearchScope.Articles)
      ).toEqual(-1);
      expect(
        trayOrder.compareLeftToRight(SearchScope.Articles, SearchScope.Catalog)
      ).toEqual(1);
    });
    test('Catalog comes before FindingAids', () => {
      expect(
        trayOrder.compareLeftToRight(
          SearchScope.Catalog,
          SearchScope.FindingAids
        )
      ).toEqual(-1);
      expect(
        trayOrder.compareLeftToRight(
          SearchScope.FindingAids,
          SearchScope.Catalog
        )
      ).toEqual(1);
    });
  });
});
