
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [{
  path: 'machine-info', component: DisplayInfoComponent,

},
{
  path: '', component: LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
