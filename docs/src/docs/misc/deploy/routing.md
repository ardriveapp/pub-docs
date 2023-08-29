# Hash Routing

## Overview

Hash routing is a popular technique in single page applications (SPAs) where the site navigation is handled using JavaScript. The "hash" in hash routing refers to the hash symbol (#) inserted into the URL. The part of the URL after the hash symbol is used to determine which  "page" to show.

For example, if your URL is "http://www.example.com/#about", the part after the hash (about) would be used to show an app's "about" page.

## Hash Routing Vs. History Routing

Traditional web apps use history routing, where each unique URL represents a different source or asset contained in a server. The URL "http://www.example.com/about" would fetch the "about" page from the app's server and display it for a user. History routing requires a server be available to provide the correct files every time a user navigates around an app.

In contrast, with hash routing, all navigation is handled by the client's browser, so no server is needed for navigation. 

## Why Hash Routing for dApps

Hash routing is particularly useful for apps deployed on Arweave for several reasons:

- **Serverless**: Arweave is a decentralized storage network. There's no server to process requests, so routing cannot be handled by a server.
- **Persistence**: Once data is stored on Arweave, it can't be changed. Hash routing allows you to have "dynamic" content within this immutable structure.
- **Performance**: With hash routing, all the necessary code is loaded once, reducing the number of network requests and improving performance.