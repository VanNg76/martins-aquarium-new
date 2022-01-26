const database = {
    fish: [
        {
            image: "images/gold-fish.jpg",
            species: "gold fish",
            length: "5 inches",
            name: "GOLD",
            location: "Atlantic Ocean",
            food: "smaller fish"
        },
        {
            image: "images/dragon-fish.jpg",
            species: "dragon fish",
            length: "10 inches",
            name: "DRAGON",
            location: "Pacific Ocean",
            food: "smaller fish"
        },
        {
            image: "images/orange-fish.jpg",
            species: "orange fish",
            length: "7 inches",
            name: "ORANGE",
            location: "Medit Ocean",
            food: "smaller fish"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}



