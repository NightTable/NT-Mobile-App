export const LOADING = "LOADING";

//Reset Common async loader for data dispatch
export const resetLoader = (loaderValue) => {
  return async () => {
    // const
    dispatch({
      type: LOADING,
      loading: loaderValue,
    });
  };
};
