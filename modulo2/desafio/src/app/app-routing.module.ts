import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesaSenadoresComponent } from './despesa-senadores/despesa-senadores.component';
import { SenadoresComponent } from './senadores/senadores.component';

const routes: Routes = [
  { path: 'senadores', component: SenadoresComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
  { path: 'senadores/:id/despesa', component: DespesaSenadoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
