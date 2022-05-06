import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { ChoisirPostulerComponent } from './view/choisir-postuler/choisir-postuler.component';
import { PostulerMissionComponent } from './view/postuler/postuler-mission/postuler-mission.component';
import { PostulerManifestationComponent } from './view/postuler/postuler-manifestation/postuler-manifestation.component';
import { AuthentificationComponent } from './view/postuler/authentification/authentification.component';
import { RegisterComponent } from './view/postuler/register/register.component';
import { ContactComponent } from './view/contact/contact.component';
import { AdminComponent } from './view/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";

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
    AdminComponent
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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
