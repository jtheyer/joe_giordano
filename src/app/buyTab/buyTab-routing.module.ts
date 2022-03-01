import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyTab } from './buyTab.page';

const routes: Routes = [
  {
    path: '',
    component: BuyTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyTabRoutingModule {}
