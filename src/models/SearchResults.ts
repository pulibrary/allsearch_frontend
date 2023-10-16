import { SearchResult } from "./SearchResult";
import { Results } from "../interfaces/Results";

export class SearchResults implements Results {
    number: number
    more: string
    records: SearchResult[]

    constructor(number: number, more: string, records: SearchResult[]) {
        this.number = number;
        this.more = more;
        this.records = records;
    }
}
