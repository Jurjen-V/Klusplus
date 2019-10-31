import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-requestlogin',
  templateUrl: './requestLogin.component.html',
  styleUrls: ['./requestLogin.component.scss']
})
export class RequestLoginComponent implements OnInit {
  secondFormGroup = new FormGroup({
    firstCtrl : new FormControl(''),
    secondCtrl : new FormControl(''),
    thirdCtrl : new FormControl(''),
    fourthCtrl : new FormControl(''),
  });
  isLinear = false;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(public _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
    });
  }
}
