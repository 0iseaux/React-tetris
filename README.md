# React Tetris (frontend)

## Gameplay temporarily unavailable (hosting server pending)

## Game control: arrow keys:

-   LEFT / RIGHT: move tetrimino to left or right by 1 unit
-   DOWN: increase dropping speed of tetrimino
-   UP: rotate tetrimino by 90 degrees

## Basic info

-   This tetris game was built on **React.js**, following the [**tutorial / experiment of Thomas Weibenfalk**](https://www.youtube.com/watch?v=ZGOaCxX8HIU), using react hooks like `useState`, `useEffect`, `useCallback`, custom hooks and `styled-components`

-   Connected to [**React-tetris-backend**](https://github.com/0iseaux/React-tetris-backend) built on **Node.js** and **MySQL**

## Add-ons

-   A _Start / Pause / Resume / Try Again_ button

-   An component for input of Player's name at Gameover, saving also her/ his score and date/time, rendered at \*_Game Over_

-   A _Score Board_ page showing Player's rank and top ten players' names, scores and record time/date

-   A _Back_ button on the _Score Board_ page to redirect back to the main page

-   Use of other hooks like `useRef`, `useContext`

-   Use of module `hookrouter` (instead of `react-router-dom`) for cleaner implementation of routing in functional components, e.g. by using `navigate()` instead of (`<Redirect>`)

## Credits

-   The font **Pixel LCD-7** was authored by [**Sizenko Alexander**](www.styleseven.com)
-   `useInterval.js` hook was created by Dan Abramov

## Outstanding / for improvement (non-exhaustive list)

-   UI (e.g. alignment, margin) and responsiveness
-   Player can still play using arrow keys after pressing _Pause_ --> need to disable
-   Text on the _Start / Pause / Resume / Try Again_ button would read _Start_ instead of _Try Again_ when Player returns from _Score Board_ page
