import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarComponent} from '../star/star.component';
import {PhoneListComponent} from './phone-list/phone-list.component';
import {RouterModule, Routes} from '@angular/router';
import {PhoneCreateComponent} from './phone-create/phone-create.component';
import {PhoneEditComponent} from './phone-edit/phone-edit.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: PhoneListComponent},
  {path: 'create', component: PhoneCreateComponent},
  {path: ':id/edit', component: PhoneEditComponent},
];

@NgModule({
  declarations: [StarComponent, PhoneListComponent, PhoneCreateComponent, PhoneEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class PhoneModule {
}
