import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { GrowthCardComponent } from './growth-card/growth-card.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TableComponent } from './table/table.component';
import { AppStyles, StringManipulation } from './utils';
import { ApexLineComponent } from './apex-line/apex-line.component';
import { RelativeTimePipe } from './relative-time.pipe';

const components = [
  ApexLineComponent,
  TableComponent,
  PageTitleComponent,
  GrowthCardComponent,
  ContactCardComponent
];

const pipes = [
  RelativeTimePipe
]

const modules = [
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  NgApexchartsModule
];

@NgModule({
  declarations: [...components, ...pipes],
  exports: [...components, ...pipes, ...modules],
  imports: [
    CommonModule,
    modules
  ],
  providers: [ StringManipulation, AppStyles ]
})
export class SharedModule { }
