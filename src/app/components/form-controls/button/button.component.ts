import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label = "Click";
  @Input() class = "";
  @Input() disabled = false;

  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
