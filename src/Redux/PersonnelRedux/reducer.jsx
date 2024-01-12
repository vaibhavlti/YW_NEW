import {
  ADD_PERSONNEL,
  DELETE_PERSONNEL,
  EDIT_PERSONNEL,
  ADD_CONGES,
  VALID_CONGES,
} from "./actionTypes";
import { PersonnelsData } from "../../data/personnel";
const initialstate = {
  listpersonnel: PersonnelsData,
  listCongés: [],
  filter: false,
};
const personnelreducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_PERSONNEL:
      return {
        ...state,
        listpersonnel: [...state.listpersonnel, payload],
      };

    case DELETE_PERSONNEL:
      return {
        ...state,
        listpersonnel: state.listpersonnel.filter(
          (per) => per.matricule !== payload
        ),
      };
    case EDIT_PERSONNEL:
      return {
        ...state,
        listpersonnel: state.listpersonnel.map((per) =>
          per.matricule === payload.matricule ? payload : per
        ),
      };
    case ADD_CONGES:
      return {
        ...state,
        listCongés: [...state.listCongés, payload],
      };
    case VALID_CONGES:
      return {
        ...state,
        listpersonnel: state.listpersonnel.map((per) =>
          per.matricule === payload.matricule ? payload : per
        ),
      };

    default:
      return state;
  }
};
export default personnelreducer;
