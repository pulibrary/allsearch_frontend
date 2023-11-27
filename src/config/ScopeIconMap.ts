import { SearchScope } from '../enums/SearchScope';

const map: { [key in SearchScope]: string } = {
  article: 'text',
  artmuseum: 'visual-material',
  'best-bet': 'best-bet',
  catalog: 'book',
  database: 'databases',
  dpul: 'digital',
  findingaids: 'archives',
  libanswers: 'question',
  libguides: 'compass',
  pulmap: 'map',
  website: 'windows'
};
export default map;
