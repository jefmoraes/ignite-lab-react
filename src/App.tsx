import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { client } from "./lib/apollo";
import { Event } from "./Pages/Event";
import { Router } from "./Router";
function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
