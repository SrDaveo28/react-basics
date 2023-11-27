import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export const App = () => {
    const format = (username) => `@${username}`;

    return (
        <section className='App'>

            <TwitterFollowCard
                formattedUserName={format}
                userName={"davidgenz"}
            >
                David GenZ
            </TwitterFollowCard>

            <TwitterFollowCard
                formattedUserName={format}
                userName={"klerith"}
            >
                FernanDios Herrera
            </TwitterFollowCard>
        </section>
    )
}
