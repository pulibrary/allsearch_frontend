import { Result } from '../interfaces/Result';
import { PhysicalHolding } from '../models/PhysicalHolding';

export class HoldingsService {
  // Take holdings information from the other_fields in the Result
  // document.  Only add an array element if we have enough
  // data that would be useful for the user.
  static extractHoldingsArray(document: Result): PhysicalHolding[] {
    const order = ['first', 'second'];
    return order.reduce((holdingsDisplays, number) => {
      const other_fields = document?.other_fields;
      if (other_fields) {
        const library = other_fields[`${number}_library`];
        const call_number = other_fields[`${number}_call_number`];
        const status = other_fields[`${number}_status`];
        if (library) {
          holdingsDisplays.push(
            new PhysicalHolding(library, call_number, status)
          );
        }
      }
      return holdingsDisplays;
    }, [] as PhysicalHolding[]);
  }
}
