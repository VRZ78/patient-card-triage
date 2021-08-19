import {Component, OnDestroy, OnInit} from "@angular/core";
import {CardTriageService} from "./services/card-triage.service";
import {PatientCard} from "./models/patient-card.model";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'card-triage',
  templateUrl: './card-triage.component.html',
  styleUrls: ['./card-triage.module.scss']
})
export class CardTriageComponent implements OnInit, OnDestroy{

  pendingOrRejectedCards : PatientCard[] = []
  doneCards : PatientCard[] = []

  filterSubscription: Subscription | undefined;
  filterString: string = ""

  constructor(private cardTriageService : CardTriageService) {

  }

  ngOnInit() {

    // Fetch cards from server
    this.cardTriageService.fetchCards();

    // Subscribe for when cards will be loaded
    this.cardTriageService.cardsChanged.subscribe((cards) => {
      // Sort cards as to-do or done
      this.pendingOrRejectedCards = [];
      this.doneCards = [];
      for(let card of cards) {
        if(card.status === "PENDING" || card.status === "REJECTED") {
          this.pendingOrRejectedCards.push(card);
        } else if(card.status === "DONE") {
          this.doneCards.push(card);
        }
      }
    })

    // Subscribe to filter change
    this.filterSubscription = this.cardTriageService.cardsFiltered.subscribe((filterString) => {
      this.filterString = filterString;
    })
  }

  ngOnDestroy() {
    this.filterSubscription?.unsubscribe();
  }

  onStatusChanged(data: { id: number, status: string }) {
    this.cardTriageService.changeCardStatus(data.id, data.status)
  }

  /**
   * Only display cards whose name or arrhythmias match filter
   * @param card
   */
  hasToDisplay(card: PatientCard) : boolean {
    return card.patientName.toLowerCase().includes(this.filterString) || card.arrhythmias.some(ar => ar.toLowerCase().includes(this.filterString))
  }

}
