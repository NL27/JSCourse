const url = require('url');

// url.parse()
const myUrl = url.parse('https://www.google.com:8080/search?q=nodejs&hl=en', true);

// url.format()
const formattedUrl = url.format({
    protocol: 'https',
    hostname: 'www.google.com',
    port: '8080',
    pathname: '/search',
    query: {
        q: 'nodejs',
        hl: 'en'
    },
});
console.log(formattedUrl); // will give you the formatted URL

// querryString()
const myQs = "year=2025&month=12";
const q = querystring.parse(myQs);
console.log(q.month); // will give you the querry string

// querystring.stringify()
const myQs2 = querystring.stringify({
    year: 2025,
    month: 12,
});

}
const q2 = querystring.stringify({