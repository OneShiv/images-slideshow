import { Suspense, useEffect, useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults query={query} />
      </Suspense>
    </>
  );
}

const data = [
  {
    text: "dain daj ad"
  },
  {
    text: "abj fsr"
  },
  {
    text: "loothk"
  },
  {
    text: "mowe iien"
  },
  {
    text: "rainy day"
  },
  {
    text: "ijeo"
  }
];

const getFilteredResults = (query) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      let x = data.filter((d) => d.text.search(query));
      resolve(x);
    }, 1000)
  );
};

function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    getFilteredResults(query).then((resp) => {
      setResults(resp);
    });
  }, [query]);
  if (query === "") {
    return null;
  }

  return (
    <ul>
      {results.map((res) => (
        <li key={res.text}>{res.text}</li>
      ))}
    </ul>
  );
}
