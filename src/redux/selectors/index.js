import { get } from "lodash";
export const isSearchLoading = (state) => get(state, "isLoading");

export const movieResults = (state) => get(state, "movieResults");

export const movieResult = (state) => get(state, "movieResult");
