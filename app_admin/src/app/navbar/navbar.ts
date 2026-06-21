import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  constructor(
    private authenticationService: Authentication,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  public onLogout(): void {
    this.authenticationService.logout();

    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}