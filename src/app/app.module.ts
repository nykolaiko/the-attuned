import { AppComponent }           from './app.component';
import { HeaderComponent }        from './header/header.component';
import { HomeComponent }          from './home/home.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';

import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { AppRoutingModule }       from './app-routing.module';
import { AboutComponent }         from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
