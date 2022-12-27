import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { setActiveSong, playPasue } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

var s = 100;

const TopPlay = () => {
  const dispatch = useDispatch();
  const [activeSong, isPlaying] = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);
  const topPlays = data?.slice(0, 5);
  const handlePlayClick = () => {
    dispatch(playPause(false));
  };
  const handlePauseClick = () => {
    dispatch(setActiveSong({ song, i, data }));
    dispatch(playPause(true));
  };
  //useEffect to scroll to top
  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div></div>
    </div>
  );
};

export default TopPlay;
