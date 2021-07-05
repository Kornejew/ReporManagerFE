import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entry} from '../model/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: HttpClient) {
  }

  public getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>('http://localhost:8080/entry');
  }
}
