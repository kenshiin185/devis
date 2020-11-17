import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import  { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable()
export class AddCookieInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`addcookieInterceptor ${req.url}`);

        const reqWithCookie: HttpRequest<any> = req.clone({
            withCredentials: true
        });
        return next.handle(reqWithCookie);
    }
}