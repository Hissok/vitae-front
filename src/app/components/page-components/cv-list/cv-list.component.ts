import { Component, OnInit } from '@angular/core';
import { CVListed } from 'src/app/models/cv_listed';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss']
})
export class CvListComponent implements OnInit {


  cvs: CVListed[] = [{id: 0, title: 'CV 1'}, {id: 1, title: 'CV 2'}];

  constructor() { }

  ngOnInit(): void {
  }

}
