import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./view/home/home.component";
import {HeaderComponent} from "./view/header/header.component";
import {RegisterComponent} from "./view/postuler/register/register.component";
import {FooterComponent} from "./view/footer/footer.component";
import {ContactComponent} from "./view/contact/contact.component";
import {PostulerManifestationComponent} from "./view/postuler/postuler-manifestation/postuler-manifestation.component";
import {ChoisirPostulerComponent} from "./view/choisir-postuler/choisir-postuler.component";

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'postulerm', component: PostulerManifestationComponent},
  {path: 'choisir-postuler', component: ChoisirPostulerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
