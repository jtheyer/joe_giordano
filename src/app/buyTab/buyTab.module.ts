import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuyTab } from './buyTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BuyTabRoutingModule } from './buyTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BuyTabRoutingModule
  ],
  declarations: [BuyTab]
})
export class BuyTabModule {}
