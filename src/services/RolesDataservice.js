import http from "../HTTP/http";

class RolesDataService {
  getAll() {
    return http.get("/all/admins");
  }

  get(id) {
    return http.get(`/api/owner/profile/:id/${id}`);
  }

  create(data) {
    return http.post("/api/create/owner", data);
  }

  update(id, data) {
    return http.put(`/api/owner/edit/:id/${id}`, data);
  }

}

export default new RolesDataService();
