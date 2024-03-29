import { Result } from '../interfaces/Result';
import { BibdataService } from '../services/BibdataService';
import { PhysicalHolding } from './PhysicalHolding';
import { SearchResults } from './SearchResults';

type RecordAndHoldings = { [recordId: string]: PhysicalHolding[] };

export class RecordHoldingsMap {
  mapping: RecordAndHoldings;
  constructor(results: SearchResults) {
    this.mapping = Object.fromEntries(
      results.records.map(document => {
        return [document.id, this.#extractHoldings(document)];
      })
    );
  }

  getHoldingsByDocumentId(id: string): PhysicalHolding[] {
    return this.mapping[id];
  }

  updateScsbAvailability(): Promise<boolean> {
    if (this.scsbBarcodes().length === 0) {
      // No need to continue if there are no SCSB
      // holdings to check
      return Promise.resolve(true);
    }
    const bibdata = new BibdataService();
    return bibdata
      .scsbAvailability(this.scsbBarcodes())
      .then(results => {
        Object.keys(results).forEach(barcode => {
          Object.keys(this.mapping).forEach(recordId => {
            this.mapping[recordId].forEach(holding => {
              if (holding.barcode === barcode) {
                holding.status = results[barcode].status;
              }
            });
          });
        });
        return true;
      })
      .catch(() => {
        Object.keys(this.mapping).forEach(recordId => {
          if (recordId.startsWith('SCSB-')) {
            this.mapping[recordId].forEach(holding => {
              holding.status = 'Check record for full availability';
            });
          }
        });
        return true;
      });
  }

  scsbBarcodes(): string[] {
    return Object.keys(this.mapping).reduce((barcodeList, documentId) => {
      if (documentId.startsWith('SCSB-')) {
        return barcodeList.concat(this.barcodesForDocumentId(documentId));
      }
      return barcodeList;
    }, [] as string[]);
  }

  barcodesForDocumentId(documentId: string): string[] {
    return this.mapping[documentId].reduce((barcodeList, holding) => {
      if (holding.barcode) {
        barcodeList.push(holding.barcode);
      }
      return barcodeList;
    }, [] as string[]);
  }

  #extractHoldings(document: Result): PhysicalHolding[] {
    const order = ['first', 'second'];
    return order.reduce((holdingsDisplays, number) => {
      const other_fields = document?.other_fields;
      if (other_fields) {
        const library = other_fields[`${number}_library`];
        const call_number = other_fields[`${number}_call_number`];
        const status = document.id.startsWith('SCSB-')
          ? 'Loading...'
          : other_fields[`${number}_status`];
        const barcode = other_fields[`${number}_barcode`];
        if (library) {
          holdingsDisplays.push(
            new PhysicalHolding(library, call_number, status, barcode)
          );
        }
      }
      return holdingsDisplays;
    }, [] as PhysicalHolding[]);
  }
}
