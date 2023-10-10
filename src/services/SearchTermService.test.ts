import { describe, test, expect } from "vitest";
import { SearchTermService } from "./SearchTermService";

describe('SearchTermService', () => {
    describe('term()', () => {
        test('it takes the term from the URL', async () => {
            Object.defineProperty(window, 'location', {
                value: new URL('https://allsearch.princeton.edu?q=robots')
            })
            expect(SearchTermService.term()).toEqual('robots');
        });
    });
});
