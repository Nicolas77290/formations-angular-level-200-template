import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list/game-list.component';
import { GameInfra } from './services/game.infra';
import { BoolToTextPipe } from '../../shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from '../../shared/directives/bool-to-color.directive';
import { GameTableComponent } from './game-table/game-table.component';
import { GameRowComponent } from './game-row/game-row.component';
import { FormsModule } from '@angular/forms';
import { GridModule } from '../../shared/components/grid/grid.module';
import { NewOneComponent } from './new-one/new-one.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: GameListComponent
  },
  {
    path: 'new-game',
    component: NewOneComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

@NgModule({
  declarations: [
    GameListComponent,
    BoolToTextPipe,
    BoolToColorDirective,
    GameTableComponent,
    GameRowComponent,
    NewOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    GameRoutingModule
  ],
  providers: [
  ],
  // exports: [
  //   GameListComponent
  // ]
})
export class GameModule { }



