import { Component } from '@angular/core';

@Component({
  selector: 'ez-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string;
  password: string;

  submitForm() {
    console.log(this.email, this.password);
  }
}
