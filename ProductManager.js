class ProductManager {

    #id = 0

    constructor() {
        this.productos = [];
    }

    getProductos ()  {
        //console.log(this.productos);
        return this.productos;
    };

    getProductById = (id) => {
        const idx = this.productos.findIndex((product) => product.id === id);
        if (idx !== -1) {
          console.log(this.productos[idx]);
        } else {
          console.log("Not found");
        }
      };

    /**
     * Permite agregar un evento a la lista de eventos
	 * @param {string} title 
	 * @param {string} description 
	 * @param {number} price 
	 * @param {string} thumbnail 
	 * @param {number} code 
     * @param {number} stock
    */
    agregarProduct(title, description, price, thumbnail, code, stock){

        let filtro = this.productos.filter((product)=> product.code === code)
        if(filtro.lenght > 0){
            console.log("El codigo ya existe")
            return;
        }

    
        const product = {
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock,
        };
// AGREGAR ID AL PRODUCTO
        product.id = this.#getID();

    if(!title || !description || !price || !thumbnail || !code || !stock){
        console.log("No se permite dejar campos vacios")
        return;
    }
        this.productos.push(product)
    
    }

//incrementar ID

        #getID(){
            const oldID = this.#id
            this.#id++;
            return oldID;
        }

      
}

//pruebas

const productManager = new ProductManager();

productManager.agregarProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123",25)
productManager.agregarProduct("chau", "Francia", 40, "sin imagen", 5050, 20)
productManager.agregarProduct("Hola", "Argentina", 50, "sin imagen", 5050,20)
productManager.agregarProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123",25)


console.log(productManager.getProductos());
