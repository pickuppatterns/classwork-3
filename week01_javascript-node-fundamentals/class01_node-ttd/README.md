# Class 01: Basic Node, CJS Modules, and Testing

Use NodeJS to develop JavaScript outside of the browser. 

## Course Environment

* [Professional Software Development](https://docs.google.com/presentation/d/13k3gYd8hwIGfKdqECBEvk44UmkdVcsDuO2Tq9UIToVk/edit?usp=sharing)
* Frame of reference is a software development team, not academia!

## Core Pieces of our Dev Environment

* NodeJS
* npm
* Testing (jest)

## Setup

* new `.eslintrc`
    * Change tab spaces to `4`
    * `env`
        * `node`
        * `jest`
    * Adds EOL check
        * Enable in VSCode: `files.insertFinalNewline: true`

### NodeJS

* Version 10
* Check via `node --version`
* Some people like to use `nvm` to handle multiple versions

## App???

** Examine Easy Greeting App**

## Unit of Running Code???

* Has core "library"
* CLI App?
* Web?
* Package?
* What is a(n)... 

  > ...app?
   
  > ...program?

  > ...process?

* What were you calling when you made an AJAX "call"?
* What is a server?

### Key Points

* A process is "unit of execution" controlled by the Operating System (OS)
    * CPU time
    * Memory space
* Distributed Systems
    * The total set of processes involved in the overall "system"
    * Client, Server [, Database]
* Some systems are "Headless" - pure logic and execution, no UI

### npm (Node Package Manager)

* Tooling for us to manage our build environment
* Repository for open source packages
* `npm init`
* `npm install eslint --save-dev`
* `npm install jest --save-dev`
* add script: `"test": "jest"`

### Testing

Test-First (TDD) Testing in calling out responsibilities and expectations for the code you _are going to write_.

Code meant to be consumed by other code (modules and libraries)
is most straight-forward to test.
    
* jest
    * Test-Runner
    * Used via CLI
    * test: `it`
    * suite: `describe`
* assert
    * `const assert = require('assert');`
    * Assertion Library
        * Fail? throw an error
        * Pass? continue on...
    * Order of assertions is `actual`, `expected`

### Config

[Essentials listed in lab](https://github.com/acl-401-js-fall-2017/submit-401-way/blob/master/LAB.md)

## `greet` demo

Setup for today's lab
