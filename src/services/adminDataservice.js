import http from "../HTTP/http";

class AdminDataService {
  getAll() {
    return http.get("/api/staff/getall");
  }

  get(id) {
    return http.get(`/api/get/admin/:id/${id}`);
  }

  create(data) {
    return http.post("/api/admin/create", data);
  }

  update(id, data) {
    return http.put(`/api/admin/edit/:id/${id}`, data);
  }

}

export default new AdminDataService();
