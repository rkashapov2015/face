import {NgModule} from "@angular/core";
import {HttpModule, JsonpModule } from '@angular/http';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRouterModule} from "./app.router.module";
import {CatalogComponent} from "./catalog.component";
import {AboutComponent} from "./about.component";
import {MainComponent} from "./main.component";
import {NotFoundComponent} from "./not-found.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    CatalogComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
