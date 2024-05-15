import blogImg1 from "../../assets/images/1_Qnp6aIxDcOEsoNvEHd0yrw.jpg";
import blogImg2 from "../../assets/images/nestjs-vs-express-js.jpg";
const Blogs = () => {
  return (
    <div className="bg bg-slate-200 dark:bg-gray-800">
      <div className="text-center pt-12 mb-12 text-gray-800 dark:text-gray-400">
        <h2 className="text-4xl font-lora  font-semibold mb-4">
          Insights and Explorations
        </h2>
        <p className="font-inter">
          Delve into the realms of technology and programming with our
          insightful blogs. Explore topics ranging from access tokens and
          refresh tokens to the intricacies of Express.js and Nest JS. Gain
          valuable knowledge and enhance your understanding of these concepts as
          we unravel the mysteries behind modern web development practices.
        </p>
      </div>
      <div>
        <div>
          <section>
            <div className="mx-auto max-w-screen-xl px-4  sm:px-6  lg:px-8">
              <div className="max-w-7xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client side?
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src={blogImg1}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="lg:py-16">
                  <article className="space-y-4 text-gray-500">
                    <p>
                      <span>Access Token:</span>An access token is a string of
                      characters that represents the authorization granted to
                      access specific resources. It is typically short-lived and
                      expires after a certain period. Access tokens are issued
                      by the authentication server upon successful
                      authentication and are included in every request to the
                      server that requires authentication.
                    </p>

                    <p>
                      <span className="text-xl underline">
                        How Access Tokens Work:
                      </span>
                    </p>
                    <ol>
                      <li>
                        Authentication: The user authenticates with the
                        authentication server using their credentials{" "}
                      </li>
                      <li>
                        Authorization: Upon successful authentication, the
                        server generates an access token and associates it with
                        the users session.{" "}
                      </li>
                      <li>
                        Token Issuance: The server sends the access token to the
                        client.
                      </li>
                      <li>
                        Token Usage: The client includes the access token in the
                        HTTP headers of subsequent requests to the server.
                      </li>
                      <li>
                        Server Validation: The server verifies the access token
                        and grants access to the requested resources if the
                        token is valid.
                      </li>
                    </ol>
                    <p>
                      <span className="text-xl underline">
                        How Access Tokens Work:
                      </span>
                    </p>
                    <ol>
                      <li>
                        HTTP Cookies: Store the token in an HTTP-only cookie to
                        prevent access by JavaScript.
                      </li>
                      <li>
                        Local Storage: Store the token in the browsers local
                        storage.
                      </li>
                      <li>
                        Session Storage: Store the token in the browsers session
                        storage.
                      </li>
                      <li>
                        Memory: Store the token in memory, but this is not
                        persistent and will be lost on page refresh.
                      </li>
                    </ol>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" max-w-7xl mx-auto px-4  sm:px-6 py-8  lg:px-8">
              <div className="lg:py-4">
                <article className="space-y-4 text-gray-500">
                  <p className="text-xl">
                    <span>Refresh Token:</span>A refresh token is a long-lived
                    token used to obtain new access tokens without requiring the
                    user to re-authenticate. Refresh tokens are used to extend
                    the validity of access tokens and maintain persistent user
                    sessions.
                  </p>

                  <div>
                    <p>
                      <span className="text-xl underline">
                        How Refresh Tokens Work:
                      </span>
                    </p>
                    <ol>
                      <li>
                        Token Exchange: When an access token expires, the client
                        sends the refresh token to the server.
                      </li>
                      <li>
                        Token Validation: The server validates the refresh token
                        and issues a new access token.
                      </li>
                      <li>
                        Token Renewal: The client receives the new access token
                        and continues to access protected resources without
                        interruption.
                      </li>
                    </ol>
                  </div>
                  <p>
                    <span className="text-xl underline">
                      How Refresh Tokens Work:
                    </span>
                    Since refresh tokens are long-lived and more sensitive than
                    access tokens, they should be stored securely:
                  </p>
                  <ol>
                    <li>
                      HTTP Cookies: Store the refresh token in an HTTP-only
                      cookie to prevent access by JavaScript.
                    </li>
                    <li>
                      Secure Storage: Store the refresh token in a secure
                      storage mechanism provided by the browser, such as the
                      browsers local storage or session storage.
                    </li>
                    <li>
                      Memory: Store the refresh token in memory with appropriate
                      encryption and protection mechanisms.
                    </li>
                  </ol>
                </article>
              </div>
            </div>
          </section>
        </div>
        <hr />
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-12  sm:px-6  lg:px-8">
              <div className="max-w-7xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Lets learn and explore most popular Node JS framework Express JS and NEST JS
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src={blogImg2}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="lg:py-16">
                  <article className="space-y-4 text-gray-500">
                    <p>
                      <span className="text-xl underline">Express.js:</span>Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests and responses, routing, middleware integration, and more. It is known for its simplicity, flexibility, and performance, making it the de facto standard server framework for Node.js. Express.js is widely used in web development for creating server-side logic and powering backend services.
                    </p>

                    
                    <ol>
                      <li>
                      Minimalism and Flexibility: Express.js is designed to be minimalistic and unopinionated, meaning it provides a lightweight framework that allows developers to structure their applications according to their preferences.
                      </li>
                      <li>
                      HTTP Server: At its core, Express.js provides an HTTP server that listens for incoming requests and routes them to the appropriate handlers based on predefined routes and middleware.
                      </li>
                      <li>
                      Middleware: Express.js allows developers to use middleware functions to perform tasks such as parsing request bodies, handling authentication, logging, error handling, and more. Middleware functions can be chained together and executed in a sequence.
                      </li>
                      <li>
                      Routing: Express.js provides a simple and intuitive API for defining routes and handling HTTP methods (GET, POST, PUT, DELETE, etc.). Routes can be defined for specific URL paths and parameters, making it easy to create RESTful APIs and web applications.
                      </li>
                    </ol>
                    
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" max-w-7xl mx-auto px-4  sm:px-6 py-8  lg:px-8">
              <div className="lg:py-4">
                <article className="space-y-4 text-gray-500">
                  <p >
                    <span className="text-xl">Nest.js:</span>Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js and enhances it with additional features and architectural patterns inspired by Angular. Nest.js promotes a modular, testable, and scalable code structure by leveraging TypeScripts features, dependency injection, and object-oriented programming principles. It provides out-of-the-box support for features like routing, middleware, validation, dependency injection, and more. Nest.js is suitable for building a wide range of applications, including REST APIs, GraphQL APIs, microservices, and server-side rendered applications.
                  </p>

                  <div>
                   
                    <ol>
                      <li>
                      TypeScript Support: Nest.js is built with TypeScript, a superset of JavaScript that adds static typing and other features to JavaScript. This allows developers to write cleaner, more maintainable code and catch errors early in the development process
                      </li>
                      <li>
                      Modular Architecture: Nest.js encourages a modular architecture, where applications are divided into reusable modules containing controllers, services, and other components. This promotes code organization, reusability, and testability.
                      </li>
                      <li>
                      Dependency Injection: Nest.js provides a powerful dependency injection system that allows components to be easily instantiated and managed. This promotes loose coupling between components and facilitates unit testing.
                      </li>
                      <li>
                      Decorators and Metadata: Nest.js leverages decorators and metadata to define routes, inject dependencies, handle exceptions, and perform other tasks. This declarative approach simplifies code and reduces boilerplate.
                      </li>
                    </ol>
                  </div>
                </article>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
};

export default Blogs;
