import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CardTriageComponent} from "./card-triage/card-triage.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CardTriageService} from "./card-triage/services/card-triage.service";
import {NavbarComponent} from "./UI/navbar/navbar.component";
import {CardComponent} from "./card-triage/card/card.component";
import {HttpErrorHandler} from "./shared/HttpErrorHandler";
import {ErrorService} from "./UI/error-toast/services/error.service";
import {ErrorToastComponent} from "./UI/error-toast/error-toast.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardTriageComponent,
    CardComponent,
    ErrorToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CardTriageService,
    ErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandler,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
