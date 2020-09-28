import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallecampanaPage } from './detallecampana.page';

describe('DetallecampanaPage', () => {
  let component: DetallecampanaPage;
  let fixture: ComponentFixture<DetallecampanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecampanaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallecampanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
