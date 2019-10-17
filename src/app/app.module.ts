import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DIYComponent } from './diy/diy.component';
import { RequestComponent } from './request/request.component';
import { ProfileComponent } from './profile/profile.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
const appRoutes: Routes = [
  { path: 'tickets', component: TicketsComponent },
  { path: 'contact',      component: DIYComponent},
  { path: 'home',      component: HomeComponent },
  { path: 'request', component: RequestComponent},
  { path: 'profile', component: ProfileComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    DIYComponent,
    RequestComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
