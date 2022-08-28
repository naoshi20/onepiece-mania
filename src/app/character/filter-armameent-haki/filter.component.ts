import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-armameent-haki',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterArmameentHakiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedHakiStatus: string = "All"

  @Output() //下記のイベントエミッターを親要素に公開する
  filterArmameentHakiStatusChanged: EventEmitter<string> = new EventEmitter<string>()

  onfilterRadioButtonChanged() { //イベントは関数
    this.filterArmameentHakiStatusChanged.emit(this.selectedHakiStatus)
    console.log(this.selectedHakiStatus)
  }
}
