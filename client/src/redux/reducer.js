import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY_BY_NAME, ORDER_BY_NAME, ORDER_BY_POBLATION, FILTER_BY_CONTINENT} from "./actions"

const initialState = {   
    countries: [],      
    allCountries: [],   
    details: [],        
    allActivities: [],  
    activities: [],     
}                        

function rootReducer(state = initialState, action) {

    switch (action.type) {
      case GET_ALL_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
          allCountries: action.payload,
        }

      case GET_COUNTRY_DETAIL:
        return {
          ...state,
          details: action.payload,
        }
      case GET_COUNTRY_BY_NAME: 
        return {
          ...state,
          countries: action.payload,
        }

      case ORDER_BY_NAME:
       const orderCountryByName = action.payload === 'asc' ? state.allCountries.sort((a, b) => {
          if (a.name > b.name) return 1

          if (a.name < b.name) return -1

          return 0
        
         }) : action.payload === 'desc' ? state.allCountries.sort((a, b) => {

          if (a.name > b.name) return -1

          if (a.name < b.name) return 1

          return 0
          
          }) : [...state.countries]
          
          return {
              ...state,
              countries: orderCountryByName
          }

        case ORDER_BY_POBLATION:
          const orderByPoblation = action.payload === "asc" ? state.countries.sort((a, b)=>{
            if(Number(a.population) < Number(b.population)){
                return -1;
            }
            if(Number(a.population) > Number(b.population)){
                return 1;
            }
            return 0;
        }) :
        state.countries.sort((a, b)=>{
            if(Number(a.population) < Number(b.population)){
                return 1;
            }
            if(Number(a.population) > Number(b.population)){
                return -1;
            }
            return 0;
        });
        return {...state, 
          countries: orderByPoblation};

      case FILTER_BY_CONTINENT:
        const paises = state.allCountries;
        const paisesFiltered = action.payload === "" ? state.allCountries 
        : paises.filter(pais => pais.continent === action.payload );
        return {...state, 
          countries: paisesFiltered}

      default:
        return { ...state };
    }
}

export default rootReducer
