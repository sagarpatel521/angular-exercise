import { Component, OnInit } from '@angular/core';
import {LoginService} from "../core/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'steelcoin-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(
      private loginService: LoginService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
      // Hint: What is missing here to avoid errors on the next page?

      this.router.navigate(['chart']).then(
        // Hint: what would you do here?
      );
  }
}
