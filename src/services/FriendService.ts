import Api from "../api/Api.ts";

class FriendService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    getFriends(){
        return this.http.get('/friends/myfriends')
    }
}