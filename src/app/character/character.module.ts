import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-listings/character-listings.component';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { CharacterService } from './shared/character.service';

const routes: Routes = [
        {
                path: "characters", component: CharacterComponent,
                children: [
                        { path: '', component: CharacterListComponent },
                        { path: ':characterId', component: CharacterDetailComponent },
                ]
        }
];

@NgModule({
        declarations: [
                CharacterComponent,
                CharacterDetailComponent,
                CharacterListComponent
        ],
        imports: [
                RouterModule.forChild(routes),
                CommonModule
        ],
        providers: [
                CharacterService //characterモジュールに対応するバックエンド通信を代行するサービスを定義
        ],
        bootstrap: []
})
export class CharacterModule { }