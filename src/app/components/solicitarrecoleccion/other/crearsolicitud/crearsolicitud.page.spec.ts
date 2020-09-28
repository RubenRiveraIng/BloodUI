import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearsolicitudPage } from './crearsolicitud.page';

describe('CrearsolicitudPage', () => {
  let component: CrearsolicitudPage;
  let fixture: ComponentFixture<CrearsolicitudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearsolicitudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearsolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
