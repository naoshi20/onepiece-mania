import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterModule } from './character/character.module';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  //{ path: 'detail', component: CharacterDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CharacterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }