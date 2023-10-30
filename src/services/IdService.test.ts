import { describe, test, expect } from 'vitest';
import { IdService } from './IdService';

describe('IdService', () => {
  describe('createDomId()', () => {
    test('it replaces whitespace with hyphens', async () => {
      expect(IdService.createDomId('Finding Aids')).toEqual('finding-aids');
    });
    test('it removes non-ASCII characters', async () => {
      expect(IdService.createDomId('Крокодил Гена section')).toEqual('section');
    });
    test('it removes ascii punctuation (other than _ and -)', () => {
      expect(IdService.createDomId('my!@#$%^&*()_-id')).toEqual('my_-id');
    });
  });
});
