import {CatNestRoute} from "../domain";
import MyInfoPage from "../components/pages/MyInfoPage.tsx";
import NestPage from "../components/pages/NestPage.tsx";
import ChatRoom from "../components/pages/ChatRoom.tsx";


const routers: CatNestRoute[] = [
    new CatNestRoute("default", "/", NestPage),
    new CatNestRoute("nest", "/nest", NestPage),
    new CatNestRoute("my", "/my", MyInfoPage),
    new CatNestRoute("room", "/room", ChatRoom)
]


export {
    routers
}