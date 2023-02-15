var products;
fetch('https://reqres.in/api/products')
.then(response => response.json())
.then(json =>{ products=json.data;
loopData(products);
document.getElementById('searchid').addEventListener('keyup',()=>{
    var ele=document.getElementById('searchid').value;
    console.log(ele);
    var data2=products.filter(value=>{
        return value.name.indexOf(ele) >-1;
    })
    loopData(data2);

})
})

function loopData(data){
    var elements=data.map((value)=>{
        return  `<tr>
        <td>${value.name}</td>
        <td>${value.year}</td>
        <td>${value.color}</td>
        <td>${value.pantone_value}</td>
        </tr>`
    
    })
    document.getElementById('container1').innerHTML=elements;
    console.log(elements);
}

// var products;
// fetch('https://reqres.in/api/products')
// .then(response => response.json())
// .then(json =>  {
// products=json.data;
// console.log(products);
// var elements= products.map((value,index)  => {
//   return  `<tr>
//       <td>${value.name}</td>
//       <td>${value.year}</td>
//       <td>${value.color}</td>
//       <td>${value.pantone_value}</td>
//       </tr>`
// });

// document.getElementById('container1').innerHTML=elements;
// })