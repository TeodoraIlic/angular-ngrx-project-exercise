import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() colseSidenav = new EventEmitter<void>();
  isAuth: boolean;
  authSub: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSub = this.authService.authChange.subscribe( authStatus => {
      this.isAuth = authStatus;
    });
  }
  ngOnDestroy(){
    this.authSub.unsubscribe();
  }
  onClose(){
    this.colseSidenav.emit();
    
  }
  onLogout(){
    this.authService.logout();
    this.onClose()
  }

}
