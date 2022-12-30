import { Injectable } from '@angular/core';

export interface ConfigInterface {
  redirects?: { [k: string]: string };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: ConfigInterface = {
    redirects: {
      login: '/login',
    }
  };

  constructor() { }

  get = () => this.config;
}
