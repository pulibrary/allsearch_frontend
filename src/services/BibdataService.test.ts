import { describe, test, expect, vi, beforeEach } from 'vitest';
import { BibdataService } from './BibdataService';
import ScsbServiceFixtures from '../fixtures/ScsbServiceFixtures';
import config from '../config';

describe('BibdataService', () => {
  describe('scsbAvailability()', () => {
    beforeEach(() => {
      global.fetch = vi.fn(_url => {
        return Promise.resolve(
          new Response(JSON.stringify(ScsbServiceFixtures.response))
        );
      });
    });

    test('returns a promise that resolves to include availability label and color', async () => {
      const service = new BibdataService();
      const results = await service.scsbAvailability([
        'HN2X2Y',
        '33333219778236',
        'HN9E7L',
        'CU50370782'
      ]);
      expect(results['HN2X2Y'].status).toEqual('Available');
      expect(results['HN2X2Y'].color).toEqual('green');
      expect(results['HN9E7L'].status).toEqual('Unavailable');
      expect(results['HN9E7L'].color).toEqual('red');
      expect(fetch).toHaveBeenCalledWith(
        `${config.bibdataUrl}/availability?barcodes[]=HN2X2Y&barcodes[]=33333219778236&barcodes[]=HN9E7L&barcodes[]=CU50370782`
      );
    });
  });
});
