import config from '../config';
import { Results } from '../interfaces/Results';
import { SearchResults } from '../models/SearchResults';

export class SearchService {
  public results(service: string, query: string): Promise<Results> {
    return fetch(`${config.allsearchApiUrl}/search/${service}?query=${query}`)
      .then(response => {
        if (response.ok) return response.json();
        else throw new Error(`Response status: ${response.status}`);
      })
      .then(parsed => SearchResults.fromObject(parsed))
      .catch(() => new SearchResults(0, '', []));
  }
}
