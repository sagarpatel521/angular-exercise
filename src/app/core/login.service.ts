import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    isLoggedIn = false;
    login(): void{
        this.isLoggedIn = true;
    }

    logout(): void{
        this.isLoggedIn = false;
    }
}