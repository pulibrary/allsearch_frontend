import { SearchResult } from '../models/SearchResult';

export default {
  testResult1: new SearchResult(
    'Study on potatoes',
    'http://article.com',
    '123',
    'Dr. Potato',
    undefined,
    'Metaanalysis',
    undefined,
    {
      publication_title: 'Combustion and flame',
      volume: '193',
      isxn: '0010-2180',
      abstract: 'This article is cool',
      fulltext_available: 'Full-text available',
      start_page: '520',
      end_page: '537',
      publication_date: 'July 2018',
      publication_year: '2018'
    }
  ),
  testResult2: SearchResult.fromObject({
    title: 'Rocket Science at the Nanoscale',
    creator: 'Li, Jinxing',
    publisher: 'American Chemical Society',
    id: '10.1021/acsnano.6b02518',
    type: 'Journal Article',
    description:
      '.... In particular, micro- and <h>nanoscale rockets</h> (MNRs) offer impressive capabilities, including remarkable speeds, large cargo-towing forces, precise motion controls, and dynamic self-assembly, which have paved the way for designing multifunctional...',
    url: 'http://princeton.summon.serialssolutions.com/2.0.0/link/0/eLvHCXMwjV1LS8NAEB58HNSD-ELro0QQ8eC2zSabbKAUpLSIqIeqoKew2QcVSlJMevW3O9ukVSsFyTUM2W8n33yTWb4AXC_wgRiNyl0jYvxOLC9QQn3rstIitmF8iO7u2eCVvfW-TaMXJ_nUbQqZpyLNGkFiZTFfhXXrvGLt8h8_GzPytfkXlINkbJRRTczdfP4EsOVI5r_L0RKNOa01_R3YrkSic1Pu6i6s6HQPtn5YB-7DZXvYGSCX6cKpXk9HFA6qOQf5MssRed1uDjsH8NLvPXdvSfXPAyK8gBXE40wEEmGNlEoSw7VtaYRJNK7VlVoaZRRzZcvghd2cxuLCtQmNlqjzEt_zjsDhUrGIKiWkj4KtJbkbGGbCiLs6DBMW1eACVx5XyZrH0zk0deMKoLgCqAZXM2jicWl9sfzW8xl0MaannTmIVGcTjM0tTaAsCWtwWGI6D0ax-8R2hh7_73lOYBPVSmDPaVF-CmvFx0SfwYb9_ik1CuU66uLuU32aD19mBbVr',
    other_fields: {
      publication_date: '2016-06-28',
      publication_year: '2016',
      start_page: '5619',
      end_page: '5634',
      fulltext_available: 'Full-text available',
      abstract:
        'Autonomous propulsion at the nanoscale represents one of the most challenging and demanding goals in nanotechnology. Over the past decade, numerous important advances in nanotechnology and material science have contributed to the creation of powerful self-propelled micro/nanomotors. In particular, micro- and nanoscale rockets (MNRs) offer impressive capabilities, including remarkable speeds, large cargo-towing forces, precise motion controls, and dynamic self-assembly, which have paved the way for designing multifunctional and intelligent nanoscale machines. These multipurpose nanoscale shuttles can propel and function in complex real-life media, actively transporting and releasing therapeutic payloads and remediation agents for diverse biomedical and environmental applications. This review discusses the challenges of designing efficient MNRs and presents an overview of their propulsion behavior, fabrication methods, potential rocket fuels, navigation strategies, practical applications, and the future prospects of rocket science and technology at the nanoscale.',
      publication_title: 'ACS nano',
      volume: '10',
      issue: '6',
      isxn: '1936-0851'
    }
  }),
  testResult3: SearchResult.fromObject({
    title: 'Example title',
    creator: 'Example creator',
    publisher: 'Example publisher',
    id: '123',
    type: 'Journal Article',
    description: 'This abstract <i>contains</i> <strong>HTML</strong>',
    url: 'http://example.com',
    other_fields: {
      abstract: 'This abstract <i>contains</i> <strong>HTML</strong>'
    }
  })
};
