import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { YOUTUBE_API_BASE_URL, YOUTUBE_API_MAX_RESULTS } from '../constants';
export const youtubeApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: YOUTUBE_API_BASE_URL }),
    endpoints: (builder) => ({
      getSearchResults: builder.query({
        query: (searchString) => `search?part=snippet&q=${searchString}&maxResults=${YOUTUBE_API_MAX_RESULTS}&type=video&key=${import.meta.env.VITE_API_KEY}`,
      }),
      getRelated: builder.query({
        query: (videoId) => `videos?part=snippet&videoCategoryId=${videoId}&chart=mostPopular&maxResults=${YOUTUBE_API_MAX_RESULTS}&key=${import.meta.env.VITE_API_KEY}`,
      }),
      getVideo: builder.query({
        query: (videoId) => `videos?part=snippet&id=${videoId}&key=${import.meta.env.VITE_API_KEY}`,
      })
    }),
  })

export const {useGetSearchResultsQuery, useGetRelatedQuery, useGetVideoQuery} = youtubeApi;