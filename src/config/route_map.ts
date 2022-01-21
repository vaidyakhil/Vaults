import { BaseScreen } from "../infra_schema";
import { ROUTES } from "./routes";
import Login from '../micro_frontends/login'
import SignUp from '../micro_frontends/sign_up'

const RoutesMap: { [key in ROUTES]: BaseScreen } = {
    [ROUTES.SIGN_UP_SCREEN]: SignUp.signUpScreen,
    [ROUTES.LOGIN_SCREEN]: Login.loginScreen
}

export default RoutesMap;