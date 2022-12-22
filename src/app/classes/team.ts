import {Player} from "./player";

export class Team {
    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }
}