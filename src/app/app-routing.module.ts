import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportViewComponent} from './report-view/report-view.component';
import {EntryViewComponent} from './entry-view/entry-view.component';
import {EntryComponent} from './entry/entry.component';

const routes: Routes = [
  {path: 'report-view', component: ReportViewComponent},
  {path: 'entry-view', component: EntryViewComponent},
  {path: 'entry', component: EntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
