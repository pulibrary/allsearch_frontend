import { Axios } from 'axios';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { BibdataService } from './BibdataService';
import ScsbServiceFixtures from '../fixtures/ScsbServiceFixtures';

describe('BibdataService', () => {
  describe('scsbAvailability()', () => {
    beforeEach(() => {
      const mock = vi.spyOn(Axios.prototype, 'get');
      mock.mockResolvedValue({
        data: ScsbServiceFixtures.response
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
    });
  });
});
