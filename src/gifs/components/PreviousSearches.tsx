import type { FC } from 'react';

interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void; //Forma de tipar una funcion en una interface.
}

const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
  return (
    <section className="previous-searches">
      <h2>Busqueas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          //(Closure) en Iteraciones: Al definir una Fn. de flecha dentro del .map(), se instancia una nueva Fn. anónima por cada elemento del array. Cada una de estas Fns. "atrapa" el valor de 'term' en su propio ámbito de bloque (Block Scope), creando un registro léxico único. Esto garantiza que, al dispararse el evento 'onClick', la Fn. ejecute 'onLabelClicked' con el argumento exacto que le correspondía en el momento de su creación.
          <li key={term} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </section>
  );
};

export { PreviousSearches };
