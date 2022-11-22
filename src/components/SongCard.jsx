import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { Link } from "react-router-dom";
const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  const handlePlayClick = () => {
    dispatch(playPause(false));
  };
  const handlePauseClick = () => {
    dispatch(setActiveSong({ song, i, data }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5  bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center item-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            handlePaly={handlePlayClick}
            handlePause={handlePauseClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img alt="song__img  " src={song.images?.coverart} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semi-bold text-lg text-white truncate ">
          <Link>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1 ">
          <Link>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
