const  cuentas = [
     {nombre: 'Brenda', saldo: 200 },
     {nombre: 'Gera', saldo: 290 },
     {nombre: 'Ceci', saldo: 67 }
  ];
  form.addEventListener("#user").keypress(e);
  onKeyPress = function (event) {
    var regex = new RegExp(/[^A-Z-0-9._\r]+$/i);

    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (regex.test(key)) {
        event.preventDefault();
        return;
    }
};
  $("#user").keypress(function (e) {
    if (e.keyCode == 13 || e.keyCode == 9) {
        setTimeout(function () {
            if ($("#user").val() != "") {
                $("#pass").focus();
            }
        });
    } else {
        return KeySoloNumerosPattern(e);
    }
});

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const userInput = event.target.user.value.toUpperCase()
    const CuentasListFilter = cuentas.filter((product) => {
      if (product.nombre.toUpperCase().includes(userInput)) {
        return product
      }
    })
  
    return buildProductList(CuentasListFilter)
  
  //   console.log(ProductListFilter)
  })



  const buildProductList = (cuentas1) => {
    //select the parent HTML tag
    
    var getParentElement = document.getElementById('cuentas')
  
    getParentElement.innerHTML = ''
  
    console.log(cuentas1)
  
    //Loop the product list array in order to generate the <section> </section>
    cuentas1.forEach((line) => {
      //creating the section cards
      const createSection = document.createElement('section')
      //adding a class
      createSection.classList.add('product') //<section class="product"> </section>
      //creating childs into the parent element section
    //   createSection.innerHTML = `
    //       <img src="${line.imagen}" alt="">
    //       <h2>${line.nombre}</h2>
    //       <h3>Price: <span>$ ${line.precio} </span> </h3>
    //       <p>Quantity: <span>${line.cantidad}</span> </p>
    //       <p>Description: <span>${line.descripcion}</span> </p>
    //       <p>Ml: <span>${line.ml} </span> </p>
    //       <button onclick="comprar('${line.nombre}', '${line.precio}', '${line.id}')">Buy </button>
          
    //       `
      //
      getParentElement.appendChild(createSection)
    })
    if( !cuentas1.length)
    {
        console.log("si")
        const createSection = document.createElement('div')  
        createSection.innerHTML = `No se encontro el usuario`
        getParentElement.appendChild(createSection)
    }
     
  }