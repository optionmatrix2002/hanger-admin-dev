import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PagesService } from '../../../pages/pages.service';
import { AlertService } from '../../../shared/alert.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/nm.jpg';
  constructor(public router :Router,public pagesService: PagesService,public alertService: AlertService,private dialogRef: MatDialog,) { }
  public logoutUser() {
    this.pagesService.logOut().then(res => {
      if(res.success) {
        this.dialogRef.closeAll();
        localStorage.removeItem('login_user_info');
        this.router.navigate(['/login']);
        this.alertService.createAlert(res.message,1);
      }else {
        this.alertService.createAlert(res.message,0);
      }
    }).catch(e => {
      console.log(e);
    });
  }

  ngOnInit() {

    
  }

}
