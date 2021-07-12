import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { MainpageComponent } from './mainpage/mainpage.component';

import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'mainpage', component: MainpageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
