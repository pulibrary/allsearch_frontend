import { Result } from '../interfaces/Result';

export class SearchResult implements Result {
    title: string
    url: string
    id: string
    type?: string
    publisher?: string
    other_fields: any

    constructor(title: string, url: string, id: string, type?: string, publisher?: string, other_fields?: any) {
        this.title = title;
        this.url = url;
        this. id = id;
        this.type = type;
        this. publisher = publisher;
        this.other_fields = other_fields;
    }
}
