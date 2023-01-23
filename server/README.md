Server, using Express and Sockets

yarn start for development
yarn build for production build

Develompent notes:

- There must be a custom Server object that will containerize rules, in a way so each new connection namespace can be pluggable
- This way, you could plug a new set of rules and a corresponding new page in the client side, making the development process a lot easier
