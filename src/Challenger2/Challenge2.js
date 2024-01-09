import Jokes from "./Jokes";
import jokesData from "./jokes-data";

export default function Challenge2 () {
    const jokeElement = jokesData.map(function(joke) {
        return <Jokes
            setup={joke.setup}
            punchline={joke.punchline}
        />
    });
    return(
        <div>
            {jokeElement}
        </div>
    );
}