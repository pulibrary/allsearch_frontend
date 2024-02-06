import { describe, it, expect } from 'vitest';
import { PhysicalHolding } from './PhysicalHolding';

describe('PhysicalHolding', () => {
  describe('statusColor()', () => {
    it('returns green when available', () => {
      const holding = new PhysicalHolding('Marquand', 'ABC 123', 'Available');
      expect(holding.statusColor()).toEqual('green');
    });
    it('returns red when unavailable', () => {
      const holding = new PhysicalHolding('Marquand', 'ABC 123', 'Unavailable');
      expect(holding.statusColor()).toEqual('red');
    });
    it('returns gray when there is no status', () => {
      const holding = new PhysicalHolding('Marquand');
      expect(holding.statusColor()).toEqual('gray');
    });
  });
});
