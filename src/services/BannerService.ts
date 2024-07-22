import axios, { AxiosInstance } from 'axios';
import { plainToInstance } from 'class-transformer';

import config from '../config';
import { Banner } from '../interfaces/Banner';
import { BannerResult } from '../models/BannerResult';

export class BannerService {
  private client: AxiosInstance;

  constructor() {
    const options = {
      method: 'GET',
      baseURL: config.allsearchApiUrl
    };
    this.client = axios.create(options);
  }

  public result(): Promise<Banner> {
    return this.client
      .get<Banner>('/banner')
      .then(res => plainToInstance(BannerResult, res.data))
      .catch(() => new BannerResult('', false, 'info', true, false));
  }
}
