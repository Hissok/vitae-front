import { Component, Input, OnInit } from '@angular/core';
import { SocialNetwork } from 'src/app/models/social-network';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { FontAwesomeService } from './font-awesome.service';

@Component({
  selector: 'app-font-awesome-dialog',
  templateUrl: './font-awesome-dialog.component.html',
  styleUrls: ['./font-awesome-dialog.component.scss']
})
export class FontAwesomeDialogComponent implements OnInit {


  fas: string[] = [];
  fab: string[] = [];

  @Input() target?: SocialNetwork;

  constructor(private library: FontAwesomeService, private service: DialogService) { }

  ngOnInit(): void {
    this.filter('');
  }

  filter(search: string){
    this.fab = this.library.fab.filter(icon => icon.includes(search.toLocaleLowerCase()));
    this.fas = this.library.fas.filter(icon => icon.includes(search.toLocaleLowerCase()));
  }

  @Input() hidden = true;
  disapear = false;


  hide() {
    this.disapear = true;
    setTimeout(() => {
      this.service.fontAwesomeDialogHidden = true;
      this.disapear = false;
      this.filter('');
    }, 300)
  }

  show() {
    this.hidden = false;
    ;
  }

  apply(icon: string){
    if(this.target)
      this.target.icon = icon;
    this.hide();
  }

}
