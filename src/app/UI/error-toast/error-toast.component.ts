import {Component, OnInit} from "@angular/core";
import {ErrorService} from "./services/error.service";

@Component({
  selector: 'error-toast',
  templateUrl: "./error-toast.component.html",
  styleUrls: ['./error-toast.component.scss']
})
export class ErrorToastComponent implements OnInit{

  errorText : string | null = "";

  constructor(public errorService : ErrorService) {
  }

  ngOnInit() {
    // Subscribe to Error reason
    this.errorService.errorChanged.subscribe((text) => {

      // Trigger display of Error toast
      this.errorText = text;

      // Hide it
      setTimeout(() => {
        this.errorText = null;
      }, 5000)
    })
  }




}
