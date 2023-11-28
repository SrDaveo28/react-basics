import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'davidgenz',
        name: 'David Ortiz',
        isFollowing: true
    },
    {
        userName: 'klerith',
        name: 'FernanDios Herrera',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'MiduDios',
        isFollowing: true
    },
]
export const App = () => {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}
