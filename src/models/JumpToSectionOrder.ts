import { SearchScope } from '../enums/SearchScope';

export class JumpToSectionOrder {
  order: SearchScope[];
  constructor() {
    this.order = [
      SearchScope.Catalog,
      SearchScope.Articles,
      SearchScope.Journals,
      SearchScope.LibraryDatabases,
      SearchScope.FindingAids,
      SearchScope.Dpul,
      SearchScope.PulMap,
      SearchScope.ArtMuseum
    ];
  }
}
