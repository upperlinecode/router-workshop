# React Router Lab

## Cave Explorer

## Objectives

- Add a `BrowserRouter` to the root of an application.
- Implement a `Routes` component (as opposed to a Switch from earlier versions of React Router) with child `Route` components to toggle between components and reflect those changes with restful routing.
- Navigate between pages with a `Link` component.
- Nest a `Route` inside a parent `Route` to create composite pages or more restful routing.
- Use the `Outlet` component to indicate where components of child routes should be rendered.
- Create a variable route, and access the value of that variable with the `useParams` function.

## Why

The default behavior of React is as a Single Page application - even as the contents of a website change, you're never _really_ leaving the index.html - you're just modifying what's there through control of the virtual DOM.

But as a user, that feeling can be really disorienting - especially if you're experiencing something that "feels" like multiple pages, it's really confusing to look up at the address bar of your browser and never see that progress reflected. It's even more disorienting to click the back button and be sent away from the website entirely, instead of to the page you were on moments before.

One final even more pragmatic concern is that without a tool to help search engines parse your React app as multiple pages, your entire site will get indexed as a single entry, which drastically hurts SEO, and also makes it a lot harder for a user to quickly find the parts of your site they need.

React Router solves all these problems with a few simple components that can be combined and configured in some powerful ways. In this lab, you'll explore the basics of React Router v.6.

## Setup

Clone the repo, navigate to your local copy, install dependencies with `npm i`, and then see the current state of the app with `npm run start`.

## Framing

This is a caving exploration game! The idea is to navigate through a giant cave with several caverns inside of it. Each cavern has been given a name by previous explorers, but no one wrote down the route to the deepest cavern, so it's your job to find it. You'll know you've arrived at the deepest cavern via a congratulatory message scrawled on the wall.

Go ahead and play [this mostly-finished version](https://cave-routes.netlify.app/) of the game to get a sense of how it's supposed to work.

Let's get to work building it.

The app itself relies on topics shared in the [React Router tutorial](https://reactrouter.com/en/6.8.2/start/tutorial), and the exercises include links to parts of that tutorial throughout. You may be able to understand the tutorial better if you explore [their finished app](https://stackblitz.com/edit/github-agqlf5?file=src/App.jsx) too, with special attention to your browser's address bar.

## Exercises

### 1. Add some Routes!

Implement the `BrowserRouter`, `Routes`, & `Route` components in your `index.tsx` with routes for "/", "/Shop", and "/Caves" that render out the Home, Shop, and CaveEntrance components respectively. You can see an example of what this implementation looks like in the [Tutorial](https://reactrouter.com/en/6.8.2/start/tutorial#adding-a-router). You can confirm that this worked by confirming that "http://localhost:3000/Shop" renders the Shop component.

If you do this correctly, you'll no longer render out your `App` component at all, and so you won't be able to see your `Nav` at all. We'll solve this in the next exercise.

> Note that if you've used an earlier version of 'react-router-dom' before this, you're probably used to a `Switch` component which matches routes in order. The Switch has been deprecated and replaced with the plural `Routes` component, as [explained in their documentation](https://reactrouter.com/en/6.8.2/upgrading/v5#upgrade-all-switch-elements-to-routes).

### 2. Nest each Route and add a Nav.

Let's solve the problem we created earlier and use the App component to control our layout. We want the Nav to appear on each page at the top, so [reference the tutorial](https://reactrouter.com/en/6.8.2/start/tutorial#nested-routes) to see how that can be done by nesting a each of your three Routes within another Route. You'll need to use an `Outlet` as part of the App component.

At this point, the following slugs should exhibit the following behavior:

- `/` should display the Nav and the Home component.
- `/shop` should display the Nav and the Shop.
- `/caves` should display the Nav and the CaveEntrance.
- `/anything-else` would display just the Nav and nothing else (though this isn't the intended final behavior, it should work for any non-matching pattern).

### 3. Add a client-side redirect

Right now, you'll notice that the `/anything-else` behavior is a little unsettling - it feels like it's worth either a 404 component for any [non-matching pattern](https://reactrouter.com/en/6.8.2/start/tutorial#handling-not-found-errors), or a redirect that sends you back to home. You're welcome to implement either of the following two behaviors:

- Redirect any non-matching pattern to a `/not-found`. Then add a corresponding route and render out a message that indicates that this is what has happened.
- Redirect any non-matching pattern to `/`, which has already been defined.

### 4. Activate the Nav Bar

So far we've done all our navigating via directly typing things into the address bar. You _could_ use standard `<a>` links to wire up the buttons on the Navbar and replicate that behavior, but your browser would reload the entire react application each time you used them - that's bad for performance and for state management.

React Router's `Link` components will allow your user to route through your application without sacrificing React's performance. Refer to [the example](https://reactrouter.com/en/6.8.2/start/tutorial#client-side-routing) and then wrap the NavButtons in Link components that each route to the correct destination.

### 5. Adding Individual Cave Routes

There are 21 individual caves (as demonstrated in the `caveDirectory.ts` file) - you'll need to figure out how to render out specific caves if you visit their corresponding route. For example, the slug `/caves/juliet` should render out a Cave component for Juliet, showing the neighbors as clickable buttons.

You could create 21 individual routes, but you can already guess how unpleasant that would be. Instead, use a [URL Param](https://reactrouter.com/en/6.8.2/start/tutorial#url-params-in-loaders) to dynamically render a Cave for any possible code.

### 6. Access the Params in a Cave component.

You'll see how right now, any Cave renders as if it's Juliet, no matter what caveID is passed to it. That's because we've hard-coded in that caveId. Referencing [the example](https://reactrouter.com/en/6.8.2/start/tutorial#url-params-in-loaders), use the `useParams()` function to extract the caveId from the URL and render out the appropriate cave.

### 7. Practice with the Cave

Now that the caves are rendering, it's time to fix the Cave component so that it display buttons for its neighbors instead of a generic "tunnel under construction" button. Aside from the use of a `Link` component, this isn't really a React Router challenge, so no additional guidance will be provided. Good luck!

### 8. Make it your own!

You've got the basics! If time remains, it's time to add some extensions - pursue whichever of these paths seems the most interesting to you.

- The styling isn't really all that thoughtful. You probably have some design improvements you'd love to implement. Go for it!
- Each page has a distinct URL, but the browser tab doesn't have a title to match. One solution is to add another package - React Helmet is one that works nicely with React Router and is popular among developers.
- Refine the game in some way! This one's pretty open ended.
- Add Redux to keep track of currency. Once that's done you can add items if you like. Right now the only way to make your way through the maze is through trial and error, or by putting together what the clues mean. Perhaps providing currency if you explore some dead ends, and then allowing the user to buy a drill or a flashlight that exposes more routes through the maze.
