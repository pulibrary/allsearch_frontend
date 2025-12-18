import config from '../config';
import { Results } from '../interfaces/Results';
import { SearchResults } from '../models/SearchResults';

export class SearchService {
  public results(service: string, query: string): Promise<Results> {
    return fetch(`${config.allsearchApiUrl}/search/${service}?query=${query}`)
      .then(response => response.json())
      .then(parsed => SearchResults.fromObject(parsed))
      .catch(() => new SearchResults(0, '', []));
  }
}
