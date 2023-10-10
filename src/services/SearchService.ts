/* eslint-disable no-unused-vars */
import { SearchResults } from "../interfaces/SearchResults";

export class SearchService {
    results(service: string, query: string): Promise<SearchResults> {
        return new Promise((resolve) => {
            resolve({
                number: 23_182,
                more: 'https://example.com',
                results: [
                    {
                        title: 'Potato',
                        publisher: 'Potato company',
                        creator: 'Shrek',
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
                        other_fields: {
                            library: 'Marquand',
                            call_number: 'ABC 123'
                        }
                    }, {
                        title: 'Salmon',
                        id: '789',
                        type: 'Coin',
                        url: 'https://catalog.princeton.edu/catalog/99125150851306421',
                        other_fields: {}
                    },
                ]
            })
        });
    }
}
