import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnviarnotificacionPage } from './enviarnotificacion.page';

describe('EnviarnotificacionPage', () => {
  let component: EnviarnotificacionPage;
  let fixture: ComponentFixture<EnviarnotificacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarnotificacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnviarnotificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
