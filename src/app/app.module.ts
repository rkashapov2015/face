import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRouterModule} from "./app.router.module";
import {AboutComponent} from "./about.component";
import {MainComponent} from "./main.component";
import {NotFoundComponent} from "./not-found.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
