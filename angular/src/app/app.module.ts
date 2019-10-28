import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ViewComponent } from './view/view.component';
import {RouterModule, Routes} from '@angular/router';
import { BaseComponent } from './base/base.component';

const appRoutes: Routes = [
  { path: 'edit', component: AppComponent },
  { path: 'view/:filename', component: ViewComponent,  data: { title: 'Paste' } },
    { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
