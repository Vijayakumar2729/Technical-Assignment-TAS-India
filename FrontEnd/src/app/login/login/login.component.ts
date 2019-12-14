import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user-service';
import { UserData } from '../../../models/user-data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new UserData();
  constructor(private router: Router, private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    console.log(this.user);
  }
  Click() {
    this.router.navigate(['/machine-info'])
  }

  patientLogin() {
    if (this.validate()) {
      if (this.user.email && this.user.password) {
        this.userService.userLogin(this.user).subscribe((user) => {
          if (user) {
            localStorage.setItem('user_data', JSON.stringify(user));
            alert('Signed in Successfully');
            this.router.navigate(['/machine-info'])
          }
        }, (err: any) => {
          //alert(err);
        });
      }
    }

  }

  validate() {
    const errorlist = [];
    let formValid = true;
    const reg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (this.user.email === null || this.user.email === undefined || this.user.email === ''
      || this.user.email.trim().length === 0) {
      errorlist.push('Enter User Name <br/>');
      this.user.email = undefined;
      formValid = false;
    } else if (this.user.email) {
      if (reg.test(this.user.email) && (this.user.email || '').trim()) {
        formValid = true;
      } else {
        formValid = false;
        errorlist.push('Enter Valid Email<br/>');
      }
    }
    if (this.user.password === null || this.user.password === undefined || this.user.password === ''
      || this.user.password.trim().length === 0) {
      errorlist.push('Select Password<br/>');
      formValid = false;
    } else if (this.user.password) {
      const regularExpression = /^[A-Z]$/;
      const s = this.user.password;
      const numUpper = s.length - s.replace(/[A-Z]/g, '').length;


      if (this.user.password.length < 6) {
        formValid = false;
        errorlist.push('Password Must Contain Minimum 6 Letter<br/>');
      } else if (numUpper  >= 1) {
        formValid = true;
      } else {
        formValid = false;
        errorlist.push('Password Must Contain Minimum one Capital Letter');
      }
    }

    if (formValid) {
      return true;
    } else {
      let allerrors = '';
      for (let i = 0; i < errorlist.length; i++) {
        allerrors = allerrors + errorlist[i];
      }
      this.toastr.error(allerrors, ' ', { timeOut: 2000, enableHtml: true });
      return false;
    }

  }

}
