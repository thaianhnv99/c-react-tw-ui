import { MovieItemProps } from ".";
import { BiTime } from "react-icons/bi";

const MovieItem = ({ src, title, main, runTime }: MovieItemProps) => {
  return (
    <div className="card">
      <img src={src} className="w-full object-cover h-[300px]" alt="" />
      <div className="p-4 text-white">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className="badge">
        <BiTime />
        <p>{runTime}</p>
      </div>
    </div>
  );
};

export default MovieItem;
