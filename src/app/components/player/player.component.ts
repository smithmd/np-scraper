import {Component, Input} from '@angular/core';
import {Player} from "../../classes/player";
import {Team} from "../../classes/team";

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent {
    @Input() public team!: Team;

    calculateIncome(player: Player): number {
        return (player.total_economy * 10) + (player.tech.banking.level * 150);
    }

    calculateShips(player: Player): string {
        return (player.total_industry * (5 + player.tech.manufacturing.level) / 24).toFixed(2);
    }
}
