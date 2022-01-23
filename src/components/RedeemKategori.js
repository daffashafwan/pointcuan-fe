import parse from 'html-react-parser'
import { Link } from 'react-router-dom';
export function RedeemKategori({ name, svg, id }) {
    console.log(JSON.parse(svg).svg)
    return (
        <div className="mx-2 w-10 basis-1/6">
            <Link to={"/redeem/"+id}>
            <div className="w-1/4">
                {parse(JSON.parse(svg).svg)}
            </div>
              {/* <img src={JSON.parse(svg).svg} className=" " /> */}
              <p className="hidden md:block md:mt-1">{name}</p>
            </Link>
          </div>
    );
}