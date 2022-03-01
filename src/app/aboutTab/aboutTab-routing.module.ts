import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTab } from './aboutTab.page';

const routes: Routes = [
  {
    path: '',
    component: AboutTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutTabRoutingModule {}
