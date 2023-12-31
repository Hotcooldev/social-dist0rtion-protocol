# Treasure Hunt C*(THC)

THC stands for:

- Treasure Hunt Creator, a framework to create Treasure Hunt Challenges (THCs).
- Treasure Hunt Challenge, a Treasure Hunt Campaign made with Treasure Hunt Creator.
- Treasure Hunt Campaign, a Treasure Hunt Challenge made with Treasure Hunt Creator.
- Treasure Hunt Controller, the smart contract that manages the game.
- Treasure Hunt Contract, see Treasure Hunt Controller.
- Treasure Hunt Cadet, someone who just started playing a THC.
- Treasure Hunt Champion, someone who finished a THC.
- Treasure Hunt Chad, see Treasure Hunt Champion.

This is the monorepo of THC, a framework to create decentralized treasure hunts. [Planetscape, a dystopian escape game for 36C3](https://www.dist0rtion.com/2020/01/30/Planetscape-a-dystopian-escape-game-for-36C3/) gives a good overview of what it can be used for.

## Components

The directory structure is the following:
- `app`: (short for *application*) frontend application.
- `eth`: (short for *ethereum*) smart contracts and migrations to deploy on some network.
- `gen`: (short for *generator*) compile and encrypts the chapters of the story.
- `srv`: (short for *server*) centralized component to distribute ether to players.
- `try`: (short for *try*) a test story that can be used to test the framework.



## Development

Each directory has its own dependencies. To install all of them run:

```bash
make install-deps
```

THC requires two services to be up and running:

- An Ethereum node, [ethnode](https://github.com/vrde/ethnode/) is always a great choice.
- An [IPFS node](https://docs.ipfs.io/guides/guides/install/).

Now you have everything you need to develop THC.

### Work on the app (frontend)

Compile and deploy the chapters and the smart contract with:

```bash
make backend
```

Then go to the `app` directory and  run:

```bash
npm start
```

### Work on the contracts (backend)

Go to the `eth` directory and do something there like adding code and tests.

### Deploy a new game locally

Run:

```bash
make game
```
