import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellTab } from './sellTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SellTabRoutingModule } from './sellTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SellTabRoutingModule
  ],
  declarations: [SellTab]
})
export class SellTabModule {}
