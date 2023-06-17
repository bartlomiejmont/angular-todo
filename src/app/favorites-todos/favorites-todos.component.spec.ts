import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesTodosComponent } from './favorites-todos.component';

describe('FavoritesTodosComponent', () => {
  let component: FavoritesTodosComponent;
  let fixture: ComponentFixture<FavoritesTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesTodosComponent]
    });
    fixture = TestBed.createComponent(FavoritesTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
