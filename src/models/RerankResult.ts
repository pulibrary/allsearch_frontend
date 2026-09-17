import { Rerank } from '../interfaces/Rerank';
import { RerankDocumentResult } from './RerankDocumentResult';

export class RerankResult implements Rerank {
  results: RerankDocumentResult[];

  constructor(results: RerankDocumentResult[]) {
    this.results = results;
  }

  static fromObject(object: Rerank) {
    return new RerankResult(object.results);
  }
}
