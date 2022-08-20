import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-listings',
  templateUrl: './character-listings.component.html',
  styleUrls: ['./character-listings.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: any
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void { //character-listingsが呼ばれた時に実行される関数
    const charactersObservable = this.characterService.getCharacters() //サービスで取得したcharactersオブジェクトを取得し代入する、サービス側にオブザーバブルの処理を実装する
    charactersObservable.subscribe(
      (data) => {
        data.sort(function (a: any, b: any) {
          return (a.id < b.id) ? -1 : 1;
        }); // id基準で並び替え
        this.characters = data
        console.log('got value ' + data)
        //debugger
      },
      (err) => { console.error('something wrong occur') + err },
      //() => { console.log('done') } //http通信では一回のサブスクライブに対して必ず一回のレスポンスがありそれで処理は終わる。そのためcompleteを書く意味はない。
      // // Observableオブジェクトの実験
      // const observable = new Observable(subscriber => { //関数をオブザーバブル化、この時点では関数は実行されない
      //   subscriber.next(1);
      //   setTimeout(() => {
      //     subscriber.next(2);
      //     subscriber.next(3);
      //     subscriber.next(4);
      //     subscriber.complete();//complete, errorによって実行は終了する、その後は実行されない
      //   }, 1000);
      // });
      // //debugger
      // console.log('just before subscribe');
      // //debugger
      // observable.subscribe({ //サブスクライブするとオブザーバブルオブジェクトが実行される、その出力を受け取りその結果に応じた処理を行う
      //   next(x) { console.log('got value ' + x); },
      //   error(err) { console.error('something wrong occurred: ' + err); },
      //   complete() { console.log('done'); }
      // });
      // console.log('just after subscribe'); //サブスクライブ関数は非同期関数なので、実行された後はその処理の完了を待たずにこの行が実行される
    )
  }

}

