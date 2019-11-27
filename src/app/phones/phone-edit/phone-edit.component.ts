import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhoneService} from '../phone.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {
  id = +this.activeRoute.snapshot.paramMap.get('id');
  updatePhoneForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
              private ps: PhoneService,
              private fb: FormBuilder,
              private route: Router,
  ) {
  }

  ngOnInit() {
    const phone = this.ps.findPhoneById(this.id);
    this.updatePhoneForm = this.fb.group({
      name: [phone.name, Validators.required],
      price: [phone.price, Validators.required],
      star: [phone.star, Validators.required],
    });
    console.log(this.updatePhoneForm.value);
  }

  submit() {
    this.ps.update(this.updatePhoneForm.value, this.id);
    this.route.navigate(['']);
  }

  get name() {
    return this.updatePhoneForm.get('name');
  }

  get price() {
    return this.updatePhoneForm.get('price');
  }

  get star() {
    return this.updatePhoneForm.get('star');
  }
}

