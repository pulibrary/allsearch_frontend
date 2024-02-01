import { Result } from '../interfaces/Result';

export class HoldingsService {
  static extractHoldingsStatements(document: Result): string[] {
    const order = ['first', 'second'];
    return order.reduce((holdingsDisplays, number) => {
      const other_fields = document?.other_fields;
      if (other_fields) {
        const library = other_fields[`${number}_library`];
        const call_number = other_fields[`${number}_call_number`];
        if (library && call_number) {
          holdingsDisplays.push(`${library} » ${call_number}`);
        } else if (library) {
          holdingsDisplays.push(library);
        }
      }
      return holdingsDisplays;
    }, [] as string[]);
  }
}
