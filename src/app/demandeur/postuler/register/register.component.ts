import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/controller/model/user.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';
import { UserService } from 'src/app/controller/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private allusersService: AllusersService,
private router: Router
    ) { }

  ngOnInit(): void {
  }

  addUser(){
    this.allusersService.registerUser(this.user).subscribe(data =>{
      console.log(data);
    })
  }

  onSubmit(){
    console.log(this.user);
    this.addUser();
  }

}
