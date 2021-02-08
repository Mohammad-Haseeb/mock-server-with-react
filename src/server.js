import { createServer } from "miragejs"
import books from './books.json';
export function makeServer() {
  let server = createServer({
    
    routes() {
      this.namespace = "api"

      this.get("/books", () => {
        return  books
      })

      this.post("/reminders", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
       books.push(attrs);
        
        
        
      })

    },
  })

  return server
}