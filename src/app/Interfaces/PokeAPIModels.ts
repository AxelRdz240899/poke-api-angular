export interface MainListResponse {
    count: number,
    next: string,
    previous: string,
    results: Pokemon[]
}

export interface Pokemon {
    name: string,
    url: string
    id: string
};

export interface PokemonDetail {
    name: string,
    abilities: Array<
        {
            ability: {
                name: string,
                url: string
            }
        }
    >,
    game_indices: Array<
        {
            game_index: number,
            version: {
                name: string,
                url: string
            }
        }
    >,
    sprites: {
        back_default: string,
        back_female: string,
        back_shiny: string,
        back_shiny_female: string,
        front_default: string,
        front_female: string,
        front_shiny: string,
        front_shiny_female: string
    }
}