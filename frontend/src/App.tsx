import { gql, useQuery } from "@apollo/client";
import "./App.css"

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

console.log(BOOKS);

const Books = () => {
  const { loading, error, data } = useQuery(BOOKS)
  console.log(data);
  if(loading) return <p>loading.....</p>
  return <h1>hoge</h1>
}

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>graph ql</h2>
      <Books />
    </div>
  )
}

export default App;