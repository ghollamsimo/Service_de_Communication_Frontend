import Api from "../api/Api.ts";
import {LoginField, RegisterField} from "../constant.ts";

class AuthService {
    private http: ReturnType<typeof Api>;

    constructor() {
        this.http = Api();
    }

    register(data: RegisterField): Promise<RegisterField>{
        return this.http.post('/auth/register', data)
    }

    login(data: LoginField): Promise<{token: string}>{
        return this.http.post('/auth/login', data)
    }
}

export default new AuthService()