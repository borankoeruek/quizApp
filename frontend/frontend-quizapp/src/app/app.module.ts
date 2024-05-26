import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HomeModule} from "./modules/home/home.module";

@NgModule({
  imports: [BrowserModule, HomeModule, RouterModule.forRoot(routes)],
})
export class AppModule {}
