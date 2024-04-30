import { SearchScope } from '../enums/SearchScope';

export class TrayOrder {
  order: SearchScope[][];
  constructor() {
    this.order = [
      // Column 1
      [
        SearchScope.Catalog,
        SearchScope.FindingAids,
        SearchScope.PulMap,
        SearchScope.Journals
      ],
      // Column 2
      [SearchScope.Articles, SearchScope.Dpul, SearchScope.ArtMuseum],
      // Column 3
      [
        SearchScope.LibraryDatabases,
        SearchScope.Website,
        SearchScope.LibGuides,
        SearchScope.LibraryStaff,
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
    const rowA = this.order[columnContainingA].indexOf(a);
    const rowB = this.order[columnContainingB].indexOf(b);

    if (rowA < rowB) {
      return -1;
    } else if (rowA > rowB) {
      return 1;
    } else {
      return columnContainingA < columnContainingB ? -1 : 1;
    }
  }
  asFlatArray() {
    return this.order.flat().sort((a, b) => this.compareLeftToRight(a, b));
  }
}
