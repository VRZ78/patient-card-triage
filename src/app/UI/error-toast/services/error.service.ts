import {Subject} from "rxjs";

export class ErrorService {

  public errorChanged : Subject<string> = new Subject<string>()

}
