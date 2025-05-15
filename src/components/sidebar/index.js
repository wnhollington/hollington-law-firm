import * as React from "react"

import SidebarProfile from "./profile"
import SidebarReview from "./reviews"
import SidebarArticles from "./articles"
import SidebarForm from "./form"

const Sidebar = () => {

    return (
        <aside className="px-2 flex flex-col gap-8 max-w-md mx-auto">

            <SidebarProfile />
            <SidebarReview />
            <SidebarArticles />
            <div className="self-start w-full">
                <SidebarForm />
            </div>
        </aside>
    )
}

export default Sidebar

