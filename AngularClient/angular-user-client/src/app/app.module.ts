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
import { SuiModalService, SuiComponentFactory, SuiModule } from "ng2-semantic-ui/dist";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment.prod";
import { HttpClientModule } from "@angular/common/http";

import { OrderModule } from './order-pipe/ngx-order.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    ShellComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    SuiModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'user-angular'),
    AngularFireAuthModule,
    HttpModule,
    OrderModule
  ],
  providers: [
    UserService,
    SuiModalService,
    SuiComponentFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
