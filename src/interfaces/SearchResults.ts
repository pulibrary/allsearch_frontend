import { SearchResult } from "./SearchResult"

export interface SearchResults {
    number: number
    more: string
    records: SearchResult[]
}
