import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FirestoreDataServiceModule } from '@businx/firestore-data-service';

const comps = [
  NavComponent,
  SideNavComponent,
  FooterComponent
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    RouterModule,
    FirestoreDataServiceModule
  ]
})
export class CoreModule { }
