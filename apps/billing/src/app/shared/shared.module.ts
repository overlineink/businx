import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ResumeCardComponent } from './resume-card/resume-card.component';

const comps = [
  TableComponent,
  PageTitleComponent,
  ResumeCardComponent
];

const mods = [
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: comps,
  exports: [comps, mods],
  imports: [
    CommonModule,
    mods
  ]
})
export class SharedModule { }
