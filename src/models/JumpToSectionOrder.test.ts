import { describe, expect, test } from 'vitest';
import { JumpToSectionOrder } from './JumpToSectionOrder';
import { SearchScope } from '../enums/SearchScope';

describe('SkipLinkOrder', () => {
  const skip_link_order = new JumpToSectionOrder();

  describe('order', () => {
    test('it includes subset of trays in order from left-to-right', () => {
      expect(skip_link_order.order).toEqual([
        SearchScope.Catalog,
        SearchScope.Articles,
        SearchScope.Journals,
        SearchScope.LibraryDatabases,
        SearchScope.FindingAids,
        SearchScope.Dpul,
        SearchScope.PulMap,
        SearchScope.ArtMuseum
      ]);
    });
  });
});
