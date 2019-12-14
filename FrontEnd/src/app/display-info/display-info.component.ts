import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service';
@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.scss']
})
export class DisplayInfoComponent implements OnInit {
  sensorsData: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.getAllDetails();
    if (!localStorage.getItem('user_data')) {
      this.router.navigate(['/login'])
    }
  }

  getAllDetails() {
    this.userService.getAllDetails().subscribe((details) => {
     this.sensorsData =  details;
     localStorage.setItem('machine_data', JSON.stringify(this.sensorsData.Equipment_info.Name));
      debugger
    },
      (error) => {
      });
  }

}
