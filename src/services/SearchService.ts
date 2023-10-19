import axios, { AxiosInstance } from 'axios'
import { plainToInstance } from 'class-transformer'

import config from '../config'
import { Results } from '../interfaces/Results'
import { SearchResults } from '../models/SearchResults'

export class SearchService {
  private client: AxiosInstance

  constructor() {
    const options = {
      method: 'GET',
      baseURL: config.allsearchApiUrl
    }
    this.client = axios.create(options)
  }

  public results(service: string, query: string): Promise<Results> {
    return this.client
      .get<Results>(`/search/${service}?query=${query}`)
      .then(res => plainToInstance(SearchResults, res.data))
  }
}
