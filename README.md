# TestJavaScriptWebApp

TestJavaScriptWebApp is a simple javascript web application. It allows user's to grab user data from https://jsonplaceholder.typicode.com/users and filter it by name, email, or company.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Assumptions](#assumptions)

## Features
- **Filtering**: Filter user data by name, email, or company.
- **Intuitive and simple**: Simple design and intuitive filter response allows users to quickly find what they're looking for.
- **Real-time updates**: Everytime the a user visits the site, they're getting the most up to date list.



## Tech Stack
- **Programming Language**: JavaScript

- **Editor**: VS Code

- **Runtime Environment**: Node.js

- **Styling**: HTML & CSS

## Installation

Follow these steps to set up the project locally:

### Steps

1. Clone the repository and move to appropriate folder:
   ```bash
   git clone https://github.com/marniiii/TestJavaScriptWebApp.git
   cd TestJavaScriptWebApp/
2. Open command prompt and download live server:
    ```bash
    npm install -g live-server
3. Run the folder in a live server:
    ```bash
    live-server
4. Select site.html and voila!

## Assumptions
1. The table size is fit to the length of the row.
2. When filtering by 'All' a red text can highlight the specific field that matches the search.
3. If the filter is changed with a value in the 'Search for:' box, the new filter uses the existing value.
4. When no matches are found, the table shrinks and shows nothing.
5. Debounce of 300ms allows for a small bug. Debounce was used but the wait was set to 0.
