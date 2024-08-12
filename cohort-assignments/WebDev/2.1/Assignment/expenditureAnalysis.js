/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

    const categoryMap = new Map();

    transactions.forEach(transaction => {
        if(!categoryMap.has(transaction.category)) {
            categoryMap.set(transaction.category, transaction.price);
        } else {
            categoryMap.set(transaction.category, categoryMap.get(transaction.category) + transaction.price);
        }
    });

    const categoryArray = [];

    for(const [key, value] of categoryMap) {
        categoryArray.push({ category: key , totalSpent : value });
    }

    return categoryArray;
}

const transactions1 = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
];

const transactions2 = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];

const transactions3 = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656105600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656134400000,
        price: 30,
        category: 'Food',
        itemName: 'Sushi',
    },
];

console.log(calculateTotalSpentByCategory(transactions1));
console.log(calculateTotalSpentByCategory(transactions2));
console.log(calculateTotalSpentByCategory(transactions3));