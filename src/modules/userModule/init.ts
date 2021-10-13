import App from "../../App";
import Routes from "./routes";
class UserModule {
    constructor (routePath: string, app: App) {
        console.log("load User modules");
        const routes: Routes  = new Routes(routePath, app);
    }
}
export default UserModule;