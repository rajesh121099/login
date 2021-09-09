import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    ForgetpasswordComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatSelectModule,MatGridListModule, 
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'Login',component:LoginComponent},
      {path:'forgetpassword',component:ForgetpasswordComponent},
      {path:'signin',component:SigninComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
