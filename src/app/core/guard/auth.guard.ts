import { Injectable, OnDestroy } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable()
export class AuthGuardService implements CanActivate, OnDestroy{

    private isLogin:boolean = false;
    private readonly destroy$ = new Subject<void>();

    constructor(private readonly LoginService: LoginService,private readonly router: Router) {
        this.LoginService.isLoggedIn$.pipe(takeUntil(this.destroy$)).subscribe(value => this.isLogin = value);
    }

    canActivate(): boolean{
        if (!this.isLogin) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }

    public ngOnDestroy(): void {
      this.destroy$.next();
    }
}