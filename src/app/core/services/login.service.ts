import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private readonly isLoggedIn = new BehaviorSubject<boolean>(false);
    public isLoggedIn$ = this.isLoggedIn.asObservable();

    public login(): Observable<void> {
        return of(this.isLoggedIn.next(true));
    }

    public logout(): Observable<void> {
        return of(this.isLoggedIn.next(false));
    }
}