import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { RiArticleLine } from "react-icons/ri"

const SidebarArticles = () => {
    const data = useStaticQuery(graphql`
        query queryRecentArticles {
            allContentfulArticles(
                limit: 6,
                sort: {createdAt: DESC}
                ){
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `)
    return (
        <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 shadow-xl rounded-md">
            <h3 className="text-center text-2xl mt-2 mb-6">Popular Articles</h3>
            <ul className="flex flex-col gap-4">
                {data.allContentfulArticles.edges.map((edge) => {
                    return (
                        <li className="">
                            <Link to={`/articles/${edge.node.slug}`} className="text-lg hover:underline hover:decoration-primary hover:underline-offset-8"><RiArticleLine className="text-primary inline mr-1" />{edge.node.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default SidebarArticles