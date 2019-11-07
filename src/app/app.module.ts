import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DIYComponent } from './diy/diy.component';
import { RequestComponent } from './request/request.component';
import { RequestLoginComponent } from './requestlogin/requestLogin.component';
import { ProfileComponent } from './profile/profile.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatIconModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule, MatExpansionModule, MatTabsModule
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
  { path: 'requestlogin', component: RequestLoginComponent},
  { path: 'diy', component: DIYComponent},
  { path: '', component: HomeComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    DIYComponent,
    RequestComponent,
    ProfileComponent,
    HomeComponent,
    RequestLoginComponent
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
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
