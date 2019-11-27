import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PhoneService} from '../phone.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.css']
})
export class PhoneCreateComponent implements OnInit {
  submitted = false;
  addPhoneForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    star: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private ps: PhoneService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
    const data = this.addPhoneForm.value;
    this.ps.add(data);
    this.router.navigate(['']);
  }

  get name() {
    return this.addPhoneForm.get('name');
  }

  get price() {
    return this.addPhoneForm.get('price');
  }

  get star() {
    return this.addPhoneForm.get('star');
  }
}
