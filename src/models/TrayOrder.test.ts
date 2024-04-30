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
  describe('asRows getter', () => {
    test('gets the first row correct', () => {
      expect(new TrayOrder().asRows[0]).toEqual([
        SearchScope.Catalog,
        SearchScope.Articles,
        SearchScope.LibraryDatabases
      ]);
    });
  });
  describe('asFlatArray getter', () => {
    test('it includes all trays in order from left-to-right then top-to-bottom', () => {
      expect(new TrayOrder().asFlatArray()).toEqual([
        SearchScope.Catalog,
        SearchScope.Articles,
        SearchScope.LibraryDatabases,
        SearchScope.FindingAids,
        SearchScope.Dpul,
        SearchScope.Website,
        SearchScope.PulMap,
        SearchScope.ArtMuseum,
        SearchScope.LibGuides,
        SearchScope.Journals,
        SearchScope.LibraryStaff,
        SearchScope.LibAnswers
      ]);
    });
  });
});
