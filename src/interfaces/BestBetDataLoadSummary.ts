import { SearchResult } from '../models/SearchResult';

export interface BestBetDataLoadSummary {
  results: number | undefined;
  records: SearchResult[] | undefined;
}
