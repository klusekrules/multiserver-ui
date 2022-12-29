import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

interface RegisterInterface {
  login?: string;
  password?: string;
  repeatedPassword?: string;
  email?: string;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public payload: RegisterInterface = {}; 
  public isPending: boolean = false;

  constructor(private http: HttpClient) { }

  submit = () => {
    let header_node = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'rejectUnauthorized': 'false'
      }),
    };

    this.http.post('/register', { ...this.payload }, header_node)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      });
  }
}
