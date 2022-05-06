import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  register() {
    this.router.navigate(['/view/home']);
  }
}
