import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { HapusDataComponent } from './hapus-data/hapus-data.component';
import { TambahDataComponent } from './tambah-data/tambah-data.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionComponent},
  {path:"tambah-data",component:TambahDataComponent},
  {path:"edit-data",component:EditDataComponent},
  {path:"hapus-data",component:HapusDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
