### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
<!-- To let a developer handle client and server side routing -->

- What is a single page application?
<!-- When everything in the application is made by rewriting the page dynamically instead of reloading the page everytime the user does something. -->

- What are some differences between client side and server side routing?
<!-- Server side routing is when the server sends a new page everytime the user does something, client side routing is when the client handles the routing and only sends requests to the server when it needs data. -->

- What are two ways of handling redirects with React Router? When would you use each?
<!-- You can use the Redirect component to redirect the user to a different page, or you can use the history prop to push the user to a different page. -->

- What are two different ways to handle page-not-found user experiences using React Router? 
<!-- You can use the Switch component to render a 404 page when no other route matches, or you can use the Redirect component to redirect the user to a 404 page when no other route matches. -->

- How do you grab URL parameters from within a component using React Router?
<!-- By using the useParams hook. -->

- What is context in React? When would you use it?
<!-- Context is a way to pass data through the component tree without having to pass props down manually and rewrite the code at every level. You would use it when you have data that you want to be available to multiple components. -->

- Describe some differences between class-based components and function
  components in React.
<!-- Class-based components are written as classes and have lifecycle methods, function components are written as functions and don't have lifecycle methods. -->

- What are some of the problems that hooks were designed to solve?
<!-- Hooks were designed to solve the problem of having to rewrite code when you wanted to use lifecycle methods in function components. -->