
d3.csv("/data/cities.csv").then(function(data) {
  console.log(data[0]);
});

d3.csv("/data/cities.csv").then(function(data) {
  data.forEach(function(d) {
    //converting string to int
    d.population = +d.population;
    d["land area"] = +d["land area"];
  });
  console.log(data[0]);
});

/*d3.csv("/data/cities.csv", function(d) {
  return {
    city : d.city,
    state : d.state,
    population : +d.population,
    land_area : +d["land area"]
  };
}).then(function(data) {
  console.log(data[0]);
});*/

d3.json("/data/employees.json").then(function(data) {
   console.log(data[0]);
});
  
var articles = [{
  "id": 1,
  "name": "vacuum cleaner",
  "weight": 9.9,
  "price": 89.9,
  "brand_id": 2
}, {
  "id": 2,
  "name": "washing machine",
  "weight": 540,
  "price": 230,
  "brand_id": 1
}, {
  "id": 3,
  "name": "hair dryer",
  "weight": 1.2,
  "price": 24.99,
  "brand_id": 2
}, {
  "id": 4,
  "name": "super fast laptop",
  "weight": 400,
  "price": 899.9,
  "brand_id": 3
}];

var brands = [{
  "id": 1,
  "name": "SuperKitchen"
}, {
  "id": 2,
  "name": "HomeSweetHome"
}];

//function using d3.js. modify existing array
/*articles.forEach(function(article) {
   var result = brands.filter(function(brand) {
     return brand.id === article.brand_id;     
   });
  delete article.brand_id;
  article.brand = (result[0] !== undefined) ? result[0].name : null;
});
console.log(articles);*/

// better performing javascript fucntion. creates new output
function join(lookupTable, mainTable, lookupKey, mainKey, select) {
  var l = lookupTable.length,
      m = mainTable.length,
      lookupIndex = [],
      output = [];
  for (var i = 0; i < l; i++) { // loop through l items
      var row = lookupTable[i];
      lookupIndex[row[lookupKey]] = row; // create an index for lookup table
  }
  for (var j = 0; j < m; j++) { // loop through m items
      var y = mainTable[j];
      var x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
      output.push(select(y, x)); // select only the columns you need
  }
  return output;
};

var result = join(brands, articles, "id", "brand_id", function(article, brand) {
  return {
      id: article.id,
      name: article.name,
      weight: article.weight,
      price: article.price,
      brand: (brand !== undefined) ? brand.name : null
  };
});
console.log(result);

// primise.all() to run many requests concurrently, 
// combining them after they have finished downloading using d3.merge()
/*Promise.all([
  d3.csv("/data/big_data_1.csv"),
  d3.csv("/data/big_data_2.csv"),
  d3.csv("/data/big_data_3.csv")
]).then(function(allData) {
  console.log(d3.merge(allData));
});*/

//using lodash
var dataset_1 = [{
  'type': 'boat',
  'model': 'Ocean Queen 2000'
}, {
  'type': 'car',
  'model': 'Ferrari'
}];
var dataset_2 = [{
  'price': 23202020,
  'weight': 5656.9
}, {
  'price': 59988,
  'weight': 1.9
}];

var result1 = _.merge(dataset_1, dataset_2);
console.log(result1);

var data1 = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

var minLand = d3.min(data1, function(d) {return d.land_area;});
console.log(minLand);

var maxLand = d3.max(data1, function(d) {return d.land_area;});
console.log(maxLand);
/*
d3.mean
d3.median
d3.deviation 
*/

var count = 0;
data1.forEach(function (d) {
 count +=1;
});

console.log(count);

console.log(data1.length);

//using lodash
var dataObject = {"name":"Carl", "age":"48", "salary":"12300"};
var copyOfData = _.clone(dataObject);
copyOfData.age = +copyOfData.age;
copyOfData.salary = +copyOfData.salary;
console.log(copyOfData);

var dataObject1 = {"name":"Saul", "stats":{"age":"55"}};
var shallowCopy = _.clone(dataObject1);
shallowCopy.stats.age = +shallowCopy.stats.age;
console.log(dataObject);


/*var smallData = data.map(function(d,i) {
  return {
    name: d.city.toUpperCase(),
    index: i + 1,
    rounded_area: Math.round(d.land_area)
  };
});*/

/*var large_land = data.filter(function (d) {
  return d.land_area > 200;
});

console.log(JSON.stringify(large_land));*/

//descending order
/*data.sort(function(a,b) {
   return b.population - a.population;
});
console.log(JSON.stringify(data));

var populations = data.map(function(d) {return d.population; });
console.log(populations);

populations.sort(d3.descending);
console.log(populations);*/

// will sort number ascending
var nums = [3,1,10,20];
console.log(nums.sort());

//chaining functions
/*var bigCities = data.filter(function(d) {
  return d.population > 50000;})
  .sort(function (a,b) { return a.population - b.population;})
  .map(function(d) {return d.city; });
console.log(bigCities)*/
//["boston", "seattle", "new york"]

var expenses = []
d3.csv("/data/expenses.csv", function(d) {
   return {
     name: d.name,
     amount: +d.amount,
     date: d.date
   };
}).then(function(data) {
  expenses = data;
});

console.log(expenses);

/*d3.csv("/data/cities.csv", function(d) {
  return {
    city : d.city,
    state : d.state,
    population : +d.population,
    land_area : +d["land area"]
  };
}).then(function(data) {
  console.log(data[0]);
});*/

/*d3.csv("/data/cities.csv").then(function(data) {
  data.forEach(function(d) {
    //converting string to int
    d.population = +d.population;
    d["land area"] = +d["land area"];
  });
  console.log(data[0]);
});*/
