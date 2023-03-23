import axios from "axios";
import {
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
export class api {
  async LOGIN(data) {
    return axios({
      method: "post",
      url: "http://localhost:8080/api/login",
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
}
