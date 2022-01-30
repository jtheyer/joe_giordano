import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SellTab } from './sellTab.page';

describe('SellTab', () => {
  let component: SellTab;
  let fixture: ComponentFixture<SellTab>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SellTab],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SellTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
