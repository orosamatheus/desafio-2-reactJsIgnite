import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenreResponseProps{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps{
  genres: GenreResponseProps[];
  handleClickButton: Function;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  
  const {genres, handleClickButton, selectedGenreId} = props;

  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName= {genre.name}
            onClick={()=>handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}/>
        ))}
      </div>
    </nav>

  )
}