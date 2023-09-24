import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions";
import { useEffect, useState } from "react";
const seasonOptions = ["Verano", "Otoño", "Invierno", "Primavera"]



const CreateActivity = () => {

    const dispatch = useDispatch()
    const paisesOptions = useSelector(state=>state.countries)

    useEffect(()=>{
        dispatch(getAllCountries());
    },[dispatch])

    const [selectedCountries, setSelectedCountries] = useState([])
    const [errors, setErrors] = useState(false)

    const handlerCountriesSelector = (event) => {
        if(selectedCountries.includes(event.target.value)){
            console.log('pais ya seleccionado')
        }else{
            setSelectedCountries(preState => [...preState, event.target.value])
        }
    }


   function handleSubmit(event) {
        event.preventDefault(); // se agrega para q no se refresque la pag cndo mandas el form
        const data = new FormData(event.target); //es una instancia de js para agarrar los datos de un form
        const input = {} 
        let err
        for (const key of data.entries()) {
            if(key[1].length === 0){
                setErrors(preState => [preState, `${key[0]} ta mal`])
                err = true
                setTimeout(() => {
                    setErrors(false)
                    err = false
                }, 2000);
            }else{
                input[key[0]] = key[1]
            }
        }
        input.countries = selectedCountries

        if(!err){
            dispatch(createActivity(input))
        } 

        return
    }

    function handlerDeleteAllSelectedCountries() {
        setSelectedCountries([])
    }

    function handlerDeleteSelectedCountries(countryId) {
        setSelectedCountries(preState => preState.filter(countrie => countrie !== countryId ))
    }

    return (
        <div>
            
            <form onSubmit={e => {
                    handleSubmit(e)
                }}>
                <label>Nombre</label>
                <input type="text" name="name" id="name" />

                <label>Dificultad</label>
                <input name="difficult" id="difficult" type="range" min='1' max='5' step='1'/>

                <label>Duracion</label>
                <input type="number" name="duration" id="duration" />

                <label>Temporada</label>
                <select name="season">
                    {seasonOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
                </select>

                <label>Paises</label>
                <select name="countries" onChange={handlerCountriesSelector} >
                    {paisesOptions.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
                </select>

                <li>
                    {selectedCountries.map(countrieId => {
                        return (
                        <ul key={countrieId}>
                            <button  onClick={()=>handlerDeleteSelectedCountries(countrieId)}>
                                X
                            </button>
                            {countrieId}
                        </ul>
                        )
                    })}
                </li>

                {selectedCountries.length > 0 && 
                    <button onClick={handlerDeleteAllSelectedCountries}>Remove all</button>
                }
                {errors &&   
                <li>
                    {errors.map((error, index) => {
                        return (
                        <ul key={index}>
                            {error}
                        </ul>
                        )
                    })}
                </li>}
                <button type="submit" disabled={errors}> Crea tu actividad</button>
            </form>
        </div>
    )

}

export default CreateActivity