import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListacampanasPage } from './listacampanas.page';

describe('ListacampanasPage', () => {
  let component: ListacampanasPage;
  let fixture: ComponentFixture<ListacampanasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacampanasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListacampanasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
