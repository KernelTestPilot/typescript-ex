import { createServer, Model, Factory } from "miragejs";
import { faker } from '@faker-js/faker';
import { Person } from "../Types/User";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,
factories: {
  person: Factory.extend<Partial<Person>>({
    get firstName() {
      return faker.person.firstName();
    },
    get lastName() {
      return faker.person.lastName();
    },
    get streetAddress() {
      return faker.address.streetAddress();
    },
  }),
},

    models: {
      person: Model.extend<Partial<Person>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get("people");
    },

    seeds(server) {
      server.createList("person", 20);
    },
  });
}
export default {}