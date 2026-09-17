import { RerankDocument } from '../interfaces/RerankDocument';

export class RerankDocumentResult implements RerankDocument {
  index: number;
  score: number;

  constructor(index: number, score: number) {
    this.index = index;
    this.score = score;
  }

  static fromObject(object: RerankDocument): RerankDocumentResult {
    return new RerankDocumentResult(object.index, object.score);
  }
}
