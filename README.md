# `webrx-react`

monadic development for the web using `RxJS` and `React`

[View the presentation online](https://marinels.github.io/presentation-webrx-react/)

## Presentation Abstract

Single Page Application (SPA) web development has seen a number of improvements in the last few years. These improvements are typically new frameworks that aim to reduce boilerplate code, improve the efficiency of the development feedback loop, and optimize assets for client delivery and consumption. Broken down into layers, a web application is composed of client interaction handlers, application behavioral state mutations, and visually rendered state in the browser pane. When developing `webrx-react`, our intent was to take advantage of this breakdown and apply modular components for each of these layers, modelling after the [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) pattern. A custom built observable object framework based on [WebRx](https://github.com/WebRxJS/WebRx) handles client interactions, [RxJS](https://github.com/ReactiveX/rxjs/) handles monadic state mutations, and [React](https://facebook.github.io/react/) handles browser rendering. The result is a web framework that focuses the majority of development as either declarative behavior logic or visual rendering templates.

## About the Author

![me](https://github.com/marinels/presentation-webrx-react/raw/master/assets/me.png)

My name is [Pat Sissons](https://github.com/patsissons) and I am currently a senior developer at [Marine Learning Systems](https://github.com/marinels) in Vancouver, BC Canada. I have been developing software for over 10 years, focusing heavily on C# in the early years, transitioning to portable libraries and Xamarin later on, and branching out to front end languages more recently. I am a serial technology enthusiast with a passion for understanding how things work. I love learning new software libraries and languages, and keeping up with the latest trends in software, hardware, architecture, and distributed systems.

## Slide Outline

1. Splash
1. Who Am I?
1. What is `webrx-react` all about?
1. Monadic Programming
1. RxJS and the Functional Programming Patterns
1. Ideas from WPF and RxUI
1. WebRx and the Lightweight Port
1. Observable Properties and Commands
1. Observable Web API
1. Composing Observable Streams with `whenAny`
1. React as a Monadic Rendering Engine
1. ViewModels
1. Views
1. `webrx-react` Component Library
1. `BindableInput` & `CommandButton`
1. `DataGrid` and `ItemListPanel`
1. `RouteManager` and `RouteHandler`
1. `PubSub`
1. Canonical Todo List Example
1. Consuming the Library, Bundle vs Modules
1. Roadmap
1. Questions?

## Development

To get started, run `npm update && npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to `docs`, run `npm run deploy`
