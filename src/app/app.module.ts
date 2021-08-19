import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CardTriageComponent} from "./card-triage/card-triage.component";
import {HttpClientModule} from "@angular/common/http";
import {CardTriageService} from "./card-triage/services/card-triage.service";
import {NavbarComponent} from "./UI/navbar/navbar.component";
import {CardComponent} from "./card-triage/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardTriageComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CardTriageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
