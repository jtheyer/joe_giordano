import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellPage } from './sellTab.page';

const routes: Routes = [
  {
    path: '',
    component: SellPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
