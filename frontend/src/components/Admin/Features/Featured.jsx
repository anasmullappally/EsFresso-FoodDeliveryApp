import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function Featured() {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="titile">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            
          </div>
        </div>
    </div>
  )
}

export default Featured