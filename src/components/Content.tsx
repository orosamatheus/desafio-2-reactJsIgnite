import '../styles/content.scss';

import { MovieCard } from './MovieCard';
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface ContentProps {
  selectedGenreTitle: string;
  movies: MovieProps[]
}

export function Content(props: ContentProps) {
  const { selectedGenreTitle, movies } = props;

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}