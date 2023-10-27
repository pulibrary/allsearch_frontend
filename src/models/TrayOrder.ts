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
    const asRows = [];
    const numberOfRows = Math.max(
      this.order[0].length,
      this.order[1].length,
      this.order[2].length
    );
    for (let row = 0; row < numberOfRows; row++) {
      asRows.push([this.order[0][row], this.order[1][row], this.order[2][row]]);
    }
    return asRows;
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
