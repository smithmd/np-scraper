import {Component, Input} from '@angular/core';
import {Player} from "../../classes/player";

@Component({
    selector: 'app-math',
    templateUrl: './math.component.html',
    styleUrls: ['./math.component.css']
})
export class MathComponent {
    @Input() public teamSize!: number;
    @Input() public players!: Player[];

    get total_science(): number {
        if (this.players && this.players.length) {
            return this.players.reduce((prev: number, current: Player) => {
                return prev + current.total_science;
            }, 0);
        }

        return 0;
    }

    get total_industry(): number {
        if (this.players && this.players.length) {
            return this.players.reduce((prev: number, current: Player) => {
                return prev + current.total_industry;
            }, 0);
        }

        return 0;
    }

    get total_economy(): number {
        if (this.players && this.players.length) {
            return this.players.reduce((prev: number, current: Player) => {
                return prev + current.total_economy;
            }, 0);
        }

        return 0;
    }

    get total_stars(): number {
        if (this.players && this.players.length) {
            return this.players.reduce((prev: number, current: Player) => {
                return prev + current.total_stars;
            }, 0);
        }

        return 0;
    }

    get total_ships(): number {
        if (this.players && this.players.length) {
            return this.players.reduce((prev: number, current: Player) => {
                return prev + current.total_strength;
            }, 0);
        }

        return 0;
    }

    get total_carriers(): number {
        if (this.players && this.players.length) {
            return this.players.reduce((prev: number, current: Player) => {
                return prev + current.total_fleets;
            }, 0);
        }

        return 0;
    }
}
