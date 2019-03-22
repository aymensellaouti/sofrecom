import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptors implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('user');
    if (!token) {
      return next.handle(req);
    } else {
      const headers = new HttpHeaders().append('Authorization', token);
      const newReq = req.clone({headers});
      return next.handle(newReq);
    }
  }
}

export const AuthentificationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptors,
  multi: true
};
