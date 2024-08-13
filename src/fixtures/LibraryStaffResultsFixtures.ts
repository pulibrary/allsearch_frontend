import { SearchResult } from '../models/SearchResult';

export default {
  testResult1: SearchResult.fromObject({
    title: 'Trout, Nimbus',
    id: 2,
    type: 'Library Staff',
    url: 'https://library.princeton.edu/about/staff-directory/nimbuskt',
    other_fields: {
      building: 'Firestone Library',
      department: 'Library - Office of the Deputy University Librarian',
      email: 'nibmus@princeton.edu',
      first_name: 'Nimbus',
      last_name: 'Trout',
      library_title: 'Nap Coordinator',
      middle_name: 'Kilgore',
      office: 'A-200',
      phone: '(555) 111-1111',
      netid: 'nimbuskt'
    }
  })
};
