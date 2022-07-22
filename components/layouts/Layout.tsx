import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
    children: JSX.Element;
    title?: string;
}

export const Layout = ({children, title}: Props) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Johny Villegas" />
            <meta name="description" content="Informacion del pokemon XXXX" />
            <meta name="keyworks" content={`${title}, pokemon, pokedex`} />
        </Head>

        <NavBar />

        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
