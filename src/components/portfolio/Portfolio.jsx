import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Leapy_02.png'
import IMG2 from '../../assets/Spikes.png'
import IMG3 from '../../assets/SpacePilots.png'
import IMG4 from '../../assets/PeacefulWarrior.png'
import IMG5 from '../../assets/Akradion.png'
import IMG6 from '../../assets/Commanders.png'
import IMG7 from '../../assets/randommovies.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Leapy',
        genre: 'Drag & Release 2D',
        technologies: 'Unity, C#',
        github: 'https://github.com/MartinQuijano/Leapy',
        demo: 'https://kottler.itch.io/leapy'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Spikes',
        genre: 'Puzzle 2D',
        technologies: 'Unity, C#',
        github: 'https://github.com/MartinQuijano/Spikes',
        demo: 'https://kottler.itch.io/spikes'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Space Pilots',
        genre: 'Endless Runner 2D',
        technologies: 'Unity, C#',
        github: 'https://github.com/MartinQuijano/Space-Pilots',
        demo: 'https://kottler.itch.io/space-pilots'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Peaceful Warrior',
        genre: 'Platformer 2D',
        technologies: 'Unity, C#',
        github: 'https://github.com/MartinQuijano/Peaceful-Warrior',
        demo: 'https://kottler.itch.io/peaceful-warrior'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Akradion',
        genre: 'Arcade',
        technologies: 'Unity, C#',
        github: 'https://github.com/MartinQuijano/Akradion',
        demo: 'https://kottler.itch.io/akradion'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Commanders',
        genre: 'Multi-action turn-based strategy',
        technologies: 'Unity, C#',
        github: 'https://github.com/MartinQuijano/Commanders',
        demo: 'https://kottler.itch.io/commanders'
    }, {
        id: 7,
        image: IMG7,
        title: 'RandomMovie',
        genre: 'React website',
        technologies: 'HTML, JavaScript, CSS, React',
        github: 'https://github.com/MartinQuijano/random-movie',
        demo: 'http://randommovie.infinityfreeapp.com/'
    }
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, genre, technologies, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <small className="portfolio__game-genre">{genre}</small>
                                <small className="portfolio__game-technologies">{technologies}</small>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default portfolio