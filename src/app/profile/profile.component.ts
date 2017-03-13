import { Router } from '@angular/router';
import { AdalService } from 'ng2-adal/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

  logout() {
    this.adalService.logOut();
  }

}
