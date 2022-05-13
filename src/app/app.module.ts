import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';


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
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {CalendarModule} from "primeng/calendar";
import { InformationSurDemandeurComponent } from './view/postuler/information-sur-demandeur/information-sur-demandeur.component';
import { HeaderaComponent } from './view/admin/headera/headera.component';
import {AdminComponent} from "./view/admin/admin.component";
import { SidenavComponent } from './view/admin/sidenav/sidenav.component';
import { DashboardComponent } from './view/admin/dashboard/dashboard.component';
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {DemandeursComponent} from "./view/admin/demandeurs/demandeurs.component";
import {LoginComponent} from "./view/postuler/login/login.component";
import {AuthentificationComponent} from "./view/admin/authentification/authentification.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChoisirPostulerComponent,
    PostulerMissionComponent,
    PostulerManifestationComponent,
    RegisterComponent,
    ContactComponent,
    InformationSurDemandeurComponent,
    AdminComponent,
    HeaderaComponent,
    SidenavComponent,
    DashboardComponent,
    DemandeursComponent,
    LoginComponent,
    AuthentificationComponent
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
    CalendarModule,
    TableModule,
    DropdownModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
