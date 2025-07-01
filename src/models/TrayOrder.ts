import { SearchScope } from '../enums/SearchScope';

export class TrayOrder {
  order: SearchScope[][];
  constructor() {
    this.order = [
      [
        SearchScope.Catalog,
        SearchScope.LibraryDatabases,
        SearchScope.FindingAids,
        SearchScope.PulMap
      ],
      [
        SearchScope.Articles,
        SearchScope.Journals,
        SearchScope.ArtMuseum,
        SearchScope.Dpul
      ],
      [
        SearchScope.LibGuides,
        SearchScope.LibraryStaff,
        SearchScope.LibAnswers,
        SearchScope.Website
      ]
    ];
  }
}
