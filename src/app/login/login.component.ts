import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface LoginInterface {
  login?: string;
  password?: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public payload: LoginInterface = {}; 
  public isPending: boolean = false;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  register = () => {
    this.router.navigate(['/register']);
  }

  submit = () => {
    let header_node = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'rejectUnauthorized': 'false'
      }),
    };

    this.http.post('/login', { ...this.payload }, header_node)
      .subscribe({
        next: (v) => {
          this.router.navigate(['/repo/list']);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      });
  }
}
