import { daoFactory } from "../storage";

export const PREFERENCE_LIST_KEY = "preferenceList";
export const defaultValue = [];

export default daoFactory(PREFERENCE_LIST_KEY, defaultValue);
