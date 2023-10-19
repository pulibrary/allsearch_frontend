export class SearchTermService {
  static term(): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get('q');
  }
}
