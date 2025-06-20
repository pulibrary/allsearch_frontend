import { SearchScope } from '../enums/SearchScope';

const map: { [key in SearchScope]: string } = {
  article: 'Articles, eBooks, and other online sources',
  artmuseum: 'Digitized items from the Princeton Art Museum',
  catalog: 'Books, journals, objects, and more',
  database:
    'Searchable indexes of resources by subject, format, and content area',
  dpul: 'Exhibitions, historical images, and digital collections from Princeton University Library',
  findingaids: 'Princeton University Library archival collections',
  journals: '',
  libanswers: '',
  libguides: 'Collections of resources to assist you in your research',
  pulmap: 'Maps and GIS',
  staff: '',
  website: ''
};
export default map;
