import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private router: Router,
              private config: ConfigService) { }

  redirectToPage = (page: string) => {
    const { redirects } = this.config.get();
    this.router.navigate([redirects ? redirects[page] : '']);
  }
}
