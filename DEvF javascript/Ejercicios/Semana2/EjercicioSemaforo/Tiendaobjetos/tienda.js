const productList = [
    {
      id: 1,
      nombre: 'Suero de leche',
      precio: 10,
      cantidad: 10,
      descripcion: 'Suero de leche',
      imagen: 'https://via.placeholder.com/200',
      ml: 100,
    },
    {
      id: 2,
      nombre: 'Suero de leche con avena',
      precio: 10,
      cantidad: 10,
      descripcion: 'Suero de leche',
      imagen: 'https://via.placeholder.com/200',
      ml: 100,
    },
    {
      id: 3,
      nombre: 'Jugo de Frutas',
      precio: 15,
      cantidad: 10,
      descripcion: 'Esto es un jugo de frutas',
      imagen: 'https://via.placeholder.com/200',
      ml: 100,
    },
    {
      id: 4,
      nombre: 'Suero de leche',
      precio: 10,
      cantidad: 10,
      descripcion: 'Suero de leche',
      imagen: 'https://via.placeholder.com/200',
      ml: 100,
    },
    {
      id: 5,
      nombre: 'Suero de leche',
      precio: 10,
      cantidad: 10,
      descripcion: 'Suero de leche',
      imagen: 'https://via.placeholder.com/200',
      ml: 100,
    },
    {
      id: 6,
      nombre: 'Suero de leche',
      precio: 10,
      cantidad: 10,
      descripcion: 'Suero de leche',
      imagen: 'https://via.placeholder.com/200',
      ml: 100,
    },
  ]
  let carritoCompras = {}
  let carritoTotal = 0
  const total = document.getElementById('total')
  const tableProducts = document.getElementById('tableProducts')
  const form = document.getElementById('form')
  const reset = document.getElementById('reset')
  
  reset.addEventListener('click', (e) => {
      buildProductList(productList)
  })
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchInput = event.target.search.value.toUpperCase()
    const ProductListFilter = productList.filter((product) => {
      if (product.nombre.toUpperCase().includes(searchInput)) {
        return product
      }
    })
  
    return buildProductList(ProductListFilter)
  
  //   console.log(ProductListFilter)
  })

  const searchproduct= (event)=>{
    console.log(event)
    const searchInput = event.target.value.toUpperCase()
    const ProductListFilter = productList.filter((product) => {
      if (product.nombre.toUpperCase().includes(searchInput)) {
        return product
      }
    })
  
    return buildProductList(ProductListFilter)
  }
  
  const comprar = (nombre, precio, id) => {
    // console.log(nombre,precio, id)
    alert(
      `Hola, gracias por comprar el producto ${nombre} por un precio de $ ${precio}`,
    )
  
    // El metodo hasOwnProperty() devuelve un booleano indicando si un objeto tiene una propiedad especificada.
    if (carritoCompras.hasOwnProperty(id)) {
      carritoCompras[id].cantidad++
    } else {
      carritoCompras[id] = { nombre, precio, id }
      carritoCompras[id].cantidad = 1
    }
  
    carritoTotal += parseInt(carritoCompras[id].precio)
    total.innerHTML = `Total: $ ${carritoTotal}`
  
    tableProducts.innerHTML = ''
  
    for (const key in carritoCompras) {
      const childElement = document.createElement('tr')
      childElement.innerHTML = `
              <td>${carritoCompras[key].nombre}</td>
              <td>${carritoCompras[key].precio}</td>
              <td>${carritoCompras[key].cantidad}</td>
          `
      tableProducts.appendChild(childElement)
    }
  }
  
  
  const buildProductList = (productList1) => {
    //select the parent HTML tag
    
    var getParentElement = document.getElementById('productList')
  
    getParentElement.innerHTML = ''
  
    console.log(productList1)
  
    //Loop the product list array in order to generate the <section> </section>
    productList1.forEach((line) => {
      //creating the section cards
      const createSection = document.createElement('section')
      //adding a class
      createSection.classList.add('product') //<section class="product"> </section>
      //creating childs into the parent element section
      createSection.innerHTML = `
          <img src="${line.imagen}" alt="">
          <h2>${line.nombre}</h2>
          <h3>Price: <span>$ ${line.precio} </span> </h3>
          <p>Quantity: <span>${line.cantidad}</span> </p>
          <p>Description: <span>${line.descripcion}</span> </p>
          <p>Ml: <span>${line.ml} </span> </p>
          <button onclick="comprar('${line.nombre}', '${line.precio}', '${line.id}')">Buy </button>
          
          `
      //
      getParentElement.appendChild(createSection)
    })
    if( !productList1.length)
    {
        console.log("si")
        const createSection = document.createElement('div')  
        createSection.innerHTML = `No se encontraron productos`
        getParentElement.appendChild(createSection)
    }
     
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    buildProductList(productList)
  })
  