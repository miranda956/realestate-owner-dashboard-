import http from "../HTTP/http";

class leasesDataService {
  getAllleases() {
    return http.get("/api/owners/leasedproperty");
  }

  getsingleLease(id) {
    return http.get(`/api/owner/leasedproperty/${id}`);
  }


}

export default new leasesDataService();
