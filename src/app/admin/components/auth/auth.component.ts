import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form = new FormGroup({});
  errorMessage: string | undefined;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.required])],
      password: ['', Validators.compose([
        Validators.required])],
    });
  }

}
