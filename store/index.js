export const state = () => ({
  darkMode: process.server
    ? false
    : localStorage.getItem("darkMode") == "true"
    ? Boolean(true)
    : Boolean(false),
});

export const mutations = {
  //mutations untuk mengubah state di atas
  SET_BG_MODE(state, payload) {
    localStorage.setItem("darkMode", payload);
    state.darkMode = payload;
  },
};
