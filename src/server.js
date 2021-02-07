import { createServer } from "miragejs"
import books from './books.json';
export function makeServer() {
  let server = createServer({
    
    routes() {
      this.namespace = "api"

      this.get("/books", () => {
        return {
            "name":"hello"
        };
      })
    },
  })

  return server
}