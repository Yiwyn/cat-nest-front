import {Route} from "../domain";
import Example from "../components/pages/Example.tsx";
import NestPage from "../components/pages/NestPage.tsx";


const routers: Route[] = [
    new Route("/", NestPage),
    new Route("/nest", NestPage),
    new Route("/my", Example)
]


export {
    routers
}