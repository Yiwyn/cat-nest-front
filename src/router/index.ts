import {Route} from "../domain";
import MyInfoPage from "../components/pages/MyInfoPage.tsx";
import NestPage from "../components/pages/NestPage.tsx";


const routers: Route[] = [
    new Route("/", NestPage),
    new Route("/nest", NestPage),
    new Route("/my", MyInfoPage)
]


export {
    routers
}