const LOADING = "LOADING";
const FETCHING = "FETCHING";
const STORING = "STORING";
const ERROR = "ERROR";

export default function(name) {
  const loadingType = name + "/" + LOADING;
  const fetchingType = name + "/" + FETCHING;
  const storingType = name + "/" + STORING;
  const errorType = name + "/" + ERROR;
  return { loadingType, fetchingType, storingType, errorType };
}
