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
    test('Articles comes before FindingAids', () => {
      expect(
        trayOrder.compareLeftToRight(
          SearchScope.Articles,
          SearchScope.FindingAids
        )
      ).toEqual(-1);
      expect(
        trayOrder.compareLeftToRight(
          SearchScope.FindingAids,
          SearchScope.Articles
        )
      ).toEqual(1);
    });
  });
  describe('asRow getter', () => {
    test('gets all the trays in order in one row', () => {
      expect(new TrayOrder().asRow[0]).toEqual([
        SearchScope.Catalog,
        SearchScope.Articles,
        SearchScope.LibraryDatabases,
        SearchScope.Journals,
        SearchScope.LibraryStaff,
        SearchScope.LibGuides,
        SearchScope.FindingAids,
        SearchScope.ArtMuseum,
        SearchScope.Dpul,
        SearchScope.PulMap,
        SearchScope.LibAnswers,
        SearchScope.Website
      ]);
    });
  });
  describe('resultCompareArray getter', () => {
    test('it includes all trays in order from left-to-right', () => {
      expect(new TrayOrder().resultCompareArray()).toEqual([
        SearchScope.Catalog,
        SearchScope.Articles,
        SearchScope.LibraryDatabases,
        SearchScope.Journals,
        SearchScope.LibraryStaff,
        SearchScope.LibGuides,
        SearchScope.FindingAids,
        SearchScope.ArtMuseum,
        SearchScope.Dpul,
        SearchScope.PulMap,
        SearchScope.LibAnswers,
        SearchScope.Website
      ]);
    });
  });
});
