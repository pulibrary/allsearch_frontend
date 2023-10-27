import { SearchScope } from '../enums/SearchScope';

export interface SearchDataLoadSummary {
  scope: SearchScope;
  results: number | undefined;
}
