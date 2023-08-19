const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];
  let categoryData = {};
  let catAbove50 = [];
  products.forEach((product)=>{
        if(!categoryData[product.category]){
            categoryData[product.category] = {sum:0,count:0}
        }
       
  })
  let obj = {}
products.forEach((product)=>{
    categoryData[product.category].sum += product.price;
       categoryData[product.category].count += 1;
       
       let avgAbove50 = categoryData[product.category].sum / categoryData[product.category].count ;
       if(avgAbove50 > 50 && !catAbove50.includes(product.category)){
        obj[product.category] = avgAbove50;
       }
})
  console.log(obj)