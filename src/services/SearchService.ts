import axios from 'axios';
import { plainToInstance } from 'class-transformer';

import { SearchResults } from "../interfaces/SearchResults";
import { SearchResultsDto } from '../models/SearchResultsDto';

export class SearchService {
    results(service: string, query: string): Promise<SearchResults> {
        const options = {
            method: 'GET',
            baseURL: 'https://allsearch-api-staging.princeton.edu'
        };
        var client = axios.create(options)

        return client.get<SearchResults>(`/search/${service}?query=${query}`)
            .then(res => plainToInstance(SearchResultsDto, res.data));
    }
}
