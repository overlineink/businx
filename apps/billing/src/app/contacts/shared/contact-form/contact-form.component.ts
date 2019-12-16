import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators as _ } from '@angular/forms';
import { COINS, GREETINGS, Coins, Contacts } from '@businx/data-models';
@Component({
  selector: 'businx-contact-form',
  templateUrl: './contact-form.component.html',
  styles: []
})
export class ContactFormComponent implements OnInit {

  @Input() type: string;
  @Input() incoming?: Contacts;
  
  form: FormGroup;

  coins: Coins [];
  greetings;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = !this.incoming
    ? this.fb.group({
      accountType: ['' , [ _.required ]],
      greet: ['', [ _.required ]],
      name: ['', [ _.required, _.minLength(5), _.maxLength(46) ]],
      company: ['', [ _.minLength(2) ]],
      phone: ['', [ _.minLength(7), _.maxLength(14) ]],
      email: ['', [ _.email ]],
      nif: [''],
      coin: ['', [ _.required ]]
    })
    : this.fb.group({
      accountType: [this.incoming.accountType , [ _.required ]],
      greet: [this.incoming.greet, [ _.required ]],
      name: [this.incoming.name, [ _.required, _.minLength(5), _.maxLength(46) ]],
      company: [this.incoming.company, [ _.minLength(2) ]],
      phone: [this.incoming.phone, [ _.minLength(7), _.maxLength(14) ]],
      email: [this.incoming.email, [ _.email ]],
      nif: [this.incoming.nif],
      coin: [this.incoming.coin, [ _.required ]]
    });

    this.coins = COINS;
    this.greetings = GREETINGS;
  }

}