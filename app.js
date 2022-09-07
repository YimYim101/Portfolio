let fs = new XMLHttpRequest()
fs.open("GET", "https://fakestoreapi.com/products")
fs.send()
fs.addEventListener('load', function () { 
    let chunk = fs.responseText
    let data = JSON.parse(chunk)
    let html = ""
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        html += `
        
        <div class="products">
<div>
  <img src="${data[i].image}" alt="">
</div>
<div class="details">
  <h3>${data[i].category}</h3>
  <p>${data[i].description}</p>
  <p>${data[i].id}</p>
  <p>${data[i].price}</p>
  <p>${data[i].rating}</p>
  <p>${data[i].title}</p>
  
</div>
    </div>
        
        `;
        
    }
    document.querySelector('.container').innerHTML = html
})