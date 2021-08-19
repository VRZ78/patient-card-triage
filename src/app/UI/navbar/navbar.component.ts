import {Component, OnInit} from "@angular/core";
import {CardTriageService} from "../../card-triage/services/card-triage.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{

  title : string = "Patient Card Triage";
  searchInput : string = "";

  constructor(private cardTriageService : CardTriageService) {

  }

  onSearchInputChange () {
    this.cardTriageService.cardsFiltered.next(this.searchInput.toLowerCase())
  }


}
