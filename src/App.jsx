import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export const App = () => {
    const format = (username) => `@${username}`;

    return (
        <section className='App'>
            <TwitterFollowCard
                formattedUserName={format}
                isFollowing
                userName={"srdaveo28"}
                name={"David Ortiz"}
            />
            <TwitterFollowCard
                formattedUserName={format}
                isFollowing={false}
                userName={"midudev"}
                name={"Midu Dios"}
            />
            <TwitterFollowCard
                formattedUserName={format}
                isFollowing={false}
                userName={"davidgenz"}
                name={"David GenZ"}
            />
            <TwitterFollowCard
                formattedUserName={format}
                isFollowing
                userName={"klerith"}
                name={"FernanDios Herrera"}
            />
        </section>
    )
}
