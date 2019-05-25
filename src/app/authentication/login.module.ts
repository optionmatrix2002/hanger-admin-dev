import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerifyuserComponent } from './verifyuser/verifyuser.component';
import { TooltipModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './login.service';


export const routes = [
  { path: '', redirectTo:'login', pathMatch : 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'userverification', component: VerifyuserComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    VerifyuserComponent
  ],
  providers: [ 
    LoginService
  ],
})
export class LoginModule { }