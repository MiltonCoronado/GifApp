import { useState } from 'react';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import type { Gif } from '../src/gifs/interfaces/gif.interface';

import { getGifsByQuery } from './gifs/actions/get-gif-by-query.action';

const GifApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]); //useState() si acepta genericos!!!
  const [gifslList, setGifsList] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = '') => {
    console.log({ query });
    const newQuery = query.toLowerCase().trim();
    if (newQuery.length === 0) return;
    if (previousTerms.includes(newQuery)) return;

    setPreviousTerms([newQuery, ...previousTerms].slice(0, 8)); //(spread operator): crea una nueva copia del array para que React detecte el cambio de referencia y actualice la interfaz.

    const gifs = await getGifsByQuery(query);
    console.log({ gifs });
    setGifsList(gifs);
  };

  return (
    <>
      <CustomHeader
        title="Buscador de Gif"
        description="Descubre y comparte el Gif perfecto"
      />
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked} //comunicacion entre componentes hijo padre/padre hijo.
      />
      <GifList gifs={gifslList} />
    </>
  );
};

export { GifApp };
