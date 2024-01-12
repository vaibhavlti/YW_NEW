import {
  ADD_PERSONNEL,
  DELETE_PERSONNEL,
  EDIT_PERSONNEL,
  ADD_CONGES,
  VALID_CONGES,
} from "./actionTypes";

//add personnel
export const addPersonnel = (newpersonnel) => {
  return {
    type: ADD_PERSONNEL,
    payload: newpersonnel,
  };
};
//delete personnel
export const deletePersonnel = (matricule) => {
  return {
    type: DELETE_PERSONNEL,
    payload: matricule,
  };
};
//edit personnel
export const editPersonnel = (editedpersonnel) => {
  return {
    type: EDIT_PERSONNEL,
    payload: editedpersonnel,
  };
};
//demande Conges
export const AddConges = (newCongés) => {
  return {
    type: ADD_CONGES,
    payload: newCongés,
  };
};
//valid congés
export const ValidCongés = (person) => {
  return {
    type: VALID_CONGES,
    payload: person,
  };
};
