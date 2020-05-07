# code-nl-assignment
Assignment for CODE.nl

## Installation
Please run `npm install` from the root of the project. Once that has finshed, the following commands can be executed:

## Running the app
To run the application, from the command line run:

```bash
$ npm start <file> # <file> is the path to the file

$ npm start -- --help # for more information on the command
```

## Running the tests
```bash
$ npm test
```

## Commit hooks
This project makes use of Husky to run commit hooks, currently there are two set up:

|Hook|Command|
|:---|:------|
|`commit-msg`|`commit-lint -E HUSKY_GIT_PARAMS`|
|`pre-push`|`npm test`|

## Commit messages
Commit messages in this project are linted using the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) standard.
For more details on commit lint please check out their [repository on Github](https://github.com/conventional-changelog/commitlint).


## The challenge (NL)
In de bijlage vind je een ZIP archive. Hierin zitten 2 txt bestanden met elk een lijst met woorden. In elke lijst zijn woorden te vinden die op een of andere manier bij elkaar horen. Aan jou de taak uit te vinden wat hen verbindt. Groepeer deze woorden die bij elkaar horen en sorteer ze op alfabet binnen de groep. Sorteer de groepen op alfabetische volgorde en gebruik daarbij het eerste woord binnen een groep. En let op, ik wil geen dubbele woorden in de uiteindelijke sortering.

Voorbeeld van de uiteindelijke benodigde sortering:

A1, A2, A3
B1
C1, C2

Ik wil graag opleverbare code in javascript dat draait op Nodejs v10 LTS.
Maak een test per lijst waarin je laat zien dat jouw functie werkt. Gebruik bij het testen de modules Mocha en Chai. En natuurlijk starten we vanaf de cli met: npm test.