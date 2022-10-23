const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    title: "harry potter",
    author: "jk rolling"
  },
  {
    title: "Run Melos",
    author: "Osamu Dazai"
  }
]

const typeDefs = gql`
  type Book {
    title: String,
    author: String
  }
  type Query {
    test: [Book]
  }
`;

const resolvers = {
  Query: {
    test: () => books,
  }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`server ready at ${url}`);
})