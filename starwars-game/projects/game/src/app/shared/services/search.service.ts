import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  state = new BehaviorSubject('');

  constructor() { }

  searchValue(value: string) {
    this.state.next(value);
  }
}
