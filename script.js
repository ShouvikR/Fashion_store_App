const totalInventory = [
  {
    title: "Bowie Tee",
    url: "images/bowie.jpg",
    price: 19.99,
    stock: 4,
  },
  {
    title: "Don't Know Tee",
    url: "images/dontevenknow.jpg",
    price: 22.5,
    stock: 8,
  },
  {
    title: "Doughnut Jeans Jacket",
    url: "images/doughnut.jpg",
    price: 59.0,
    stock: 5,
  },
  {
    title: "Journey Tee",
    url: "images/journey.jpg",
    price: 22.99,
    stock: 6,
  },
  {
    title: "Skeleton Jean Jacket",
    url: "images/someurl.jpg",
    price: 30.0,
    stock: 0,
  },
  {
    title: "Skeleton Hand Tee",
    url: "images/skeleton.jpg",
    price: 30.0,
    stock: 10,
  },
  {
    title: "Juno Hoodie",
    price: 50.0,
    stock: 4,
  },
];


const app = {};

app.init = function() {

    app.inventoryCheck();
    app.changingCurrency();

};

app.currencies = {
  usd: {
    exchange: 1,
    symbol: `$`,
    displayName: `USD`,
    altText: `The US flag`,
    flag: `images/USD-flag.png`,
  },
  cad: {
    exchange: 1.28,
    symbol: `$`,
    displayName: `CAD`,
    altText: `The Canadian flag`,
    flag: `images/CAD-flag.png`,
  },
  gbp: {
    exchange: 0.76,
    symbol: `£`,
    displayName: `GBP`,
    altText: `The UK flag`,
    flag: `images/GBP-flag.png`,
  },
};

app.inventoryCheck = function() {

    app.currentInventory = totalInventory.filter((item) => {
        return item.stock > 0 && item.url !== undefined;
    })

    app.displayItems(app.currencies.cad);

}

app.displayItems = function(currencyChanger) {

    const inventory = document.querySelector('.inventory');

    inventory.innerHTML = '';

    app.currentInventory.forEach((product) => {
        const list = document.createElement('li');

        list.innerHTML = `<h2>${product.title}</h2>
        <img src = ${product.url} alt = "The model wearing a ${product.title}">
        <p> ${currencyChanger.symbol} ${(
          product.price * currencyChanger.exchange
        ).toFixed(2)}</p>
        
        `;

        inventory.appendChild(list);

    });

}

app.changingCurrency = function() {

    const buttons = document.querySelectorAll('button');

    const flag = document.querySelector('#flag');

    const currency = document.querySelector('#currency');

    buttons.forEach((individualButton) => {
        individualButton.addEventListener('click', function() {
            const selectedButton = this.id;

            app.displayItems(app.currencies[selectedButton]);

            flag.src = app.currencies[selectedButton].flag;

            flag.alt = app.currencies[selectedButton].altText;

            currency.textContent = app.currencies[selectedButton].displayName;


        });
    });


}


app.init();