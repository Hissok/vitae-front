import { Injectable } from '@angular/core';
import { SocialNetwork } from 'src/app/models/social-network';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  fontAwesomeDialogHidden = true;
  fontAwesomeDialogTarget?: SocialNetwork;

  constructor() { }

  openFontAwesomeDialog(target: SocialNetwork){
    this.fontAwesomeDialogHidden = false;
    this.fontAwesomeDialogTarget = target;
  }
}
