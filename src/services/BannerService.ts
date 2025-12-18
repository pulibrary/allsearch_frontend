import config from '../config';
import { Banner } from '../interfaces/Banner';
import { BannerResult } from '../models/BannerResult';

export class BannerService {
  public result(): Promise<Banner> {
    return fetch(`${config.allsearchApiUrl}/banner`)
      .then(response => response.json())
      .then(data => BannerResult.fromObject(data))
      .catch(() => new BannerResult('', false, 'info', true, false));
  }
}
