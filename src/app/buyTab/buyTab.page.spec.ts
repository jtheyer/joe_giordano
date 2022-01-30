import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BuyTab } from './buyTab.page';

describe('BuyTab', () => {
  let component: BuyTab;
  let fixture: ComponentFixture<BuyTab>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BuyTab],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
