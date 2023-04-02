import axios from "axios";
import {
  ChangeAccess,
  chart,
  DeleteArt,
  DeleteDoc,
  DeleteUser,
  Pagearts,
  Pagedocs,
  StatisticsArts,
  StatisticsDocs,
  StatisticsUsers,
} from "./apiConstan.js";
// const API_URL = "https://api-lro.onrender.com";
export const API_URL = process.env.REACT_APP_API_KEY;

export class api {
  async LOGIN(data) {
    return axios({
      method: "post",
      // url: "http://localhost:8080/api/login",
      url: `${API_URL}/api/login`,
      data,
    });
  }

  async FUNC_GET_STATISTICSUSERS() {
    return axios({
      method: "get",
      url: StatisticsUsers,
    });
  }

  async FUNC_GET_STATISTICSDOCS() {
    return axios({
      method: "get",
      url: StatisticsDocs,
    });
  }

  async FUNC_GET_STATISTICSARTS() {
    return axios({
      method: "get",
      url: StatisticsArts,
    });
  }

  async FUNC_GET_CHART() {
    return axios({
      method: "get",
      url: chart,
    });
  }

  async FUNC_GET_PAGE_DOCS(page, cate) {
    return axios({
      method: "get",
      url: Pagedocs,
      params: { page: page, cate: cate },
    });
  }

  async FUNC_GET_PAGE_ARTS(page) {
    return axios({
      method: "get",
      url: Pagearts,
      params: { page: page },
    });
  }

  async FUNC_DELETE_USER(_id) {
    return axios({
      method: "post",
      url: DeleteUser,
      data: { _id: _id },
    });
  }

  async FUNC_DELETE_DOC(userId, _id) {
    return axios({
      method: "post",
      url: DeleteDoc,
      data: { _id: _id, userId: userId },
    });
  }
  async FUNC_DELETE_ART(userId, _id) {
    return axios({
      method: "post",
      url: DeleteArt,
      data: { _id: _id, userId: userId },
    });
  }

  async FUNC_CHANGE_PASS(auth, data) {
    return axios({
      method: "post",
      headers: { auth: auth },
      url: `${API_URL}/user/changepass`,

      // url: `http://localhost:8080/apiart/changepass`,
      data,
    });
  }

  async FUNC_UPDATE_PROFILE_USER(auth, data) {
    return axios({
      method: "post",
      headers: { auth: auth },
      url: `${API_URL}/user/updateinfo`,
      // url: `http://localhost:8080/apiart/updateinfo`,
      data,
    });
  }

  async FUNC_VIEW_PROFILE_USER(_id) {
    return axios({
      method: "post",
      // headers: { auth: auth },
      url: `${API_URL}/api/user`,

      // url: `http://localhost:8080/api/user/`,
      data: {
        _id: _id,
      },
    });
  }

  async FUNC_CHANGE_ACCESS_USER(_id) {
    return axios({
      method: "post",
      // headers: { auth: auth },

      url: ChangeAccess,
      data: {
        _id: _id,
      },
    });
  }

  async FUNC_CALL_USER(_id) {
    return axios({
      method: "post",
      // headers: { auth: auth },
      url: `${API_URL}/api/user`,
      // url: `http://localhost:8080/api/user/`,
      data: {
        _id: _id,
      },
    });
  }

  async FUNC_GET_DOC(_id) {
    return axios({
      method: "post",
      // headers: { auth: auth },
      url: `${API_URL}/api/findonedoc`,
      // url: `http://localhost:8080/api/findonedoc`,
      data: {
        _id: _id,
      },
    });
  }

  async FUNC_GET_ART(_id) {
    return axios({
      method: "post",
      // headers: { auth: auth },
      url: `${API_URL}/api/findoneart`,

      // url: `http://localhost:8080/api/findoneart`,
      data: {
        _id: _id,
      },
    });
  }
}
