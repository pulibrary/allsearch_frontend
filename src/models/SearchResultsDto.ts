import { SearchResultDto } from "../models/SearchResultDto";
import { SearchResults } from "../interfaces/SearchResults";

export class SearchResultsDto implements SearchResults {
    number: number
    more: string
    records: SearchResultDto[]

    constructor(number: number, more: string, records: SearchResultDto[]) {
        this.number = number;
        this.more = more;
        this.records = records;
    }
}
