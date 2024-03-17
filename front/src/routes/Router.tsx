import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../page/Home";
import { Chat } from "../page/Chat";

export const routers = () => {
    return createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route index element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </>
        )
    )
}