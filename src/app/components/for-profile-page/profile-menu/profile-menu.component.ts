import { Component, OnInit } from '@angular/core';
import {User} from '../../../entity/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {

  user:User;
  constructor( private router:Router) { 
    alert('это демо проект некоторые функции не работают!');
  }

  ngOnInit(): void {
    try{
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user.id==null){
      this.router.navigate(['sign']);
    }
  }catch{
      alert('это демо проект некоторые функции не работают!');
    }
  }

  
}
