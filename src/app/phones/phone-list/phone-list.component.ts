import {Component, OnInit} from '@angular/core';
import {PhoneService} from '../phone.service';
import {IPhone} from '../iphone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones = this.ps.getAll();
  listPhone: IPhone[] = [];
  showImg = true;
  widthImg = 100;
  showMess: string;

  constructor(private ps: PhoneService) {
  }

  ngOnInit() {
    this.listPhone = this.phones;
  }

  filter(event) {
    const data = event.target.value;
    this.listPhone = (data) ? this.search(data) : this.phones;
  }

  search(data) {
    return this.phones.filter(
      phone => phone.name.toLowerCase().indexOf(data) !== -1
    );
  }

  showImage() {
    this.showImg = !this.showImg;
  }

  delete(id) {
    this.phones.splice(id, 1);
  }

  showMessage(event) {
    this.showMess = event;
  }
}
