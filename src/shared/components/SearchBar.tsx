import {
  useEffect,
  useState,
  type KeyboardEvent,
  type SubmitEvent,
} from 'react';

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 2000); //debounce ó debouncer

    // return(Cleanup function): Cancela procesos (timers/suscripciones/peticiones https//:...etc) antes de cada nuevo render o al desmontar el componente.
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        //---Tecnica: controlled input ó controller ( value={state} y onChange={(event) => setState(event.target.value)} )---
        value={query} //Para ver el valor del evento(target) es mejor quitar o comentar el "value={state}".
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown} //El evento onKeyDown detecta el Enter y llama a handleSearch(), ganándole al Submit del form. Al ejecutarse y limpiar el state con setQuery(''), el botón (que es submit por defecto) disparaba el handleSearch() por 2da vez con el valor vacío. Al cambiarlo a type='button', se evita ese segundo disparo automático.
      />
      <button onClick={handleSearch} type="button">
        Buscar
      </button>
    </form>
  );
};

export { SearchBar };
