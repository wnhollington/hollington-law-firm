import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"

const PracticeAreas = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMdx(filter: {frontmatter: {type: {eq: "page"}}}){
            edges {
                node {
                    frontmatter {
                        title
                        practiceArea
                        slug
                    }
                }
            }
            }
        }
    `)
    const pageFilter = ["About Me", "Disclaimer", "Privacy Policy"]
    return (
        <section id="practice-ares" ref={ref}>
            <div className={`container my-16 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Cases We Handle</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.allMdx.edges.map((edge) => {
                        return (
                            pageFilter.includes(edge.node.frontmatter.title) ? null :                             <Link 
                            to={`/${edge.node.frontmatter.slug}`}
                            className="bg-primary hover:shadow-lg text-white text-md sm:text-lg font-bold p-4 rounded-lg"
                            >{edge.node.frontmatter.practiceArea}</Link>                          
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PracticeAreas