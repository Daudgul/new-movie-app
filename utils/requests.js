const API_KEY = "c222861780161ad2ec48ce48158bb586";

export default {
  fetchTranding: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },

  fetchPopular: {
    title: "Popular",
    url: `/movie/popular?api_key=${API_KEY}`,
  },
  fetchUpcoming: {
    title: "Upcoming",
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchNowPlaying: {
    title: "Now Playing",
    url: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  },
};
