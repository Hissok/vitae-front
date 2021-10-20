import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TextfieldComponent } from '../../form-controls/textfield/textfield.component';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {

  @ViewChild('usernameInput') usernameInput!: TextfieldComponent;

  loginFormGroup: FormGroup;

  hidden = true;
  disapear = false;

  constructor(fb: FormBuilder) {
    this.loginFormGroup = fb.group({
      username: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }

  hide() {
    this.disapear = true;
    setTimeout(() => {
      this.hidden = true;
      this.disapear = false;
    }, 300)
  }

  show() {
    this.loginFormGroup.reset();
    this.hidden = false;
    setTimeout(() => this.usernameInput.focus(), 1);
    ;
  }

  login(){
    console.log(this.loginFormGroup.value)
  }

}
