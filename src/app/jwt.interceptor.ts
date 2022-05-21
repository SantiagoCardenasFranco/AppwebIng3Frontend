import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //const loginService:LoginService;


        let token = localStorage.getItem('token');
        /*const headers = new HttpHeaders({
            'token': 
        })*/

        if(token) {
            
            request = request.clone({
                setHeaders: { Authorization: `${token}` }
            });
        }

        return next.handle(request);
    }
}