# Tic Tac Toe
<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Lanugages Used](#languages-used)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

![Main Page](https://i.imgur.com/Mz6MCBL.png)

This project demonstrates front end development skills acquired during Module 1 of Turing. The repo includes examples of JavaScript data manipulation, DOM manipulation, usage of local storage, and HTML/CSS construction.

The task was to create a Tic Tac Toe game starting from scratch using mainly JavaScript to create a data model and update the DOM based on this information. Wins and draws are signified with the header of the center column changing to indicate direction. The board will reset after a timeout once a game is finished. Wins are counted by player in the side columns, and saved to local storage so player wins will be remembered on page reload.


### Languages Used

* HTML
* CSS
* JavaScript


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```


### Installation

1. Clone the repo
```sh
git clone https://github.com/mattdeann/tictactoe.git
```
2. Install NPM packages
```sh
npm install
```
3. Move into tictactoe repo

4. Open web page
```sh
open index.html
```


<!-- USAGE EXAMPLES -->
## Usage

### Place game pieces

  * On click, edit DOM to display current players game piece
  * Switch DOM elements to represent whos turn it is
  * Update player instances to "hold" game placements
![Game Placements](https://i.imgur.com/Mz6MCBL.png)



### Add wins to win counter
  

  * Adds win to player instance using incremental win counter
  * Updates player wins to local storage
  * Displays winner on page
  * Resets board after timeout
![Win Counter](https://i.imgur.com/BQ0zDns.png)



### Detect a draw

  * Checks turn counter and returns a draw if the board is full
  * Edits DOM elements to show a draw was reached, does not add wins to either player
  * Resets board after timeout
![Draw Alert](https://i.imgur.com/5P0xHly.png)
  
  

### Load saved player data on page load

  * On page reload, wins will persist
  * These values can be cleared by opening the console and running 
    `localStorage.clear();`
![Persist Data on Load](https://i.imgur.com/7UPa1lI.png)


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/mattdeann/tictactoe/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature-amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature-amazing-feature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Name - [Matthew Dean](deanma95@gmail.com)

Project Link: [https://github.com/mattdeann/tictactoe](https://github.com/mattdeann/tictactoe)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

  * Hannah Hudson - Project manager - Pretty cool!
  * Bruce Gordon - Mentor (Refactoring)
