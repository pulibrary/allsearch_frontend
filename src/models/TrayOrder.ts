import { SearchScope } from '../enums/SearchScope';

export class TrayOrder {
  order: SearchScope[][];
  constructor() {
    this.order = [
      [
        SearchScope.Catalog,
        SearchScope.Articles,
        SearchScope.LibraryDatabases,
        SearchScope.Journals,
        SearchScope.LibraryStaff,
        SearchScope.LibGuides,
        SearchScope.FindingAids,
        SearchScope.ArtMuseum,
        SearchScope.Dpul,
        SearchScope.PulMap,
        SearchScope.LibAnswers,
        SearchScope.Website
      ]
    ];
  }
  get asRow() {
    const asRow = [];
    asRow.push(this.order[0]);
    return asRow;
  }
  compareLeftToRight(a: SearchScope, b: SearchScope) {
    if (a === b) {
      return 0;
    }
    const TrayInRowContainingA = this.order.findIndex(
      trayInRow => trayInRow.indexOf(a) > -1
    );
    const TrayInRowContainingB = this.order.findIndex(
      trayInRow => trayInRow.indexOf(b) > -1
    );
    const TrayInSearchA = this.order[TrayInRowContainingA].indexOf(a);
    const TrayInSearchB = this.order[TrayInRowContainingB].indexOf(b);

    if (TrayInSearchA < TrayInSearchB) {
      return -1;
    } else if (TrayInSearchA > TrayInSearchB) {
      return 1;
    } else {
      return TrayInRowContainingA < TrayInRowContainingB ? -1 : 1;
    }
  }
  resultCompareArray() {
    return this.order.flat().sort((a, b) => this.compareLeftToRight(a, b));
  }
}
