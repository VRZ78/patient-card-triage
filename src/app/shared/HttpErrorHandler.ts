import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";
import {ErrorService} from "../UI/error-toast/services/error.service";

@Injectable()
export class HttpErrorHandler implements HttpInterceptor {

  constructor(private errorService : ErrorService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {

          // Send error reason to ErrorService
          this.errorService.errorChanged.next(error.message)
          return new Observable<HttpEvent<any>>();
        })
      )
  }

}
