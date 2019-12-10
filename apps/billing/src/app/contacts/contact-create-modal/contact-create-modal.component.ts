import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators as _ } from '@angular/forms';
import { COINS, GREETINGS, Coins } from '@businx/data-models';

@Component({
  selector: 'businx-contact-create-modal',
  templateUrl: './contact-create-modal.component.html',
  styleUrls: ['./contact-create-modal.component.css']
})
export class ContactCreateModalComponent implements OnInit {

  form: FormGroup;

  coins: Coins [];
  greetings;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      accountType: ['', [ _.required ]],
      greet: ['', [ _.required ]],
      name: ['', [ _.required, _.minLength(5), _.maxLength(46) ]],
      company: ['', [ _.maxLength(2) ]],
      phone: ['', [ _.minLength(7), _.maxLength(14) ]],
      email: ['', [ _.email ]],
      nif: [''],
      coin: ['', [ _.required ]]
    });

    this.coins = COINS;
    this.greetings = GREETINGS;
  }

}
