import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './components/login/login.component';

import { RoutesModule } from './routes/routes.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MicrosoftComponent } from './components/microsoft/microsoft.component';

import { LoginService } from './components/login/login.service';
import { HttpService } from './commonServices/http.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    LayoutComponent,
    MicrosoftComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesModule
  ],
  providers: [LoginService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
