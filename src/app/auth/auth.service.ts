import { User } from './user.model';
import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;
    constructor(private router: Router) {}

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()  + 1000).toString() 
        }
        this.authSuccessfuly();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()  + 1000).toString() 
        }
        this.authSuccessfuly();
    }
    authSuccessfuly(){
        this.authChange.next(true);
        this.router.navigate(["/training"]);
    }
    logout(){
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(["/training"]);

    }

    getUser(){
        return {...this.user}
    }
    isAuth(){
        return this.user != null;
    }
}