import { Axios } from 'axios';
import { describe, test, expect, vi, beforeEach, MockInstance } from 'vitest';
import { SearchService } from './SearchService';
import { SearchScope } from '../enums/SearchScope';
import SearchServiceFixtures from '../fixtures/SearchServiceFixtures';

let mock: MockInstance;

describe('SearchService', () => {
  describe('catalogResults()', () => {
    beforeEach(() => {
      mock = vi.spyOn(Axios.prototype, 'get');
      mock.mockResolvedValue({
        data: SearchServiceFixtures.results
      });
    });

    test('it includes number of results', async () => {
      const service = new SearchService();
      const results = await service.results(SearchScope.Catalog, 'donkeys');
      expect(results.number).toEqual(23_182);
    });
    test('it includes more link', async () => {
      const service = new SearchService();
      const results = await service.results(SearchScope.Catalog, 'walrus');
      expect(results.more).toEqual('https://example.com');
    });
    test('it has three results', async () => {
      const service = new SearchService();
      const results = await service.results(SearchScope.Catalog, 'walrus');
      expect(results.records.length).toEqual(3);
    });
    describe('when the HTTP request promise is rejected', () => {
      beforeEach(() => {
        mock.mockRejectedValue(new Error('Axios error'));
      });
      test('it has zero results', async () => {
        const service = new SearchService();
        const results = await service.results(
          SearchScope.Catalog,
          'this search does not work'
        );
        expect(results.records.length).toEqual(0);
      });
    });
  });
});
