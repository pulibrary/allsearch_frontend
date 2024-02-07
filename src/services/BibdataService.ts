import axios, { AxiosInstance } from 'axios';
import config from '../config';

export class BibdataService {
  private client: AxiosInstance;

  constructor() {
    const options = {
      method: 'GET',
      baseURL: config.bibdataUrl
    };
    this.client = axios.create(options);
  }

  // Retrieve SCSB availability from bibdata.
  // Note: this method doesn't provide any error handling, so
  // be sure to use it in conjunction with .catch()
  public scsbAvailability(
    barcodes: string[]
  ): Promise<{ [key: string]: { status: string; color: string } }> {
    return this.client
      .get(`/availability`, {
        params: {
          barcodes: barcodes
        }
      })
      .then(response => {
        const keyValuePairs = Object.keys(response.data).map((key: string) => {
          const status =
            response.data[key].itemAvailabilityStatus === 'Available'
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
}
