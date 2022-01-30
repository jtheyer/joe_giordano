import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellTab } from './sellTab.page';

const routes: Routes = [
  {
    path: '',
    component: SellTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellTabRoutingModule {}
