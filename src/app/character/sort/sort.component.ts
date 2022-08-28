import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedSortStatus: string = "notSorted"

  @Output() //下記のイベントエミッターを親要素に公開する
  sortRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>()

  onSortRadioButtonChanged() { //イベントは関数
    this.sortRadioButtonChanged.emit(this.selectedSortStatus)
    console.log(this.selectedSortStatus)
  }
}