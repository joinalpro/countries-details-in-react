import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>All Countries</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
