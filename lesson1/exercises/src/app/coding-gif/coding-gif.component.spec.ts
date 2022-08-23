import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingGifComponent } from './coding-gif.component';

describe('CodingGifComponent', () => {
  let component: CodingGifComponent;
  let fixture: ComponentFixture<CodingGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
