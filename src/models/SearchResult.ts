import { Result } from '../interfaces/Result';

export class SearchResult implements Result {
    title: string
    url: string
    id: string
    creator?: string
    description?: string
    type?: string
    publisher?: string
    other_fields?: {[key: string]: string}

    constructor(title: string, url: string, id: string, creator?: string, description?: string, type?: string, publisher?: string, other_fields?: {[key: string]: string}) {
        this.title = title;
        this.url = url;
        this. id = id;
        this.creator = creator;
        this.description = description;
        this.type = type;
        this. publisher = publisher;
        this.other_fields = other_fields;
    }
}
