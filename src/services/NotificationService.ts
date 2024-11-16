import Api from "../api/Api.ts";

class NotificationService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    notifications(){
        return this.http.get('')
    }
}