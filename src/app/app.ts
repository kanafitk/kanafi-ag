import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {Slide} from './slide/slide';
import {Product} from './product/product';
import {Footer} from './footer/footer';

// interface product {
//   name_: string;
//   detail: string;
//   price: number;
//   discount: number;
//   stock: number;
// }

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Navbar,Slide,Product,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'kanafi-angular-project';
}
