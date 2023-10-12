import { Axios } from "axios";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { SearchService } from "./SearchService";
import { SearchScope } from "../enums/SearchScope";

const results = {
    number: 23_182,
    more: 'https://example.com',
    records: [
        {
            title: 'Potato',
            publisher: 'Potato company',
            id: '123',
            type: 'Book',
            url: 'https://catalog.princeton.edu/catalog/99125129988006421',
            other_fields: {}
        }, {
            title: 'Cheese',
            publisher: 'Cheese company',
            id: '456',
            type: 'Audio',
            url: 'https://catalog.princeton.edu/catalog/99125192574206421',
            other_fields: {}
        }, {
            title: 'Salmon',
            id: '789',
            type: 'Coin',
            url: 'https://catalog.princeton.edu/catalog/99125150851306421',
            other_fields: {}
        },
    ]
};


describe('SearchService', () => {
    describe('catalogResults()', () => {
        beforeEach(() => {
            const mock = vi.spyOn(Axios.prototype, 'get');
            mock.mockResolvedValue(
                {
                    data: results
                }
            );
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
        test('it has three results', async() => {
            const service = new SearchService();
            const results = await service.results(SearchScope.Catalog, 'walrus');
            console.log(results)
            expect(results.records.length).toEqual(3);
        })
     });
});
