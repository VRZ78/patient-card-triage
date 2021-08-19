import {Subject} from "rxjs";
import {PatientCard} from "../models/patient-card.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SERVER_URI} from "../../../config/config";
import {map} from "rxjs/operators";

@Injectable()
export class CardTriageService {

  constructor(private http: HttpClient) {}

  public cardsChanged: Subject<PatientCard[]> = new Subject<PatientCard[]>();
  public cardsFiltered: Subject<string> = new Subject<string>();

  private cards: PatientCard[] = [];

  /**
   * Fetch cards from the server and instantiate them as PatientCard Objects
   */
  fetchCards() {
    this.http.get<Array<any>>(SERVER_URI + "/cards").pipe(
      map(cards => {
        // Instantiate each object returned from the API
        return cards.map(card => new PatientCard(card))
      })
    ).subscribe((cards) => {
      // Tell observers that new cards are loaded
      this.cards = cards;
      this.cardsChanged.next(this.cards.slice())
    })
  }

  changeCardStatus(id: number, status : string) {
    for(let card of this.cards) {
      if(card.id === id) {
        card.status = status;
        break;
      }
    }
    this.cardsChanged.next(this.cards.slice())
  }

}
