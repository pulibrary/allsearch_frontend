import { SearchResult } from '../models/SearchResult';

export default {
  testResult: SearchResult.fromObject({
    title: 'Potato',
    publisher: 'Potato company',
    creator: 'Shrek',
    id: '123',
    type: 'Book',
    url: 'https://catalog.princeton.edu/catalog/99125129988006421',
    other_fields: {
      first_library: 'Firestone',
      resource_url:
        'https://na05.alma.exlibrisgroup.com/view/uresolver/01PRI_INST/openurl?u.ignore_date_coverage=true&portfolio_pid=53763462940006421&Force_direct=true'
    }
  })
};
