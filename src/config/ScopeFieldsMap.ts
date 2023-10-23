import { SearchScope } from '../enums/SearchScope';

const map: { [key in SearchScope]: string[] } = {
  article: ['format', 'creator'],
  artmuseum: [],
  'best-bet': [],
  catalog: ['format', 'creator', 'publisher'],
  database: [],
  dpul: ['format', 'creator'],
  findingaids: ['format'],
  libanswers: ['creator'],
  libguides: ['description'],
  pulmap: ['format', 'creator', 'publisher']
};
export default map;
