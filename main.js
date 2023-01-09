var myData = [];

const myAction = () => {
  var product = new Object();
  product.productName = document.getElementById("productName").value;
  product.price = document.getElementById("price").value;
  product.category = document.getElementById("category").value;
  product.img = document.getElementById("img").value;
  myData.push(product);
  createTable();
  document.getElementById("myForm").reset();
};

const createTable = () => {
  var data = "";
  myData.map((item, index) => {
    data += `
            <tr>
                <td>${item.productName}</td>
                <td>${item.price}₪</td>
                <td>${item.category}</td>
                <td><img src="${item.img}" alt="${item.productName}"></td>                
                <td><button onclick="removeProduct(${index})">❌</button></td>
            </tr>
        `;
  });

  document.getElementById("userData").innerHTML = data;
};

const removeProduct = (index) => {
  myData.splice(index, 1);
  createTable();
};
