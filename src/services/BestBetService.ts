import { RerankDocument } from '../interfaces/RerankDocument';
import { RerankDocumentResult } from '../models/RerankDocumentResult';
import { RerankResult } from '../models/RerankResult';

export class BestBetService {
  public async rerank(
    query: string | null,
    documents: string[]
  ): Promise<RerankDocument[]> {
    const payload = {
      top_n: 10,
      query: query,
      texts: documents
    };

    return await fetch('http://localhost:8080/rerank', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) return response.json();
        else throw new Error(`Response status: ${response.status}`);
      })
      .then(parsed => {
        return parsed.map((res: RerankDocument) =>
          RerankDocumentResult.fromObject(res)
        );
      })
      .catch(() => new RerankResult([]));
  }
}
