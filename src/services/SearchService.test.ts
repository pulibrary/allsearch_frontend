import { describe, test, expect, vi, beforeEach } from 'vitest';
import { SearchService } from './SearchService';
import { SearchScope } from '../enums/SearchScope';
import SearchServiceFixtures from '../fixtures/SearchServiceFixtures';

describe('SearchService', () => {
  describe('catalogResults()', () => {
    beforeEach(() => {
      global.fetch = vi.fn(_url => {
        return Promise.resolve(
          new Response(JSON.stringify(SearchServiceFixtures.results))
        );
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
        global.fetch = vi.fn(_url => {
          return Promise.resolve(
            new Response('{"error": "There was a problem"}', { status: 500 })
          );
        });
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
