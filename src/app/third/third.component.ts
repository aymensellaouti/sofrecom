import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {I18nUpdateOpCode} from '@angular/core/src/render3/interfaces/i18n';

@Component({
  selector: 'sofrecom-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  @Input() name = 'sellaouti';
  @Input() firstname = 'aymen';
  @Output() sendDataToSon = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendInfosToParent() {
    this.sendDataToSon.emit(
      {
        name: this.name,
        firstname: this.firstname
      }
    );
  }

}
