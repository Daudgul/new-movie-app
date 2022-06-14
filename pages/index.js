import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import requests from "../utils/requests";
import Extra from "../components/Extra";
export default function Home({ results }) {
  return (
    <div className="movie__container">
      <Head>
        <title>Hulu clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Main results={results} />
      <Extra />
    </div>
  );
}

// fatching the data from API
export async function getServerSideProps(context) {
  const genre = context.query.genere; //getting the data from requests fetch data

  const request = await fetch(
    ` https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTranding.url
    }`
  ).then((res) => res.json());

  return { props: { results: request.results } };
}
