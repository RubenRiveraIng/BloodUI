import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearcampanaPage } from './crearcampana.page';

describe('CrearcampanaPage', () => {
  let component: CrearcampanaPage;
  let fixture: ComponentFixture<CrearcampanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcampanaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearcampanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
