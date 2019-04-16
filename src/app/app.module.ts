import { TextPlaceholderModule } from './../../projects/text-placeholder/src/lib/text-placeholder.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextPlaceholderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
