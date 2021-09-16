# Tech Test

Availble at https://waracle-test.herokuapp.com/

## How to Run

To run frontend and backend use the following command:

```
npm run dev
```

To run end-to-end tests run the following command:

```
npm run cypress
```

To run tests:

```
npm run test
```

To run Storybook:

```
npm run storybook
```

## Technologies Used

### Nx

[Nx](https://nx.dev/) is a build framework that has excellent support for monorepos and code sharing. It also contains a bunch of code gen tools.

### NestJs

The Backend is written using the [NestJs](https://nestjs.com/) Node.js framework. This framework fully supports TypeScript and has good tools to assist with separation of concerns.

### Storybook

[Storybook](https://storybook.js.org/) is a tool for building UI components in isolation. It is especially useful when working with component libraries.

### Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org/) is the recommended way of using Redux. It also includes a great tool called RTK Query which allows you to easily implement api calls whilst exposing useful hooks for your components. It uses Thunks under the hood.

### Chakra-UI

[Chakra-UI](https://chakra-ui.com/) is a component library.

### Postgres

A postgres instance is running on Heroku

### Prisma

[Prisma](https://www.prisma.io/) is a Node.js and Typescript ORM.

## Decisions and Notes

- Testing opportunities for this were minimal so I have decided to include a test in the backend and an end-to-end test using cypress.
- Nx creates a lot of files that are not needed for a project this small. In some cases these are left as an example as to what is possible.
- This application was built using numerous frequent commits.
