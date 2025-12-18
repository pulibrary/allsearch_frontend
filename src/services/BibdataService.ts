import config from '../config';

export class BibdataService {
  // Retrieve SCSB availability from bibdata.
  // Note: this method doesn't provide any error handling, so
  // be sure to use it in conjunction with .catch()
  public scsbAvailability(
    barcodes: string[]
  ): Promise<{ [key: string]: { status: string; color: string } }> {
    return fetch(
      `${config.bibdataUrl}/availability?${this.queryParams(barcodes)}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status: ${response.status}`);
        }
      })
      .then(parsed => {
        const keyValuePairs = Object.keys(parsed).map((key: string) => {
          const status =
            parsed[key].itemAvailabilityStatus === 'Available'
              ? 'Available'
              : 'Unavailable';
          const color = status === 'Available' ? 'green' : 'red';
          return [
            key,
            {
              status: status,
              color: color
            }
          ];
        });
        return Object.fromEntries(keyValuePairs);
      });
  }

  private queryParams(barcodes: string[]): string {
    return barcodes.map(barcode => `barcodes[]=${barcode}`).join('&');
  }
}
