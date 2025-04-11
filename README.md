# Movies App

A React Native application for browsing movies using the TMDB API.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (install with `npm install -g expo-cli`)
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movies-app.git
   cd movies-app


2. **Install dependencies**
   `npm install`

3. **Set up TMDB API**

   This app uses The Movie Database (TMDB) API. You'll need to:
   
   Create an account at https://www.themoviedb.org/
   
   Go to API Settings to create your API key
   
   Request an API key (select "Developer" option)

4. **Configure environment variables**

   Create a .env file in the root directory with the following content:
   
   `EXPO_PUBLIC_MOVIE_DB_KEY=your_api_key_here
   EXPO_PUBLIC_MOVIE_DB_URL=https://api.themoviedb.org/3`
   
   Replace your_api_key_here with the API key you obtained from TMDB.

6. **Run the app**

   Start the development server:

   `npm start`
