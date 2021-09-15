import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagReplacerComponent } from './tag-replacer.component';

describe('TagReplacerComponent', () => {
  let component: TagReplacerComponent;
  let fixture: ComponentFixture<TagReplacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagReplacerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagReplacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
