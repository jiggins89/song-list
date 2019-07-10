import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Hey ya", duration: "4:00" },
    { title: "Roses", duration: "3:30" },
    { title: "Gangsters Paradise", duration: "4:10" },
    { title: "Hot in here", duration: "2:40" }
  ];
};

const selectSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectSong: selectSongReducer
});
