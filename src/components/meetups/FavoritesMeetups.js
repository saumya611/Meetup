import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import MeetupList from './MeetupList';

const FavoritesMeetups = () => {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got No Favorites yet, Start adding Some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorite</h1>
            {content}
        </section>
    );
};

export default FavoritesMeetups;