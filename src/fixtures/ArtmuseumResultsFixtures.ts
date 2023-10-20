import { SearchResult } from '../models/SearchResult';

export default {
  testResult1: SearchResult.fromObject({
    title: 'Centaur',
    creator:
      'Dimitri Hadzi, 1921–2006; born New York, NY; died Boston, MA; active Rome, Italy and Cambridge, MA',
    id: '31846',
    type: 'artobjects',
    url: 'https://artmuseum.princeton.edu/collections/objects/31846',
    other_fields: {
      credit_line: 'Gift of Brian P. Leeb, Class of 1918',
      medium: 'Cast bronze',
      dimensions:
        '270 x 170 cm (106 5/16 x 66 15/16 in.)\r\nflutes (A1): 31.8 x diam. 4.8 cm (12 1/2 x 1 7/8 in.)\r\nmold for flute (A2): 39.7 x diam. 9 cm (15 5/8 x 3 9/16 in.)',
      primary_image:
        'https://puam-loris.aws.princeton.edu/loris/y1971-25_a.jp2',
      object_number: 'y1971-25'
    }
  })
};
