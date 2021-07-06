import http from "../HTTP/http";

class landlordDataService {
  getAll() {
    return http.get("/api/get/owner");
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

  getAllPropertyOwners(){
    return http.get('/api/get/owner/property');
  }

  getSingleOwnerProperty(id){
    return http.get(`/api/get/properties/owner/:id/${id}`)
  }

  getSingleOwnerLeases(id){
    return http.get(`/api/owner/leasedproperty/:id/${id}`)
  }

  getAllOwnersLeasedPropeties(){
     return http.get(`/api/owners/leasedproperty`);

  }
}

export default new landlordDataService();
