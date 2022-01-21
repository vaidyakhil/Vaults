import { BaseScreen } from "../infra";
import { ROUTES } from "./routes";
import Login from '../micro_frontends/login'

const RoutesMap: { [key in ROUTES]: BaseScreen } = {
    [ROUTES.SIGN_UP_SCREEN]: Login.loginScreen,
    [ROUTES.LOGIN_SCREEN]: Login.loginScreen
}