import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CupcakesComponent} from './cupcakes/cupcakes.component';
import {OtherComponent} from "./other/other.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cupcakes', component: CupcakesComponent},
  {path: 'other', component: OtherComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
