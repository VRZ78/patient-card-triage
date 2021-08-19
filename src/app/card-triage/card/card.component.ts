import {PatientCard} from "../models/patient-card.model";
import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() card : PatientCard | undefined
  @Output() onStatusChange = new EventEmitter<{ id: number, status: string }>()


}
