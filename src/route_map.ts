import { BaseRouteMap } from './infra_schema';
import Login from './micro_frontends/login'
import SignUp from './micro_frontends/sign_up'
import { ROUTES } from './routes';

const RoutesMap: BaseRouteMap = {
    [ROUTES.SIGN_UP_SCREEN]: SignUp.signUpScreen,
    [ROUTES.LOGIN_SCREEN]: Login.loginScreen
}

export default RoutesMap;