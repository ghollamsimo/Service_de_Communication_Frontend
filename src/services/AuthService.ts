import Api from "../api/Api.ts";
import {RegisterField} from "../constant.ts";

class AuthService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    register(data: RegisterField): Promise<RegisterField>{
        return this.http.post('/auth/register', data)
    }
}

export default new AuthService()