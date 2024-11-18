import Api from "../api/Api.ts";

class ChannelService {
  private http: ReturnType<typeof Api>;

  constructor() {
    this.http = Api();
  }

  async getDmChannel(id: string) {
    return this.http.get(`/chanels/channeldm/${id}`); 
  }
}

export default new ChannelService();
