import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialsolicitudPage } from './historialsolicitud.page';

describe('HistorialsolicitudPage', () => {
  let component: HistorialsolicitudPage;
  let fixture: ComponentFixture<HistorialsolicitudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialsolicitudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialsolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
