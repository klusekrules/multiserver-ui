import { Injectable } from '@angular/core';
import { RestService } from './utils/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private readonly path: string = '/api/repo';

  constructor(private rest: RestService) { }

  getList = () => this.rest.get(`${this.path}/list`);

  addList = (payload: any) => this.rest.post(`${this.path}/add`, payload);
}
