import * as React from "react"

import SidebarProfile from "./profile"
import SidebarReview from "./reviews"
import SidebarArticles from "./articles"
import SidebarForm from "./form"

const Sidebar = () => {

    return (
        <aside className="m-2 p-2 flex flex-col gap-8 max-w-md mx-auto">

            <SidebarProfile />
            <SidebarReview />
            <SidebarArticles />
            <SidebarForm />

        </aside>
    )
}

export default Sidebar

