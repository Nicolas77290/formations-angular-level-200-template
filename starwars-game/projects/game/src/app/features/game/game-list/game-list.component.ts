import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { LoggerService } from '../../../shared/services/logger.service';
import { SearchService } from '../../../shared/services/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService,
              private searchService: SearchService,
              private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log('GameListComponent: ngOnInit');

    this.searchService.store.subscribe(item => this.searchItem = item);

    this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
