import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PhoneModule} from './phones/phone.module';

const routes: Routes = [
  {path: 'phones', loadChildren: './phones/phone.module#PhoneModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PhoneModule,
  ]
})
export class AppRoutingModule {
}
