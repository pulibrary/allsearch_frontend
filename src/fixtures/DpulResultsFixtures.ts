import { SearchResult } from '../models/SearchResult';

export default {
  testResult1: SearchResult.fromObject({
    title: 'The dragon fly : mazurka',
    creator: 'Strauss, Josef, 1827-1870',
    publisher: 'New York : Carl Fischer, [1902]',
    id: '336e502f75f38a090aee8bfa083aafb2',
    type: 'Musical score',
    url: 'https://dpul.princeton.edu/catalog/336e502f75f38a090aee8bfa083aafb2',
    other_fields: {
      collection: 'Music and Performing Arts Collections at Princeton'
    }
  })
};
