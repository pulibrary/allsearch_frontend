import { SearchResult } from '../models/SearchResult';

export default {
  testResult1: SearchResult.fromObject({
    title: 'The New York Times',
    id: 138356,
    type: 'Electronic Resource',
    description:
      'Guide with links to the best sources for current and historical full text online of the NYT.\n',
    url: 'http://libguides.princeton.edu/newspapers/usacurrent#nyt'
  })
};
