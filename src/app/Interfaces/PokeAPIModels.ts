export interface MainListResponse {
    count: number,
    next: string,
    previous: string,
    results: PokemonInMainList[]
}

export interface PokemonInMainList {
    name: string,
    url: string
    id: string
};