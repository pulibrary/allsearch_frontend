import { SearchScope } from '../enums/SearchScope';

const map: { [key in SearchScope]: string } = {
  article: 'text',
  artmuseum: 'visual-material',
  catalog: 'book',
  database: 'databases',
  dpul: 'digital',
  findingaids: 'archives',
  journals: 'journal',
  libanswers: 'question',
  libguides: 'compass',
  pulmap: 'map',
  staff: 'phone-book',
  website: 'windows'
};
export default map;
