export default function DishesData() {
    const dishes = 
    [
        {
            parentClass: 'main-dish',
            title: 'Primeiro, o seu prato',
            dishDetais: 
            [
                {
                    dishClass: 'main',
                    dishImg: 'assets/main-dish-1.jpeg',
                    dishAlt: "Frango à milanesa",
                    dishTitle: 'Frango à milanesa',
                    dishDescription: '2 frangos, arroz, feijão e farofa.',
                    dishPrice: '19,90'
                },
                {
                    dishClass: 'main',
                    dishImg: 'assets/main-dish-2.jpeg',
                    dishAlt: "Peixe frito",
                    dishTitle: 'Peixe frito',
                    dishDescription: 'Acompanha arroz e pirão de peixe.',
                    dishPrice: '23,50'
                },
                {
                    dishClass: 'main',
                    dishImg: 'assets/main-dish-3.jpeg',
                    dishAlt: "Almôndegas",
                    dishTitle: 'Almôndegas',
                    dishDescription: 'Acompanha arroz, feijão e salada.',
                    dishPrice: '16,90'
                },
                {
                    dishClass: 'main',
                    dishImg: 'assets/main-dish-4.jpeg',
                    dishAlt: "Panqueca de carne",
                    dishTitle: 'Panqueca',
                    dishDescription: 'Acompanha arroz, feijão e salada.',
                    dishPrice: '21,00'
                }
            ]
        },
        {
            parentClass: 'drink',
            title: 'Agora, sua bebida',
            dishDetais: 
            [
                {
                    dishClass: 'drink',
                    dishImg: 'assets/drink-1.png',
                    dishAlt: "Coca lata",
                    dishTitle: 'Coca lata',
                    dishDescription: 'Lata 350 ml',
                    dishPrice: '6,00'
                },
                {
                    dishClass: 'drink',
                    dishImg: 'assets/drink-2.png',
                    dishAlt: "Coca garrafa",
                    dishTitle: 'Coca garrafa',
                    dishDescription: 'Garraga 1,5L',
                    dishPrice: '12,50'
                },
                {
                    dishClass: 'drink',
                    dishImg: 'assets/drink-3.png',
                    dishAlt: "Água",
                    dishTitle: 'Água',
                    dishDescription: 'Garraga 500ml',
                    dishPrice: '3,00'
                },
                {
                    dishClass: 'drink',
                    dishImg: 'assets/drink-4.png',
                    dishAlt: "Pureza lata",
                    dishTitle: 'Pureza lata',
                    dishDescription: 'Lata 350 ml',
                    dishPrice: '4,50'
                }
            ]
        },
        {
            parentClass: 'desert',
            title: 'Por fim, sua sobremesa',
            dishDetais: 
            [
                {
                    dishClass: 'desert',
                    dishImg: 'assets/desert-1.png',
                    dishAlt: "Pão de mel",
                    dishTitle: 'Pão de mel',
                    dishDescription: '5 unidades',
                    dishPrice: '4,50'
                },
                {
                    dishClass: 'desert',
                    dishImg: 'assets/desert-2.png',
                    dishAlt: "Cookies",
                    dishTitle: 'Cookies',
                    dishDescription: '5 unidades',
                    dishPrice: '5,00'
                },
                {
                    dishClass: 'desert',
                    dishImg: 'assets/desert-3.png',
                    dishAlt: "Alfajor",
                    dishTitle: 'Alfajor',
                    dishDescription: '1 unidade',
                    dishPrice: '4,50'
                },
                {
                    dishClass: 'desert',
                    dishImg: 'assets/desert-4.jpeg',
                    dishAlt: "Bordinhas",
                    dishTitle: 'Bordinhas',
                    dishDescription: '300g',
                    dishPrice: '2,50'
                }
            ]
        },
    ]

    return dishes
} 
