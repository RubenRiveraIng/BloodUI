import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapacampanasPage } from './mapacampanas.page';

describe('MapacampanasPage', () => {
  let component: MapacampanasPage;
  let fixture: ComponentFixture<MapacampanasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapacampanasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapacampanasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
