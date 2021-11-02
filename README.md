# The-Corner-of-Food
 <!-- omit in toc -->



- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**The Corner of Food** _is a full stack food blog application that comes derived from the love of food and growing up in Queens, NY. Queens is so diverse and holds many different cultures in every corner, making it easy to find different types of food. However, this pandemic has caused many citizens from Queens to loose their homes, jobs and loved ones. Although, the sadness from that, many have chosen to move on and create small busineses that include food trucks, restaurants, even selling in the streets of busy Queens, NY, to make a living. Many of these places to eat have been influenced from social media and word of mouth, and it is important to continue to support these small businesses to succeed in this pandemic together._


<br>

## MVP

_The **Corner of Food** will have 3 table associations, which include users, posts and reviews. Users will be able to view, create, edit and delete their food blog posts. Users will be able to also view and add reviews of their favorite places._

<br>

### Goals

- _Provide accurate information, regarding places to eat._
- _Create a responsive food blog app, to be mobile and desktop-friendly to users._
- _Integrate high quality pictures of food items available.__
- _Be able to add reviews under each food blog post._

<br>

### Libraries and Dependencies

> The libraries and dependecies used for this application are listed below:

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end application_ |
|   React Router   | _Routing for React_ |
| Rails | _Back-end framework._ |
|     Gemfiles      | _Bcrypt, faker for my backend._ |
|  React:axios  | _Front end api calls_ |

<br>

### Client (Front End)

#### Wireframes
>[The Corner of Food Wireframe](https://whimsical.com/the-corner-of-food-Hrd5KAYfDTquGQBHmKJxLf)

- Desktop Landing 
<br>
<img src="https://i.imgur.com/KHjtbny.png" width="400" height="400" />
<br>

- Desktop Posts
<br>
<img src="https://i.imgur.com/GJTdaTS.png" width="400" height="400" />
<br>
- Desktop Post Details
<br>
<img src="https://i.imgur.com/pWxYSof.png" width="400" height="400" />
<br>
- Desktop Review
<br>
<img src="https://i.imgur.com/qVrKSaE.png" width="400" height="400" />
<br>

- Mobile Resource Index
<br>
<img src="https://i.imgur.com/67rC8t9.png" width="400" height="400" />
<br>
<br>

#### Component Tree

> 

[Component Tree Sample](https://app.diagrams.net/#G1tjUqGOfa6x-gbMYHHJi443C2LqEmq2hw)

<img src="https://i.imgur.com/ynzXllH.png" width="400" height="400" />

<br>
<br>

#### Component Architecture

> This is my React Front End data structure. I hope to achieve this structure to make things go smoothly.

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ containers
      |__ MainContainer.jsx  
|__ layouts/  
      |__ Layout.jsx              
|__ screens/
      |__ Posts.jsx   
      |__ PostDetail.jsx         
      |__ PostCreate.jsx 
      |__ PostEdit.jsx    
      |__ Reviews.jsx  
      |__ Login.jsx
      |__ Register.jsx 
|__ services/
      |__api-config.js
      |__auth.js


```

#### Time Estimates

> 

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend (Auth/Models/Seed Data)            |    H     |     6 hrs      |     2 hrs     |    TBD    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Setting up Front-end Directory | H | 3hrs | 3 hrs | TBD|
| Edit/Add Form |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Delete Post |    H     |     1 hrs      |     1 hrs     |     TBD     |
| Responsiveness/Media Query |    H     |     6 hrs      |     1 hrs     |     TBD     |
| CSS                 |    H     |     9 hrs      |     1 hrs     |     TBD     |
| Total | H | 32hrs | TBD | TBD |



<br>

### Server (Back End)

#### ERD Model



[ERD Sample](https://i.imgur.com/7A9Ne2h.png)
<img src="https://i.imgur.com/7A9Ne2h.png">
<br>

***

## Post-MVP

> I would love to integrate a maps location in my app. I would preferably use a google maps API to achieve this. Also, I would like to add star ratings to replace my integer rating value.
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
