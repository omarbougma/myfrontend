import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';


import {AdminComponent} from './view/admin/admin.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";
import {HeaderComponent} from "./view/header/header.component";
import {FooterComponent} from "./view/footer/footer.component";
import {HomeComponent} from "./view/home/home.component";
import {RegisterComponent} from "./view/postuler/register/register.component";
import {ContactComponent} from "./view/contact/contact.component";
import {PostulerMissionComponent} from "./view/postuler/postuler-mission/postuler-mission.component";
import {ChoisirPostulerComponent} from "./view/choisir-postuler/choisir-postuler.component";
import {PostulerManifestationComponent} from "./view/postuler/postuler-manifestation/postuler-manifestation.component";
import {AuthentificationComponent} from "./view/postuler/authentification/authentification.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {CalendarModule} from "primeng/calendar";
import { InformationSurDemandeurComponent } from './view/postuler/information-sur-demandeur/information-sur-demandeur.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChoisirPostulerComponent,
    PostulerMissionComponent,
    PostulerManifestationComponent,
    AuthentificationComponent,
    RegisterComponent,
    ContactComponent,
    AdminComponent,
    InformationSurDemandeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    FontAwesomeModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
