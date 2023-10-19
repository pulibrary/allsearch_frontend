import { SearchResult } from '../models/SearchResult';

export default {
  testResult1: new SearchResult(
    'The Intent of the Artist (Manuscript), Edited by Augusto Centeno, 1941',
    'https://findingaids.princeton.edu/catalog/C0127',
    'C0127',
    'Centeno, Augusto, 1901-1965',
    "The collection consists of the printer's copy of the manuscript for The Intent of the Artist , edited by Centeno and published by the Princeton University Press in 1941. In addition to an introduction by the editor, the volume contains essays by Sherwood Anderson, Thornton Wilder, Roger Sessions, and William Lescaze, writing as artists on their respective crafts.",
    'collection',
    undefined,
    {
      repository: 'Manuscripts Division',
      extent: '1 box and 0.2 linear feet',
      access_restriction: 'The collection is open for research.',
      date: '1941'
    }
  ),
  testResult2: new SearchResult(
    "J. Harlin O'Connell Collection on English Artists, 1825-1952 (mostly 1880-1939)",
    'https://findingaids.princeton.edu/catalog/C0213',
    'C0213',
    "O'Connell, J. Harlin (John Harlin), 1893-1955",
    "The collection consists primarily of letters, short manuscripts, some artwork, and a few proofs of English poets, dramatists, novelists, critics, essayists, biographers, journalists, publishers, artists, and actors who were prominent primarily from the 1890s through the 1930s, collected by O'Connell. Among those represented in the collection are Aubrey Beardsley, Max Beerbohm, John Davidson, Lord Alfred Douglas, Ernest Dowson, John Gray, Maurice Hewlett, Richard Le Gallienne, George Augustus Moore, Stephen Phillips, Bernard Shaw, Arthur Symons, Frederick Wedmore, Oscar Wilde, and W. B. Yeats. The manuscript collection forms part of the larger O'Connell Collection of the 1890s, which contains over 500 printed volumes, among which are many first editions and various periodicals.",
    'collection',
    undefined,
    {
      repository: 'Manuscripts Division',
      extent: '7 boxes, 32 folios, 9 items, and 2.5 linear feet',
      access_restriction: 'Collection is open for research use.'
    }
  ),
  testResult3: new SearchResult(
    'Katherine Anne Porter Collection, 1940-1945',
    'https://findingaids.princeton.edu/catalog/C1175',
    'C1175',
    'Princeton University. Library. Special Collections',
    'The collection consists of selected letters, holograph and typewritten, of Katherine Anne Porter. There are two letters to Arthur Mizener, who taught English at Cornell University and was the biographer of F. Scott Fitzgerald; twelve letters to his wife, Rosemary P. Mizener; two letters addressed to both Rosemary and Arthur Mizener; and 1 letter to a Miss Mackay. In her letters to the Mizeners, Porter talks about her books, including Flowering Judas, and other essays published in Harper\'s Bazaar. She also mentions that her husband Albert did the editing and proofreading for one of her books. There are three letters to poet Allen Tate, where Porter mentions that she hopes to sign a deal with NBC for hosting a show about literature. Also included are nine letters to Caroline Gordon, wife of Tate. Most of Porter\'s letters were written while she was at Yaddo, a retreat and a working community of writers, composers, and visual artists in Saratoga Springs, N.Y., where she invited Rosemary Mizener and Caroline Gordon to visit. She also wrote to Mizener about the "cloistral" nature of the place.',
    'collection',
    undefined,
    {
      repository: 'Manuscripts Division',
      extent: '1 box and 0.2 linear feet',
      access_restriction: 'The collection is open for research.'
    }
  )
};
