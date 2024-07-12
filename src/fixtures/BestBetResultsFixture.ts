import { SearchResult } from '../models/SearchResult';

export default {
  testResult1: SearchResult.fromObject({
    title: 'The New York Times',
    id: 138356,
    type: 'Electronic Resource',
    description:
      'Guide with links to the best sources for current and historical full text online of the NYT.\n',
    url: 'http://libguides.princeton.edu/newspapers/usacurrent#nyt'
  }),
  testResult2: SearchResult.fromObject({
    title: 'Personal Librarian',
    id: 12345,
    type: 'Electronic Resource',
    description:
      'This program pairs every Princeton undergraduate with a friendly library expert. Your Personal Librarian will help you navigate the library system, get started with research, point you to subject experts, and answer any questions you might have.\n',
    url: 'https://library.princeton.edu/personal-librarian'
  })
};
