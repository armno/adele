import { SecretService } from './secret.service';
import { AdalService } from 'ng2-adal/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Authentication with Azure AD';

  constructor(
    private adalService: AdalService,
    private secretService: SecretService
  ) {

  }

  ngOnInit() {
    this.adalService.init(this.secretService.adalConfig);
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }
}
