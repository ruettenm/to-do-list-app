import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import Entry from './Entry'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {
    private url = 'https://to-do-list-backend.herokuapp.com/api/entries'

    public entries: Entry[]

    constructor(private httpClient: HttpClient) {
        this.pollEntries()
    }

    public remove(entryId: string) {
        return this.httpClient
            .delete(`${this.url}/${entryId}`)
            .map(responseData => {
                return responseData as Entry[]
            })
            .toPromise()
            .then(entries => {
                this.entries = entries
            })
    }

    public create(title: string, description?: string) {
        return this.httpClient.post(this.url, { title, description }).toPromise().then((entry: Entry) => {
            this.entries.push(entry)
        })
    }

    private pollEntries() {
        return Observable
            .interval(10000)
            .startWith(0)
            .switchMap(() => {
                return this.httpClient
                    .get(this.url)
                    .map(responseData => {
                        return responseData as Entry[]
                    })
            })
            .subscribe(entries => {
                this.entries = entries
            })
    }

}
