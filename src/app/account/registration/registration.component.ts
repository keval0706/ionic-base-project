import { Component, OnInit } from '@angular/core';
import { RegistrationDto } from '../account.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  registration: RegistrationDto;

  constructor() { }

  ngOnInit() {
    this.registration = new RegistrationDto();
  }

  submit() {
    console.log(this.registration);
  }

}
