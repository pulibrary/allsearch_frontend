import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RecordHoldingsMap } from './RecordHoldingsMap';
import { SearchResults } from './SearchResults';
import ScsbServiceFixtures from '../fixtures/ScsbServiceFixtures';

describe('RecordHoldingsMap', () => {
  it('can extract a holding', () => {
    const results: SearchResults = {
      records: [
        {
          title: '',
          url: '',
          id: 'SCSB-123',
          other_fields: {
            first_library: 'ReCAP',
            first_call_number: 'DU110 .G738 1947'
          }
        }
      ],
      number: 1,
      more: 'https://search.princeton.edu?query=robots'
    };
    const expected = 'ReCAP » DU110 .G738 1947';
    expect(
      new RecordHoldingsMap(results)
        .getHoldingsByDocumentId('SCSB-123')[0]
        .label()
    ).toEqual(expected);
  });
  it('defaults the status of SCSB holdings to Loading...', () => {
    const results: SearchResults = {
      records: [
        {
          title: '',
          url: '',
          id: 'SCSB-123',
          other_fields: {
            first_library: 'ReCAP'
          }
        }
      ],
      number: 1,
      more: 'https://search.princeton.edu?query=robots'
    };
    expect(
      new RecordHoldingsMap(results).getHoldingsByDocumentId('SCSB-123')[0]
        .status
    ).toEqual('Loading...');
  });
  describe('getHoldingsByDocumentId()', () => {
    it('returns an array of PhysicalHoldings objects', () => {
      const results: SearchResults = {
        records: [
          {
            title: '',
            url: '',
            id: 'SCSB-123'
          },
          {
            title: '',
            url: '',
            id: '991230421',
            other_fields: {
              first_library: 'Marquand',
              second_library: 'Stokes'
            }
          }
        ],
        number: 3,
        more: 'https://search.princeton.edu?query=robots'
      };
      const holdingsMap = new RecordHoldingsMap(results);
      expect(holdingsMap.getHoldingsByDocumentId('991230421').length).toEqual(
        2
      );
      expect(
        holdingsMap.getHoldingsByDocumentId('991230421')[0].library
      ).toEqual('Marquand');
      expect(
        holdingsMap.getHoldingsByDocumentId('991230421')[1].library
      ).toEqual('Stokes');
    });
  });
  describe('updateScsbAvailability()', () => {
    beforeEach(() => {
      global.fetch = vi.fn(_url => {
        return Promise.resolve(
          new Response(JSON.stringify(ScsbServiceFixtures.response))
        );
      });
    });
    it('updates the status from the results of our API call', async () => {
      const results: SearchResults = {
        records: [
          {
            title: '',
            url: '',
            id: 'SCSB-123',
            other_fields: {
              first_library: 'ReCAP',
              first_barcode: 'HN2X2Y'
            }
          }
        ],
        number: 1,
        more: 'https://search.princeton.edu?query=robots'
      };
      const holdingsMap = new RecordHoldingsMap(results);
      expect(holdingsMap.getHoldingsByDocumentId('SCSB-123')[0].status).toEqual(
        'Loading...'
      );

      await holdingsMap.updateScsbAvailability();

      expect(holdingsMap.getHoldingsByDocumentId('SCSB-123')[0].status).toEqual(
        'Available'
      );
    });
    it('does not affect non-SCSB items', async () => {
      const results: SearchResults = {
        records: [
          {
            title: '',
            url: '',
            id: '991230421',
            other_fields: {
              first_library: 'Marquand',
              first_barcode: '12345',
              first_status: 'Available'
            }
          },
          {
            title: '',
            url: '',
            id: 'SCSB-123',
            other_fields: {
              first_library: 'ReCAP',
              first_barcode: 'HN2X2Y'
            }
          }
        ],
        number: 2,
        more: 'https://search.princeton.edu?query=robots'
      };
      const holdingsMap = new RecordHoldingsMap(results);
      expect(
        holdingsMap.getHoldingsByDocumentId('991230421')[0].status
      ).toEqual('Available');

      await holdingsMap.updateScsbAvailability();

      expect(
        holdingsMap.getHoldingsByDocumentId('991230421')[0].status
      ).toEqual('Available');
    });
    it('does not make any HTTP requests if there are no SCSB items', async () => {
      const results: SearchResults = {
        records: [
          {
            title: '',
            url: '',
            id: '991230421',
            other_fields: {
              first_library: 'Marquand',
              first_barcode: '12345',
              first_status: 'Available'
            }
          }
        ],
        number: 1,
        more: 'https://search.princeton.edu?query=robots'
      };
      const holdingsMap = new RecordHoldingsMap(results);
      expect(
        holdingsMap.getHoldingsByDocumentId('991230421')[0].status
      ).toEqual('Available');

      await holdingsMap.updateScsbAvailability();

      expect(global.fetch).not.toHaveBeenCalled();
      expect(
        holdingsMap.getHoldingsByDocumentId('991230421')[0].status
      ).toEqual('Available');
    });
  });
  describe('scsbBarcodes()', () => {
    it('includes barcodes from only SCSB holdings', () => {
      const results: SearchResults = {
        records: [
          {
            title: '',
            url: '',
            id: 'SCSB-123',
            other_fields: {
              first_library: 'ReCAP',
              first_barcode: '12345',
              second_library: 'ReCAP',
              second_barcode: '67890'
            }
          },
          {
            title: '',
            url: '',
            id: 'SCSB-ABC',
            other_fields: {
              first_library: 'ReCAP',
              first_barcode: 'ABCDEF'
            }
          },
          {
            title: '',
            url: '',
            id: '991230421',
            other_fields: {
              first_library: 'Marquand',
              first_barcode: 'not-a-scsb-barcode'
            }
          }
        ],
        number: 1,
        more: 'https://search.princeton.edu?query=robots'
      };
      expect(new RecordHoldingsMap(results).scsbBarcodes()).toEqual([
        '12345',
        '67890',
        'ABCDEF'
      ]);
    });
  });
});
