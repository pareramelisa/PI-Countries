import { NavLink } from 'react-router-dom'

const Card = ({imageFlag, name, continent, id}) => {
    return (
        <div>
            <img src={imageFlag} alt="Img not found" width='200px' height='250px'/>
            <h3>{name}</h3>
            <h5>{continent}</h5>
            <NavLink to={`/countries/${id}`}>
                <button>Details</button>
            </NavLink>
        </div>
        
    )
}

export default Card 