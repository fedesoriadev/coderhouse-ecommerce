import { belongsTo, createServer, hasMany, Model } from "miragejs"

const mockApi = () => {
  createServer({
    models: {
      category: Model.extend({
        items: hasMany()
      }),
      item: Model.extend({
        category: belongsTo(),
      }),
    },
    
    routes() {
      this.namespace = "api"
      
      this.get("/categories", (schema, request) => {
        return schema.categories.all()
      })
      
      this.get("/categories/:id", (schema, request) => {
        let id = request.params.id
        
        return schema.categories.find(id)
      })
      
      this.get("/categories/:id/items", (schema, request) => {
        let category = schema.categories.find(request.params.id)
        
        return category.items
      })
      
      this.get("/items", (schema, request) => {
        return schema.items.all()
      })
      
      this.get("/items/:id", (schema, request) => {
        let id = request.params.id
        
        return schema.items.find(id)
      })
    },
    
    seeds(server) {
      server.create("category", { id: 1, name: "Granos Clásicos"})
      server.create("category", { id: 2, name: "Café Saborizados"})
      server.create("category", { id: 3, name: "Granos Especiales"})
      server.create("category", { id: 4, name: "Café Descafeinado"})
      
      server.create("item", { id: 1, categoryId: 1, title: 'Brasil Medium Roast', price: 1000, image: 'BRASIL-MEDIUM-ROAST.jpg', stock: 20, intensity: 'Suave', description: 'Un café muy dulce, con dejo de sabor a cítrico y floral. Acidez vivaz, un cuerpo sedoso y una complejidad de notas florales en el aroma.' })
      server.create("item", { id: 2, categoryId: 1, title: 'Brasil Santos Bourbon', price: 1050, image: 'BRASIL-SANTOS-BOURBON.jpg', stock: 30, intensity: 'Suave', description: 'Sofisticada selección de granos que conforman un blend suave y cremoso con un dejo levemente dulce.' })
      server.create("item", { id: 3, categoryId: 1, title: 'Coffee Passion', price: 980, image: 'COFFEE-PASSION.jpg', stock: 60, intensity: 'Fuerte', description: 'En su aroma predominan la madera y la pimienta con un dejo alicorado a medida que va perdiendo calor.' })
      server.create("item", { id: 4, categoryId: 1, title: 'Colombian Dark', price: 2500, image: 'COLOMBIAN-DARK.jpg', stock: 28, intensity: 'Suave', description: 'Un café muy dulce, con dejo de sabor a cítrico y floral. Acidez vivaz, un cuerpo sedoso y una complejidad de notas florales en el aroma.' })
      server.create("item", { id: 5, categoryId: 1, title: 'Colombian Supremo', price: 2500, image: 'COLOMBIAN-SUPREMO.jpg', stock: 15, intensity: 'Suave', description: 'Nuestro Colombian Supremo sometido al máximo tueste intensificando aroma, sabor y reduciendo acidez.' })
      
      server.create("item", { id: 6, categoryId: 2, title: 'Chocolate', price: 580, image: 'CHOCOLATE.jpg', stock: 15, intensity: 'Medio', description: 'Realizados con el grano 100% arabigo y extractos naturales hasta un 3%. Estos extractos se agregan durante el proceso de tostado, permitiendo deslizar un sutil sabor sin opacar la fuerza del cafe.' })
      server.create("item", { id: 7, categoryId: 2, title: 'Vainilla', price: 650, image: 'VAINILLA.jpg', stock: 12, intensity: 'Suave', description: 'Realizados con el grano 100% arabigo y extractos naturales hasta un 3%. Estos extractos se agregan durante el proceso de tostado, permitiendo deslizar un sutil sabor sin opacar la fuerza del cafe.' })
      
      server.create("item", { id: 8, categoryId: 3, title: 'Congo', price: 2500, image: 'CONGO.jpg', stock: 8, intensity: 'Suave', description: 'Elegante y brillante acidez de arándano, azúcar de caña y notas de ciruela con cuerpo almibarado y buen equilibrio.' })
      server.create("item", { id: 9, categoryId: 3, title: 'Costa Rica', price: 1850, image: 'COSTA-RICA.jpg', stock: 10, intensity: 'Medio', description: 'Hard beans. Gran cuerpo y aroma, menos acidez. Notas de chocolate en la boca.' })
      server.create("item", { id: 10, categoryId: 3, title: 'Etiopía', price: 3500, image: 'ETIOPIA.jpg', stock: 5, intensity: 'Fuerte', description: 'Los granos Yirgacheffes Etíopes son picantes y fuertes. Gran cuerpo, aroma y sabor con retrogusto vibrante.' })
      server.create("item", { id: 11, categoryId: 3, title: 'Nicaragua', price: 1900, image: 'NICARAGUA.jpg', stock: 22, intensity: 'Suave', description: 'De sabor complejo e interesante. Cuerpo medio y muy cremoso.' })
      server.create("item", { id: 12, categoryId: 3, title: 'Papúa Nueva Guinea', price: 3450, image: 'PAPUA-NUEVA-GUINEA.jpg', stock: 3, intensity: 'Medio', description: 'Sabor audaz, notas de chocolate, dulce, ácido y afrutado con un cuerpo medio a fuerte y un final ligeramente cremoso y suave.' })
      
      server.create("item", { id: 13, categoryId: 4, title: 'Colombian Decaff', price: 650, image: 'COLOMBIAN-DECAFF.jpg', stock: 45, intensity: 'Suave', description: 'Tratado para remover la cafeína permitiendo al café, conservar su cuerpo aroma y sabor.' })
    },
  })
}

export default mockApi