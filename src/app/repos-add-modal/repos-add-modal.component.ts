import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReposService } from '../repos.service';

@Component({
  selector: 'app-repos-add-modal',
  templateUrl: './repos-add-modal.component.pug',
  styleUrls: ['./repos-add-modal.component.scss']
})
export class ReposAddModalComponent implements OnInit {
  public payload: any = {};
  public isPending: boolean = false;
  constructor(private repos: ReposService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() { }

  submit = () => {
    this.isPending = true;
    this.repos.addList(this.payload)
      .then((response) => { 
        console.log(response);
        this.ref.close(response);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        this.isPending = false;
      });
  }
}
