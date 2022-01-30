import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutTab } from './aboutTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AboutTabRoutingModule } from './aboutTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AboutTab }]),
    AboutTabRoutingModule,
  ],
  declarations: [AboutTab]
})
export class AboutTabModule {}
