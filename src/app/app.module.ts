import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReportViewComponent} from './report-view/report-view.component';
import {HttpClientModule} from '@angular/common/http';
import {EntryViewComponent} from './entry-view/entry-view.component';
import {EntryComponent} from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportViewComponent,
    EntryViewComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
