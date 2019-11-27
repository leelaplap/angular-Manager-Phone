import {Injectable} from '@angular/core';
import {IPhone} from './iphone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  phones: IPhone[] = [
    {
      name: 'iphone',
      price: 270000,
      image: 'assets/image/realme-3.png',
      star: 1,
    },
    {
      name: 'iphonea',
      price: 270000,
      image: 'assets/image/realme-3.png',
      star: 2,
    },
    {
      name: 'iphoneab',
      price: 270000,
      image: 'assets/image/realme-3.png',
      star: 3,
    },
    {
      name: 'iphoneabc',
      price: 270000,
      image: 'assets/image/realme-3.png',
      star: 4,
    },
    {
      name: 'iphoneabcd',
      price: 270000,
      image: 'assets/image/realme-3.png',
      star: 4,
    },
    {
      name: 'iphoneabcde',
      price: 270000,
      image: 'assets/image/realme-3.png',
      star: 5,
    },
  ];

  constructor() {
  }

  getAll() {
    return this.phones;
  }

  add(phone) {
    this.phones.push(phone);
  }

  findPhoneById(id) {
    return this.phones[id];
  }

  update(phone, id) {
    this.phones[id] = phone;
  }
}
