import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ReposAddModalComponent } from '../repos-add-modal/repos-add-modal.component';
import { ReposService } from '../repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.pug',
  styleUrls: ['./repos.component.scss'],
  providers: [DialogService],
})
export class ReposComponent implements OnInit {
  public data: any;
  public isLoading: boolean = true;

  constructor(private repos: ReposService,
              public dialogService: DialogService) { }

  ngOnInit() {
    this.reloding();
  }

  reloding = () => {
    this.isLoading = true;
    this.repos.getList()
      .then((response) => { this.data = response; })
      .catch((e) => console.error(e))
      .finally(() => {
        this.isLoading = false;
      });
  }

  add = () => {
    const ref = this.dialogService.open(ReposAddModalComponent, {
      header: 'Add new repo',
      width: '50%'
    });

    ref.onClose.subscribe((data) => {
      this.reloding();
    });
  }
}
