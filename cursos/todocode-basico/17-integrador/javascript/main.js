import Pokemon from "./Pokemon.js";
let pokemones = [
    new Pokemon("Pikachu", "Electrico", 60, 85, 30, 90),
    new Pokemon("Charizard", "Fuego", 78, 84, 78, 100),
    new Pokemon("Bulbasaur", "Planta", 45, 49, 49, 45),
    new Pokemon("Squirtle", "Agua", 44, 48, 65, 43),
    new Pokemon("Eevee", "Normal", 55, 55, 50, 55),
    new Pokemon("Jolteon", "Electrico", 65, 65, 60, 110),
    new Pokemon("Vaporeon", "Agua", 65, 60, 95, 65),
    new Pokemon("Flareon", "Fuego", 65, 130, 60, 65)
]

pokemones.forEach(pokemon => {
    pokemon.mostrar_info()
    pokemon.validar_habilidades()
});