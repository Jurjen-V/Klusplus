import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  firstFormGroup = new FormGroup({
    firstCtrl : new FormControl(''),
    secondCtrl : new FormControl(''),
    thirdCtrl : new FormControl(''),
    fourthCtrl : new FormControl(''),
    sixtCtrl : new FormControl(''),
  });
  secondFormGroup = new FormGroup({
    firstCtrl : new FormControl(''),
    secondCtrl : new FormControl(''),
    thirdCtrl : new FormControl(''),
  });
  isLinear = false;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(public _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
      sixtCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
    });
  }
}
