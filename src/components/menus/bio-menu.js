import * as React from "react"
import { Tabs } from 'flowbite-react';

const BioMenu = () => {
    return (
        <div className="mx-4 mb-4 w-full h-48 md:h-full md:w-2/3">
            <Tabs.Group
                aria-label="Default tabs"
            >
                <Tabs.Item
                active
                title="Education"
                >
                    <ul className="text-lg mx-0">
                        <li className="py-1"><span className="font-semibold">University of Colorado - Boulder</span>, Bachelor of Arts</li>
                        <li className="py-1"><span className="font-semibold">University of Georgia School of Law</span>, Juris Doctorate</li>
                    </ul>
                </Tabs.Item>

                <Tabs.Item
                title="Publications"
                >
                    <ul className="text-lg mx-0">
                        <li className="py-1">William Neal Hollington, <span className="italic">Legal and Policy Justifications for Refusing to Grant China Market Economy Status in 2016</span>, 46 GA. J. INT’L & COMP. L. 1 (2018).</li>
                    </ul>
                </Tabs.Item>

                <Tabs.Item
                title="Recognitions"
                >
                    <ul className="text-lg mx-0">
                        <li className="py-1"><span className="font-semibold">Best Lawyers&#8482;:</span> Ones to Watch, Construction Law</li>
                        <li className="py-1"><span className="font-semibold">Best Lawyers&#8482;:</span> Ones to Watch, Commercial Litigation</li>
                    </ul>
                </Tabs.Item>
                <Tabs.Item
                title="Bar Admissions"
                >
                    <ul className="text-lg mx-0">
                        <li className="py-1">Colorado State District Courts</li>
                        <li className="py-1">United States District Court, District of Colorado</li>
                    </ul>
                </Tabs.Item>

            </Tabs.Group>
        </div>
        )
}

export default BioMenu