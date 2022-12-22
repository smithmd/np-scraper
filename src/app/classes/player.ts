export interface Player {
    total_industry: number;
    regard:         number;
    total_science:  number;
    uid:            number;
    ai:             number;
    huid:           number;
    total_stars:    number;
    total_fleets:   number;
    total_strength: number;
    alias:          string;
    tech:           TechType;
    avatar:         number;
    conceded:       number;
    ready:          number;
    total_economy:  number;
    missed_turns:   number;
    karma_to_give:  number;
}

export interface TechType {
    scanning:      TechDetail;
    propulsion:    TechDetail;
    terraforming:  TechDetail;
    research:      TechDetail;
    weapons:       TechDetail;
    banking:       TechDetail;
    manufacturing: TechDetail;
}

export interface TechDetail {
    value: number;
    level: number;
}