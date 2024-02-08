# PlayStation Calendar

A calendar application that displays a collection of upcoming video games. It will display new PlayStation game launches.

## Requirements

- Node.js >= 18.18.2

## Tech Stack

- TypeScript
- React
- React Toastify
- Tailwind CSS
- Vite

## How to Run

- `yarn install-and-run` to run the app on local

## How to Install

- Install node_modules \
  `yarn install`
- Optionally, make a copy of `.env.example` as `.env` \
  Set `VITE_API_URL` as the URL of API \
  `cp .env.example .env`

## How to Build

- `yarn build` to build the app
- `yarn preview` to preview the app in production

## Commands for Devlopment

- `yarn lint` to check and fix lint errors
- `yarn format` to enforce coding styles

## Decisions Made

- According to requirements, created a React + TypeScript app using Vite.
- Setup ESLint and Prettier for maintainable and readable codebase.
- Setup Husky to avoid messy code in SCM tool - Git.
- Setup Tailwind CSS.
- Fixed events data and assets (wrong JSON formatting, wrong date, wrong image types, invalid images).
- Added API service to the project.
  - Setup mock service in amock.
  - Added API caller to fetch events.
  - Added a custom hook to use events filtered by year and month.
- Setup component structure for frontend and added edge case handlers like invalid URLs.
- Built responsive calendar view, it's worth noting that I showed a full real-world calendar, which means the calendar also includes the ending days of prev month and the starting days of the next month with disabled styles.
- Added events caching feature for 1 min to provide a better user experience.

## Trade-offs

- It doesn't have multiple view modes, so in a large screen, a user must scroll down to view all events. Potential solution is setting up max width of the calendar.
- It doesn't have good accessibility, for example for blind users.

## Future Plan

- In a real application, I would do:
  - optimize performance by introducing good features like Lazy Loading
  - implement state management for better caching
  - improve accessibility by implementing internalization, multiple color themes, using svgs and semantic tags, etc.
  - implement cross-browser compatibility to provide the best UX to more customers
  - improve UI for better UX
  - support embeddable widget so that other brands can embed our calendar into their apps
  - investigate and fix any potential security issues like XSS attacks
  - setup CI/CD pipelines.
- In case we have n number of events,
  - the maximum number of events in monthly view is around 30, so there won't be a big issue, but for quarterly or yearly view, I'll bring efficient data fetching to the app by using React Virtualization
  - as long as the events are not updated very soon, we can cache fetched events for some time, 1 hour or 2 hours based on preferences
  - we can introduce GraphQL to avoid over-fetching or under-fetching for especially mobile users. this way we can optimize data structure in communication between frontend and backend.
- Write unit / integration / e2e tests. We can go for Jest / React Testing Library / Cypress but for testing browser compatibility in various browsers (Chrome, Firefox, Safari, Opera), Playwright would be a good option.

## Assessment Requirements

- [x] The calendar should render events in the `Monthly` view.
- [x] Do not use any UI component library (e.g. material-ui, react-datepicker).
- [x] Do use functional helper libraries (if you want), such as Lodash or date-fns.
- [x] Visiting an invalid date should redirect to the current date.
- [x] The events must be fetched via an AJAX call. You can use [http://amock.io/](http://amock.io) to mock your API.
- [x] Use Flexbox or CSS Grid to render and style the calendar. Don't use tables.
- [x] Provide a `Previous` and `Next` button to allow navigation between months.
- [x] Create a client-side algorithm for event placement within the calendar cells. Use the data in `events.json` and the images provided.
- [x] Clicking on a calendar event should open a simple view (as per the design) showing details of the event.
- [x] Calendar should be URL driven. For example, `http://localhost:4000/2019/1` should display the calendar for January 2019 using Query Params. Invalid URLs (such as 2019/14) should be handled.

## Extra Credits

- [ ] Write tests, with any test framework such as Protractor or Jasmine.
- [x] Use React.
