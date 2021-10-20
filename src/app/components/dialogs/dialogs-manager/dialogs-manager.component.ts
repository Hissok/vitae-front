import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-dialogs-manager',
  templateUrl: './dialogs-manager.component.html',
  styleUrls: ['./dialogs-manager.component.scss']
})
export class DialogsManagerComponent implements OnInit {

  constructor(public service: DialogService) { }

  ngOnInit(): void {
  }

}
