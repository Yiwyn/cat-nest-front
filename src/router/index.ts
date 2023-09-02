import {CatNestRoute} from "../domain";
import MyInfoPage from "../components/pages/MyInfoPage.tsx";
import NestPage from "../components/pages/NestPage.tsx";


const routers: CatNestRoute[] = [
    new CatNestRoute("default", "/", NestPage),
    new CatNestRoute("nest", "/nest", NestPage),
    new CatNestRoute("my", "/my", MyInfoPage)
]


export {
    routers
}