import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserService } from "./services/user/user.service";
import { AppRoutingModule } from "./app-routing.module";
import { ShellComponent } from './shell/shell.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TokenHelperService } from "./services/helper/token-helper/token-helper.service";
import { SuiModalService, SuiComponentFactory, SuiModule } from "ng2-semantic-ui/dist";
import { RegisterComponent } from './register/register-component/register.component';
import { AuthenticationLoginService } from "./services/auth/authenticationlogin.service";
import { AuthenticationEventService } from "./services/events/authentication-event/authentication-event.service";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment.prod";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./services/data/data.service";
import { RegisterUserComponent } from './register/register-user/register-user.component';

import { OrderModule } from './order-pipe/ngx-order.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    ShellComponent,
    MenuComponent,
    FooterComponent,
    RegisterComponent,
    RegisterUserComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'user-angular'),
    AngularFireAuthModule,
    HttpModule,
    OrderModule
  ],
  providers: [
    AuthenticationLoginService,
    AuthenticationEventService,
    UserService,
    DataService,
    TokenHelperService,
    SuiModalService,
    SuiComponentFactory],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterComponent
  ]
})
export class AppModule { }
