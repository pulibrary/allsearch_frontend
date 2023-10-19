import { Axios } from 'axios';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { SearchService } from './SearchService';
import { SearchScope } from '../enums/SearchScope';
import SearchServiceFixtures from '../fixtures/SearchServiceFixtures';

describe('SearchService', () => {
  describe('catalogResults()', () => {
    beforeEach(() => {
      const mock = vi.spyOn(Axios.prototype, 'get');
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
      console.log(results);
      expect(results.records.length).toEqual(3);
    });
  });
});
