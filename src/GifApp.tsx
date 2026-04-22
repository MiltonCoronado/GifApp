import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { useGifs } from './gifs/hooks/useGifs';

const GifApp = () => {
  const { gifslList, previousTerms, handleSearch, handleTermClicked } =
    useGifs();

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
