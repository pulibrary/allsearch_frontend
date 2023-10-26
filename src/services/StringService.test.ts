import { describe, it, expect } from 'vitest';
import { StringService } from './StringService';

describe('StringService', () => {
  describe('truncate()', () => {
    const stringToTruncate =
      'my string has lots, and I mean lots!, of characters';
    it('trims a string down to the desired number of characters and adds an ellipsis', () => {
      expect(StringService.truncate(stringToTruncate, 9)).toEqual('my string…');
    });
    it('does not include trailing spaces', () => {
      expect(StringService.truncate(stringToTruncate, 10)).toEqual(
        'my string…'
      );
    });
    it('completes the word if the character limit falls in the middle of a word', () => {
      expect(StringService.truncate(stringToTruncate, 16)).toEqual(
        'my string has lots…'
      );
    });
    it('does not include trailing punctuation', () => {
      expect(StringService.truncate(stringToTruncate, 38)).toEqual(
        'my string has lots, and I mean lots…'
      );
    });
    it('does not truncate if there is no need to', () => {
      expect(StringService.truncate(stringToTruncate, 100)).toEqual(
        'my string has lots, and I mean lots!, of characters'
      );
    });
    it('works for Korean words', () => {
      const koreanStringToTruncate =
        '전통 향토 음식 : 제주인 의 지혜 와 맛 / 집필 위원, 김 지순 [and six others].';
      expect(StringService.truncate(koreanStringToTruncate, 27)).toEqual(
        '전통 향토 음식 : 제주인 의 지혜 와 맛 / 집필…'
      );
    });
  });
});
