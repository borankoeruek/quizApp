import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
})
export class AppModule {}
