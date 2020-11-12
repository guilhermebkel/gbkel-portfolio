import IbesvaImage from '../resources/mockup/ibesva.jpg'
import SuubImage from '../resources/mockup/suub.jpg'
import MyPortfolioImage from '../resources/mockup/portfolio.jpg'
import PicsizeImage from '../resources/mockup/picsize.jpg'
import StriderImage from '../resources/mockup/strider.jpg'
import FakeInstagramImage from '../resources/mockup/fakeinstagram.jpg'
import AnonymousMessageBoardImage from '../resources/mockup/anonymousmessageboard.jpg'
import FakeSpotifyImage from '../resources/mockup/fakespotify.jpg'

import IbesvaResizedImage from '../resources/mockup/resized/ibesva_resized.jpg'
import SuubResizedImage from '../resources/mockup/resized/suub_resized.jpg'
import MyPortfolioResizedImage from '../resources/mockup/resized/portfolio_resized.jpg'
import PicsizeResizedImage from '../resources/mockup/resized/picsize_resized.jpg'
import StriderResizedImage from '../resources/mockup/resized/strider_resized.jpg'
import FakeInstagramResizedImage from '../resources/mockup/resized/fakeinstagram_resized.jpg'
import AnonymousMessageBoardResizedImage from '../resources/mockup/resized/anonymousmessageboard_resized.jpg'
import FakeSpotifyResizedImage from '../resources/mockup/resized/fakespotify_resized.jpg'

const Projects = [
    {
        title: "Charity Website",
        technologies: "HTML5 / CSS3",
        description: "That's a front-end refactoring I've made to a NGO called IBESVA in order to help them getting a new website design.",
        liveUrl: "https://ibesva.netlify.com",
        imageUrl: IbesvaImage,
        resizedImageUrl: IbesvaResizedImage,
        githubUrl: "https://github.com/guilhermebkel/IBESVA",
        position: ""
    },
    {
        title: "Github Search",
        technologies: "Node.js / React.js",
        description: "A full-stack web application linked with Github API, so you can fetch data such as repositories or profiles.",
        liveUrl: "https://guilhermebkel.github.io/PICSIZE-Challenge",
        imageUrl: PicsizeImage,
        resizedImageUrl: PicsizeResizedImage,
        githubUrl: "https://github.com/guilhermebkel/PICSIZE-Challenge",
        position: ""
    },
    {
        title: "My Portfolio",
        technologies: "React.js",
        description: "The page you're already browsing in, that I've made in order to show my projects.",
        liveUrl: "http://guilhermebkel.github.io",
        imageUrl: MyPortfolioImage,
        resizedImageUrl: MyPortfolioResizedImage,
        githubUrl: "https://github.com/guilhermebkel/guilhermebkel.github.io",
        position: ""
    },
    {
        title: "Database Manager",
        technologies: "MongoDB / Restify.js / Angular 7 / Ionic 4",
        description: "A full-stack web application which you can store data on a database and manage it.",
        liveUrl: "https://suubchallenge.firebaseapp.com",
        imageUrl: SuubImage,
        resizedImageUrl: SuubResizedImage,
        githubUrl: "https://github.com/guilhermebkel/Suub-Challenge",
        position: ""
    },
    {
        title: "Task App",
        technologies: "MySQL / React.js / Node.js / Spring / Maven / Hibernate",
        description: "A task management app, which you can use to save, complete and delete tasks online.",
        liveUrl: "https://guilhermebkel.github.io/Strider-Challenge2",
        imageUrl: StriderImage,
        resizedImageUrl: StriderResizedImage,
        githubUrl: "https://github.com/guilhermebkel/Strider-Challenge2",
        position: ""
    },
    {
        title: "Fake Instagram",
        technologies: "Node.js / Express.js / MongoDB / React.js / React Native",
        description: "One of the most famous social networks replicated by me for web and mobile devices.",
        liveUrl: "https://guilhermebkel.github.io/Fake-Instagram",
        imageUrl: FakeInstagramImage,
        resizedImageUrl: FakeInstagramResizedImage,
        githubUrl: "https://github.com/guilhermebkel/Fake-Instagram",
        position: ""
    },
    {
        title: "Anonymous Message Board",
        technologies: "Angular 8 / Express.js / Mocha.js / Helmet.js / PostgreSQL / bcrypt",
        description: "That's a forum which you can use to create threads and reply it anonymously.",
        liveUrl: "https://anonymous-message-board.firebaseapp.com/",
        imageUrl: AnonymousMessageBoardImage,
        resizedImageUrl: AnonymousMessageBoardResizedImage,
        githubUrl: "https://github.com/guilhermebkel/Anonymous-Message-Board",
        position: ""
    },
    {
        title: "Fake Spotify",
        technologies: "React.js / Redux.js / Node.js / Express.js",
        description: "A spotify version made by me using their own API in order to fetch data.",
        liveUrl: "https://guilhermebkel.github.io/Fake-Spotify/",
        imageUrl: FakeSpotifyImage,
        resizedImageUrl: FakeSpotifyResizedImage,
        githubUrl: "https://github.com/guilhermebkel/Fake-Spotify",
        position: ""
    },
]

export default Projects