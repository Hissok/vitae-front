import { Component, Input, OnInit } from '@angular/core';
import { SocialNetwork } from 'src/app/models/social-network';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {

  constructor(private service: DialogService) {
  }

  @Input() data: SocialNetwork = {id: 0, link: "", icon: ""};
  link: string = '';

  ngOnInit(): void {
    // Si le lien passé en paramètre est relatif, on le transforme en lien absolu
    this.link =  this.isAbsoluteUrl(this.data.link) ? this.data.link : "http://"+this.data.link;
  }

  editIcon(){
    this.service.openFontAwesomeDialog(this.data)
  }

  // Vérifie que l'url passé en paramètre est une URL asbolue (préfixée par http:// ou https://)
  private isAbsoluteUrl(url: string){
    return url && url.length >= 7 && url.substr(0, 7) === "http://" || url.length >= 8 && url.substr(0, 8) === "https://";
  }

}
