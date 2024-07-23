import FlatwareIcon from '@mui/icons-material/Flatware';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import BathroomIcon from '@mui/icons-material/Bathroom';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PaidIcon from '@mui/icons-material/Paid';
import PixIcon from '@mui/icons-material/Pix';
import ShopIcon from '@mui/icons-material/Shop';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
export default function Layout() {
    return (
        <>
            <div className="quanly">
                <h1> MANAGE PERSONAL SPENDING </h1>
              
                <p className=" are">  CATEGORY  </p>
                <div className='cacmucchitieu'>
                    <div className="you ">
                        <p> FOOD AND DRINK </p>
                        <FlatwareIcon />
                    </div>
                    <div className="you">
                        <p> TRAVEL </p>
                        <ConnectingAirportsIcon  />
                    </div>
                    <div className="you">
                        <p> CLOTHINGS </p>
                        <CheckroomIcon/>
                    </div>
                    <div className="you">
                        <p> COSMETIC  </p>
                        <TheaterComedyIcon  />
                    </div>
                    <div className="you">
                        <p> FAN </p>
                        <BathroomIcon />
                    </div>
                    <div className="you">
                        <p> DOCTOR </p>
                        <VaccinesIcon />
                    </div>
                    <div className="you">
                        <p> MONEY SCHOOL </p>
                        <PaidIcon />
                    </div>
                    <div className="you">
                        <p> HOME </p>
                        <PixIcon/>
                    </div>
                    <div className="you">
                        <p> MINIBAD </p>
                        <ShopIcon />
                    </div>
                    <div className="you">
                        <p> MOVIE </p>
                        <LocalMoviesIcon  />
                    </div>
                    <div className="you">
                        <p> COOKING </p>
                        <DirectionsCarFilledIcon />
                    </div>
                    <div className="you">
                        <p>TELEPHON  </p>
                        <AddIcCallIcon  />
                    </div>
                    
                </div>

            </div>
        </>
    )
}