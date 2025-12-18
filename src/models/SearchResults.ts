import { SearchResult } from './SearchResult';
import { Results } from '../interfaces/Results';

export class SearchResults implements Results {
  number: number;
  more: string;
  records: SearchResult[];

  constructor(number: number, more: string, records: SearchResult[]) {
    this.number = number;
    this.more = more;
    this.records = records;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromObject(object: Results): SearchResults {
    return new SearchResults(
      object.number,
      object.more,
      object.records.map(record => SearchResult.fromObject(record))
    );
  }
}
