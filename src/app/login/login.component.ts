import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public pass: string = '';
  public login: string = '';
  public isPending: boolean = false;

  constructor(private http: HttpClient) {

  }

  submit = () => {
    let header_node = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'rejectUnauthorized': 'false'
        }),
      };
    this.http.post('localhost:8443/login', {
      login: this.login,
      password: this.pass
    }, header_node).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }
}
