import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { mockGifs } from './mock-data/gifs.mock';
import { useState } from 'react';

const GifApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['asuka', 'misato']);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    console.log({ query });
    const newQuery = query.toLowerCase().trim();
    if (newQuery.length === 0) return;
    if (previousTerms.includes(newQuery)) return;
    const newTerms = [
      newQuery,
      ...previousTerms.filter((term) => term !== newQuery),
    ].slice(0, 8);

    setPreviousTerms(newTerms);
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
      <GifList gifs={mockGifs} />
    </>
  );
};

export { GifApp };
