import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
