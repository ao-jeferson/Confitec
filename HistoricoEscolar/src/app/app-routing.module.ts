import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCertificadoComponent } from './add-certificado/add-certificado.component';
import { EditCertificadoComponent } from './edit-certificado/edit-certificado.component';
import { HomeComponent } from './home/home.component';
import { ViewCertificadoComponent } from './view-certificado/view-certificado.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewCertificado/:certificadoId', component: ViewCertificadoComponent },
  { path: 'AddCertificado', component: AddCertificadoComponent },
  { path: 'EditCertificado/:certificadoId', component: EditCertificadoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
