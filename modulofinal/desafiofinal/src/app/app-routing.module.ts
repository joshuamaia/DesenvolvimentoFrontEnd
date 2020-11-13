import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstaogtiComponent } from './instaogti/instaogti.component';

const routes: Routes = [{ path: '', component: InstaogtiComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
