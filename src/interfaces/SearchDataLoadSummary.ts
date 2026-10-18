import { SearchScope } from '../enums/SearchScope';
import { SearchResult } from '../models/SearchResult';

export interface SearchDataLoadSummary {
  scope: SearchScope;
  results: number | undefined;
  records: SearchResult[];
}
