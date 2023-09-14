import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL } from "./actions"

const initialState = {   
    countries: [],      
    allCountries: [],   
    details: [],        
    allActivities: [],  
    activities: [],     
}                        

function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_ALL_COUNTRIES:
            return {                                
                ...state, 
                countries: action.payload,               
                allCountries: action.payload         
            } 

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                details: action.payload
            }
            
        default:
            return {...state} 
    }
}

export default rootReducer
