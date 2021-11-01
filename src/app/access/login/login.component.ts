import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    user: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  __onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      alert('Formulario no valido');
    }
  }

  ngOnInit(): void {
  }

}
