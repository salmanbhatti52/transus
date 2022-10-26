import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileaftersigupPage } from './profileaftersigup.page';

describe('ProfileaftersigupPage', () => {
  let component: ProfileaftersigupPage;
  let fixture: ComponentFixture<ProfileaftersigupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileaftersigupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileaftersigupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
