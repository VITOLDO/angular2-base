import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SyspropComponent } from './admintool/sysprop/sysprop.component';

@NgModule({
  declarations: [
    AppComponent,
    SyspropComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
