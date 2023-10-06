import { describe, test, expect } from "vitest";
import { SearchService } from "./SearchService";
import { SearchScope } from "../enums/SearchScope";

describe('SearchService', () => {
    describe('catalogResults()', () => {
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
        test('it has three results', async() => {
            const service = new SearchService();
            const results = await service.results(SearchScope.Catalog, 'walrus');
            expect(results.results.length).toEqual(3);             
        })
     });
});
