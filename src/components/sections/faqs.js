import * as React from "react"
import { useInView } from "react-intersection-observer"
import { Accordion } from "flowbite-react"

const Faqs = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const faqs = [
        {id: 0, point: "Do I need a Denver personal injury lawyer?", description: "It’s seldom a good idea to handle your personal injury case on your own. If you do, the other party’s lawyer and insurance company are much more likely to take advantage of you and not give you anywhere near the amount of money that you need. If you suffered any kind of severe injury, an Atlanta personal injury lawyer can be invaluable in seeking the compensation you deserve. Your lawyer will be experienced with similar injuries and will speak with your doctors and medical team to get an idea of how much your prognosis will cost in the future. Plus, they’ll make you lose out on lots of money that you may not yet even know you’ll need. A personal injury lawyer can also collect evidence and discover who caused the accident. After all, they are expert investigators. Of course, an Atlanta personal injury lawyer will also prevent the other party’s insurance company from compromising your case. Insurance companies are sneaky, and if you answer their call without an attorney present, they may ask you questions or get you to make a statement that could put the blame on you."},

        {id: 1, point: "Should I call the police at the scene of a personal injury?", description: "Yes, you should call the police if someone, including yourself, has been injured. It’s always better to be safe than sorry, and wouldn’t you rather find out that you didn’t need to call the police than wish you had. Although police reports cannot be used in court as evidence, they are invaluable pieces of evidence in the insurance claims process. Insurance adjusters look to these reports to assign fault, and without one, the process will likely take much longer and be more difficult."},

        {id: 2, point: "How long do I have to file a lawsuit after a personal injury?", description: "The statute of limitations, or deadline, to file a lawsuit is two years in the state of Georgia. The countdown begins on the date of your accident, not the week or month after. It’s important that you meet this deadline because you will not be able to sue the same person for the same reason ever again.If you have questions about Georgia’s statute of limitations, call Rafi Law Firm at (404) 948-3311."},

        {id: 3, point: "What do I do when the insurance company calls?", description: "First of all, let’s make this clear: you are not required to speak with the other party’s insurance company. If they say that you are, they’re lying and you should hang up immediately. Of course, you must contact your own insurance company after being in an accident, but that’s another story. If you feel like you must, say as little as possible while still being polite. Remember that anything you say could be used against you in your claim, which means your case could be compromised and you won’t receive compensation. You should avoid saying things like, “I’m fine,” “It wasn’t that serious,” or “My injuries aren’t that bad” when speaking with the other party’s insurance. You should only answer the question being asked and never volunteer information, and never agree to have your statement recorded.If you already have a lawyer when the other party’s insurance calls you, tell them to speak with your lawyer. If you don’t, tell them you’ll call them back when you have a lawyer present, and then hire one as soon as possible."},
    ]

    return (
        <section id="process" ref={ref}>
            <div className={`container my-16 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Personal Injury Faqs</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <div className="">
                    <Accordion collapseAll>

                            {faqs.map((faq) => {
                                return (
                                    <Accordion.Panel>
                                        <Accordion.Title className="text-sm sm:text-lg font-bold px-2 py-4 text-gray-900">{faq.point}</Accordion.Title>
                                        <Accordion.Content>
                                            <p className="text-gray-900 text-md sm:text-xl text-justify mx-auto py-4">{faq.description}</p>
                                        </Accordion.Content>
                                    </Accordion.Panel>
                                )
                            })}

                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Faqs