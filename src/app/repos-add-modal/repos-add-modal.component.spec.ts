import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposAddModalComponent } from './repos-add-modal.component';

describe('ReposAddModalComponent', () => {
  let component: ReposAddModalComponent;
  let fixture: ComponentFixture<ReposAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposAddModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
