import type { FC } from 'react';
import type { Gif } from '../../gifs/interfaces/gif.interface';

interface Props {
  gifs: Gif[];
}

//El FC siempre es de tipo generico.
const GifList: FC<Props> = ({ gifs }) => {
  return (
    <main className="gifs-container">
      {gifs.map((gif) => (
        <div className="gif-card" key={gif.id}>
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width} X {gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </main>
  );
};

export { GifList };
