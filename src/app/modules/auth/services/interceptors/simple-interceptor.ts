import { Inject, Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../auth.service';
import { NbAuthJWTToken } from '../token.service';
import { NB_AUTH_INTERCEPTOR_HEADER } from '../../auth.options';

@Injectable()
export class NbAuthSimpleInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,
              @Inject(NB_AUTH_INTERCEPTOR_HEADER) protected headerName: string = 'Authorization') {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.getToken()
      .switchMap((token: NbAuthJWTToken) => {
        if (token && token.getValue()) {
          req = req.clone({
            setHeaders: {
              [this.headerName]: token.getValue(),
            },
          });
        }
        return next.handle(req);
      });
  }

  protected get authService(): AuthService {
    return this.injector.get(AuthService);
  }
}
