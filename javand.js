const currentYear = new Date().getFullYear();

const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Programavimas linksmai",
                "ISBN": "IT-12345",
                "publishing_year": 2024,
                "pages": 250,
                "quantity": 12,
                "price": 25
            },
            {
                "title": "Kompiuteriai ir as",
                "ISBN": "IT-12346",
                "publishing_year": 2020,
                "pages": 100,
                "quantity": 5,
                "price": 5
            },
            {
                "title": "Javascript nelinksmai",
                "ISBN": "IT-12347",
                "publishing_year": 2021,
                "pages": 101,
                "quantity": 10,
                "price": 6
            },
            {
                "title": "Html",
                "ISBN": "IT-12348",
                "publishing_year": 2023,
                "pages": 96,
                "quantity": 3,
                "price": 2
            },
            {
                "title": "Css",
                "ISBN": "IT-12349",
                "publishing_year": 2024,
                "pages": 70,
                "quantity": 8,
                "price": 25
            }
        ]
    },
    {
        "category": "Fantastika",
        "books": [
            {
                "title": "The Last Jedi",
                "ISBN": "FAN-11111",
                "publishing_year": 2024,
                "pages": 900,
                "quantity": 1,
                "price": 50
            },
            {
                "title": "Bullet train",
                "ISBN": "FAN-22222",
                "publishing_year": 2019,
                "pages": 250,
                "quantity": 3,
                "price": 30
            },
            {
                "title": "The Hobbit",
                "ISBN": "FAN-33333",
                "publishing_year": 1937,
                "pages": 800,
                "quantity": 15,
                "price": 50
            },
            {
                "title": "Iron man",
                "ISBN": "FAN-44444",
                "publishing_year": 2004,
                "pages": 200,
                "quantity": 5,
                "price": 10
            },
            {
                "title": "Not iron man",
                "ISBN": "FAN-55555",
                "publishing_year": 2005,
                "pages": 300,
                "quantity": 6,
                "price": 90
            }
        ]
    },
    {
        "category": "Historical Fiction",
        "books": [
            {
                "title": "Not world war 1",
                "ISBN": "HF-11111",
                "publishing_year": 2021,
                "pages": 111,
                "quantity": 7,
                "price": 22
            },
            {
                "title": "Not world war 2",
                "ISBN": "HF-22222",
                "publishing_year": 2023,
                "pages": 50,
                "quantity": 2,
                "price": 40
            },
            {
                "title": "Not world war 3",
                "ISBN": "HF-33333",
                "publishing_year": 2024,
                "pages": 222,
                "quantity": 9,
                "price": 20
            },
            {
                "title": "Ex soldiers",
                "ISBN": "HF-44444",
                "publishing_year": 2001,
                "pages": 230,
                "quantity": 5,
                "price": 30
            },
            {
                "title": "War and Peace",
                "ISBN": "HF-55555",
                "publishing_year": 2010,
                "pages": 960,
                "quantity": 3,
                "price": 35
            }
        ]
    },
    {
        "category": "Science Fiction",
        "books": [
            {
                "title": "Neuralyzer",
                "ISBN": "SF-11111",
                "publishing_year": 1984,
                "pages": 90,
                "quantity": 3,
                "price": 25
            },
            {
                "title": "Stabilizer",
                "ISBN": "SF-22222",
                "publishing_year": 2024,
                "pages": 800,
                "quantity": 9,
                "price": 10
            },
            {
                "title": "Snow space",
                "ISBN": "SF-33333",
                "publishing_year": 1999,
                "pages": 300,
                "quantity": 3,
                "price": 9
            },
            {
                "title": "Borderlands",
                "ISBN": "SF-44444",
                "publishing_year": 1988,
                "pages": 88,
                "quantity": 8,
                "price": 88
            },
            {
                "title": "Borderlands 2",
                "ISBN": "SF-55555",
                "publishing_year": 2021,
                "pages": 210,
                "quantity": 12,
                "price": 15
            }
        ]
    },
    {
        "category": "Mystery & Thriller",
        "books": [
            {
                "title": "Goodbye",
                "ISBN": "MT-11111",
                "publishing_year": 2012,
                "pages": 500,
                "quantity": 5,
                "price": 6
            },
            {
                "title": "Hello",
                "ISBN": "MT-22222",
                "publishing_year": 2013,
                "pages": 501,
                "quantity": 3,
                "price": 41
            },
            {
                "title": "Da Vinci dough",
                "ISBN": "MT-33333",
                "publishing_year": 1569,
                "pages": 200,
                "quantity": 8,
                "price": 18
            },
            {
                "title": "Where are you now?",
                "ISBN": "MT-66666",
                "publishing_year": 2006,
                "pages": 666,
                "quantity": 6,
                "price": 66
            },
            {
                "title": "Blind people",
                "ISBN": "MT-44444",
                "publishing_year": 2024,
                "pages": 444,
                "quantity": 10,
                "price": 44
            }
        ]
    }
];

// function listAndIdentify() {
//     for (let category of inventory) {
//         console.log("Category:" + category.category);

//       for (let book of category.books) {
//            let isNewBook = "";

//             if (book.publishing_year === currentYear) {
//                 isNewBook = "(New book)";
//             }

//             console.log("-" + book.title + ", ISBN: " + book.ISBN + ", Year" + book.publishing_year + isNewBook + ", Pages:" + book.pages + ", Quantity:" + book.quantity + ", Prie: " + book.price + " EUR");
//         }
//     }
// }

// listAndIdentify()

// function calculateTotal() {
//     let overallTotalValue = 0;

//     for (let category of inventory) {
//         let = categoryTotalValue = 0;

//         for (let book of category.books) {
//             const bookTotalValue = book.price * book.quantity;
//             categoryTotalValue += bookTotalValue;
//         }

//         console.log(`Total value for ${category.category}: ${categoryTotalValue} EUR`);
//         overallTotalValue += categoryTotalValue;
//     }

//     console.log (`Overall inventory value: ${overallTotalValue} EUR`)
// }

// calculateTotal()

// function filterProdcutsByCategory (products, category){
//     return products.filter(product=> product.category === category)
// }
// const filteredCategories = filterProdcutsByCategory(products, "Clothing")

// console.log(filteredCategories);

function sortBooks(category){
    const categoryObject = inventory.find(item => item.category === category);
    if (categoryObject){
        return categoryObject.books.sort((a,b) => {
            if (a.author > b.author) return 1;
            if (a.author < b.author) return -1;
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        });
    }
    return [];
}

console.log(sortBooks("Fantastika"));

function findMinPrice() {
    const prices = inventory.flatMap(category => category.books.map(book => book.price));
    return Math.min(...prices);
  }

console.log(findMinPrice())

  function findMaxPrice(){
    const prices = inventory.flatMap(category => category.books.map(book => book.price));
    return Math.max(...prices);
  }

console.log(findMaxPrice())

  function filterBooks(category, title = "", minPages = 0){
    const categoryObject = inventory.find(item => item.category === category);
    if (categoryObject){
        return categoryObject.books.filter(book => book.title.includes(title) && book.pages >= minPages)
    }
    return 0;
}

console.log(filterBooks("Fantastika", "The Last Jedi", 900));

