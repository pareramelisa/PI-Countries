import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_COUNTRY_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_POBLATION,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  FILTER_BY_ACTIVITIES,
  CREATE_ACTIVITY,
} from "./actions";

const initialState = { //seteamos nuestros estados vacios para guardarles data 
  countries: [],
  allCountries: [],
  details: [],
  allActivities: [],
  activities: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state, //lo q hay en el estado
        countries: action.payload, //el payload de la action que es todos los paises que le pedimos al backend, lo guardamos en los dos estados 
        allCountries: action.payload, //hacemos countries y all countries porque uno es el que siempre se va a quedar igual para poder mostrar todos los paises y otro es el q vamo a modificar
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case ORDER_BY_NAME:
      const orderCountryByName =
        action.payload === "asc" //si el value es ascendente osea de la a a la z
          ? state.countries.sort((a, b) => {
              if (a.name > b.name) return 1;

              if (a.name < b.name) return -1;

              return 0;
            })
          : action.payload === "desc"
          ? state.countries.sort((a, b) => {
              if (a.name > b.name) return -1;

              if (a.name < b.name) return 1;

              return 0;
            })
          : [...state.countries];

      return {
        ...state,
        countries: orderCountryByName, //seteamos el estado con el array de arriba 
      };

    case ORDER_BY_POBLATION:
      const orderByPoblation =
        action.payload === "asc"
          ? state.countries.sort((a, b) => {
              if (Number(a.population) < Number(b.population)) {
                return -1;
              }
              if (Number(a.population) > Number(b.population)) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort((a, b) => {
              if (Number(a.population) < Number(b.population)) {
                return 1;
              }
              if (Number(a.population) > Number(b.population)) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderByPoblation,
      };

    case FILTER_BY_CONTINENT:
      const paises = state.countries;
      const paisesFiltered =
        action.payload === "All"
          ? state.allCountries
          : paises.filter((pais) => pais.continent === action.payload);
      return {
        ...state,
        countries: paisesFiltered,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        allActivities: action.payload,
      };

    case FILTER_BY_ACTIVITIES:
      const activities = state.activities;
      const paisesFiltrados = activities.filter((activitie) => {
        return activitie.name === action.payload
      });
console.log(paisesFiltrados[0].Countries)
      if (action.payload === "All") {
        return {
          ...state,
          countries: state.allCountries,
        };
      } else {
        return {
          ...state,
          countries: paisesFiltrados[0].Countries,
        };
      }

    case CREATE_ACTIVITY:
      return { ...state };

    default:
      return { ...state };
  }
}

export default rootReducer;
