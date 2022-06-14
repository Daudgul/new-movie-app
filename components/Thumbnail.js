import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  // console.log(result);
  //   const BASE_URL = "https://image.tmdb.org/t/p/orignal/";
  const IMGPATH = "https://image.tmdb.org/t/p/w400";
  return (
    <div ref={ref} className="main__card--item">
      <Image
        layout="responsive"
        src={`${IMGPATH}${result.poster_path || result.dackdrop_path}`}
        alt="description of image"
        height={1000}
        width={1000}
        priority={
          result.poster_path === "49WJfeN0moxb9IPfGn8AIqMGskD.jpg" ||
          "q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
        }
      />

      <div className="p-2">
        <p className="overview">{result.overview}</p>
        <h2 className="card__heading">
          {result.title || result.original_name}
        </h2>
        <p className="release__info">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date} .{""}
          <ThumbUpIcon className="thumb__icon" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});
Thumbnail.displayName = "MyApp";
export default Thumbnail;
