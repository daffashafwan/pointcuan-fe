import parse from "html-react-parser";
import { Link } from "react-router-dom";
export function RedeemKategori({ name, svg, id }) {
  console.log(JSON.parse(svg).svg);
  return (
    <div className="w-10 md:basis-1/6 basis-1/3 text-center w-full justify-center md:flex md:justify-center">
      <Link to={"/redeem/" + id}>
        <div className="w-12 ">{parse(JSON.parse(svg).svg)}</div>
        {/* <img src={JSON.parse(svg).svg} className=" " /> */}
        <p className="hidden md:block md:mt-1 text-center text-base">{name}</p>
      </Link>
    </div>
  );
}
