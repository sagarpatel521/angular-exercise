import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  public isLoggedIn:boolean = false;
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly router: Router, private readonly loginService: LoginService) {}

  public ngOnInit():void {
    this.loginService.isLoggedIn$.pipe(takeUntil(this.destroy$)).subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  public loginOrLogout(isLoggedIn: boolean):void {
    if (isLoggedIn) {
      this.loginService.logout().pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.router.navigate(['/home']);
      });
    } else {
      this.loginService.login().pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.router.navigate(['/chart'])
      })
    }
  }

  public ngOnDestroy(): void {
      this.destroy$.next();
  }

}
