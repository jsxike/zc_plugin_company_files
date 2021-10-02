import axios from "axios";

export function fetchFiles() {
  return async function (dispatch) {
    try {
      // setLoading();
      const res = await axios.get("/files/all");
      console.log(res.data);
      return dispatch({
        type: "FETCH_FILES_FULFILLED",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "FETCH_FILES_REJECTED",
        payload: err.message,
      });
    }
  };
}

export function setLoading() {
  return {
    type:
      "FETCH_FILES_PENDING" ||
      "ADD_FILE_PENDING" ||
      "DELETE_FILE_PENDING" ||
      "UPDATE_FILE_PENDING",
  };
}

export const checkRecentlyViewed = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/files/preview/${id}`)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export const detectViewedFile = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/files/read/${id}`)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}