import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //this.character = this.CharacterService.getCharacterById(params.get("characterId")!)
      const characterObservable = this.characterService.getCharacterById(params.get("characterId")!)
      characterObservable.subscribe(
        (data) => {
          data.birthday = data.birthday.split("-")[0].replace("0", "") + "月" + data.birthday.split("-")[1].replace("0", "") + "日"
          //data.cv = data.cv.replace("、", "<br/>")
          this.character = data
        },
        (err) => { }
      )
    })
  }

}