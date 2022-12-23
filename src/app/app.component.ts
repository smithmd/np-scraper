import {Component} from '@angular/core';
import {NeptunesPrideService} from "./services/neptunes-pride.service";
import {Player} from './classes/player';
import {Team} from "./classes/team";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'np-scraper';
    players: Player[] = [];
    teams: Team[] = [];

    constructor(private npService: NeptunesPrideService) {
        this.getData();
    }

    getData() {
        this.npService.getData().subscribe(next => {
            Object.keys(next.scanning_data.players).forEach(key => {
                console.log(key);
                this.players.push(next.scanning_data.players[key]);
            });

            this.teams.push(new Team(this.players));
            this.teams.push(new Team([]));
        });
    }


    drop(event: CdkDragDrop<Player[]>) {

        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    calculateIncome(player: Player): number {
        return (player.total_economy * 10) + (player.tech.banking.level * 150);
    }
}
