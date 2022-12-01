import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrutosAboutComponent } from './frutos-about/frutos-about.component';
import { FrutosSecosComponent } from './frutos-secos/frutos-secos.component';

const routes: Routes = [
{
  path:'',
  redirectTo: 'frutos',
  pathMatch:'full',
},

{
  path: 'frutos',
  component: FrutosSecosComponent,
},
{
  path: 'about',
  component: FrutosAboutComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
