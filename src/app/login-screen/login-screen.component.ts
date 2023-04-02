import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'steelcoin-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginScreenComponent {
}
