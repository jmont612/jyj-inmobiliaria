import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  options = ["option1", "option2", "option3", "option4", "option5"];

  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }),
    email: ['', [Validators.required, Validators.email]],
    message: [''],
    gender: [''],
    option: "null",
    optDynamic: "null"
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if(this.contactusForm.valid) {
      console.log(this.contactusForm.value);
    } else {
      alert("Formulario no valido");
    }   
  }

  cleanValues() {
    this.contactusForm.reset();
  }

  updateValues() {
    this.contactusForm.patchValue({
      person: {
        firstname: "James",
        lastname: "Huiza",
      },
      email: "jameshuiza@dominio.com",
      message: "Mensaje de Prueba",
      gender: "M",
      option: "option1",
      optDynamic: "option1"
    });
  }

  ngOnInit(): void {
  }

}