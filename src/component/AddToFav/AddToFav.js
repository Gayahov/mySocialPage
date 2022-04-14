
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './AddToFav.css'

export default function AddToFav({liked}){
    return(
        <>
<FavoriteBorderIcon style={{ color :liked?"red":"none"}}/>
        </>

    )
}
