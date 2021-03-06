import daoFactory from "./daoFactory";

export const FILTER_LIST_KEY = "filterList";
export const defaultValue: string[] = [];

export default daoFactory(FILTER_LIST_KEY, defaultValue);
