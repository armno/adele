import { Router } from '@angular/router';
import { AdalService } from 'ng2-adal/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: any;

  constructor(
    private adalService: AdalService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.adalService.userInfo.isAuthenticated) {
      this.router.navigate(['/login']);
    }

    this.user = this.adalService.userInfo;
  }

}
