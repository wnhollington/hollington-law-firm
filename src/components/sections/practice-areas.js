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
        query PracticeAreas {
            allContentfulPracticeAreas(
                filter: {featuredPracticeArea: {eq: true}}
                limit: 6
                sort: {title: ASC}
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
        <section id="practice-areas" ref={ref}>
            <div className={`container my-16 lg:my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Cases We Handle</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.allContentfulPracticeAreas.edges.map((edge, index) => {
                        return (
                            <Link 
                            to={`/practice-areas/${edge.node.slug}`}
                            key={index}
                            className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md"
                            >{edge.node.title}</Link>                          
                        )
                    })}
                </div>
                <div className="my-12">
                    <Link to={`/practice-areas`} className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md">View All</Link>       
                </div>
            </div>
        </section>
    )
}

export default PracticeAreas