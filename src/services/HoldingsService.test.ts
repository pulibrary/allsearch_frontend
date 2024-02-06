import { describe, it, expect } from 'vitest';
import { Result } from '../interfaces/Result';
import { HoldingsService } from './HoldingsService';

describe('HoldingsService', () => {
  describe('extractHoldingsArray()', () => {
    it('can extract a holding', () => {
      const document: Result = {
        title: '',
        url: '',
        id: '',
        other_fields: {
          first_library: 'ReCAP',
          first_call_number: 'DU110 .G738 1947'
        }
      };
      const expected = 'ReCAP » DU110 .G738 1947';
      expect(HoldingsService.extractHoldingsArray(document)[0].label()).toEqual(
        expected
      );
    });
  });
});
