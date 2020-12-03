import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private utilisateurService: UtilisateurService) {}

    intercept(req: HttpRequest<any>,next: HttpHandler) {
        const authToken = this.utilisateurService.token;
        const newRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(newRequest);
    }
}
