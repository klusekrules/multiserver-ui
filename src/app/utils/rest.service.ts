import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { SecurityService } from './security.service';

declare type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient,
              private security: SecurityService) { }

  private request(method: HttpMethod, path: string, body?: any, params?: any, options?: any, headers?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const queryParams = new URLSearchParams();
      const httpHeaders = new HttpHeaders({
        'Accept': 'application/json',
        ...headers,
      });

      const requestOptions = { ...options, headers: httpHeaders };

      Object.keys(params || {}).forEach(key => queryParams.set(key, params[key]));

      const url = `${path}${queryParams.toString().length ? '?' : ''}${queryParams.toString()}`;

      let response;
      switch (method) {
        case 'get' : response = this.http.get(url, requestOptions);
          break;
        case 'delete' : response = this.http.delete(url, requestOptions);
          break;
        case 'post' : response = this.http.post(url, body, requestOptions);
          break;
        case 'put' : response = this.http.put(url, body, requestOptions);
          break;
        case 'patch' : response = this.http.patch(url, body, requestOptions);
          break;
      }

      return response.subscribe({
        next: (response) => resolve(response),
        error: (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.security.redirectToPage('login');
          }
          reject(error);
          return throwError(() => new Error(error.message));
        },
      });
    });
  }

  public post = (path: string, body: any, params?: any, options?: any, headers?: any) =>
    this.request('post', path, body, params, options, headers)

  public get = (path: string, params?: any, options?: any, headers?: any) =>
    this.request('get', path, null, params, options, headers)

  public put = (path: string, body: any, params?: any, options?: any, headers?: any) =>
    this.request('put', path, body, params, options, headers)

  public delete = (path: string, params?: any, options?: any, headers?: any) =>
    this.request('delete', path, null, params, options, headers)

  public patch = (path: string, body: any, params?: any, options?: any, headers?: any) =>
    this.request('patch', path, body, params, options, headers)
}
