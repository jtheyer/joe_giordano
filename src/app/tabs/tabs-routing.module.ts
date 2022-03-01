import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'buy',
        loadChildren: () => import('../buyTab/buyTab.module').then(m => m.BuyTabModule)
      },
      {
        path: 'sell',
        loadChildren: () => import('../sellTab/sellTab.module').then(m => m.SellTabModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../aboutTab/aboutTab.module').then(m => m.AboutTabModule)
      },
      {
        path: '',
        redirectTo: '/tabs/buy',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/buy',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
