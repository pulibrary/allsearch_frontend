import { SearchScope } from '../enums/SearchScope';

export class TrayOrder {
  order: SearchScope[][];
  constructor() {
    this.order = [
      // Column 1
      [SearchScope.Catalog, SearchScope.FindingAids, SearchScope.PulMap],
      // Column 2
      [SearchScope.Articles, SearchScope.Dpul, SearchScope.ArtMuseum],
      // Column 3
      [
        SearchScope.BestBets,
        SearchScope.LibraryDatabases,
        SearchScope.LibGuides,
        SearchScope.LibAnswers
      ]
    ];
  }
  get asRows() {
    return [
      [this.order[0][0], this.order[1][0], this.order[2][0]],
      [this.order[0][1], this.order[1][1], this.order[2][1]],
      [this.order[0][2], this.order[1][2], this.order[2][2]],
      [this.order[2][3]]
    ];
  }
  compareLeftToRight(a: SearchScope, b: SearchScope) {
    if (a === b) {
      return 0;
    }
    const columnContainingA = this.order.findIndex(
      column => column.indexOf(a) > -1
    );
    const columnContainingB = this.order.findIndex(
      column => column.indexOf(b) > -1
    );
    if (columnContainingA < columnContainingB) {
      return -1;
    } else if (columnContainingA > columnContainingB) {
      return 1;
    } else {
      const rowA = this.order[columnContainingA].indexOf(a);
      const rowB = this.order[columnContainingA].indexOf(b);
      return rowA < rowB ? -1 : 1;
    }
  }
  removeBestBets() {
    this.order[2] = this.order[2].filter(row => row !== SearchScope.BestBets);
  }
}
