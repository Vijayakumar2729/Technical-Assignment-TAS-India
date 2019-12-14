import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private router: Router,private breakpointObserver: BreakpointObserver,private userService: UserService) {}
machineName;
  ngOnInit(){
    if(!localStorage.getItem('user_data')){
      this.router.navigate(['/login'])
    }
  }

  patientLogout(){
    if(localStorage.getItem('user_data')){
      localStorage.removeItem('user_data')
      localStorage.removeItem('machine_data')

      this.router.navigate(['/login'])
    }
  }

}
