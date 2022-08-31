import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterModule } from './character/character.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  //{ path: 'detail', component: CharacterDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CharacterModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }