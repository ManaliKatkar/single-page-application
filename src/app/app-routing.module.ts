import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_LEVEL_CONSTANTS} from './shared'
import {CartComponent, MenuComponent} from './components'

const routes: Routes = [
  { path: APP_LEVEL_CONSTANTS.CART_COMPONENT, component: CartComponent }
  ,
  { path: APP_LEVEL_CONSTANTS.LIST_COMPONENT, component: MenuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
