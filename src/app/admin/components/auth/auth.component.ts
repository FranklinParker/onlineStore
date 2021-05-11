import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../model/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form = new FormGroup({});
  errorMessage: string | undefined;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.required])],
      password: ['', Validators.compose([
        Validators.required])],
    });
  }

  login(): void {
    console.log('form', this.form.getRawValue());
    if (this.form.valid) {
      this.authService.authenticate(this.form.get('username')?.value,
        this.form.get('password')?.value)
        .subscribe((value) => {
          if (value){
            this.router.navigate([ 'admin']);
          } else{
            this.errorMessage = 'Authentication Failed';
          }
        },
          err =>  this.errorMessage = 'Authentication Failed: ' + err.message
        );
    } else {
      this.errorMessage = 'Please enter Credentials';

    }

  }
}
