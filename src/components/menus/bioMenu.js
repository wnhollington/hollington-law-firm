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
                    <ul>
                        <li><span className="font-semibold">University of Colorado - Boulder</span>, Bachelor of Arts</li>
                        <li><span className="font-semibold">University of Georgia School of Law</span>, Juris Doctorate</li>
                    </ul>
                </Tabs.Item>

                <Tabs.Item
                title="Publications"
                >
                    <ul>
                        <li>William Neal Hollington, <span className="italic">Legal and Policy Justifications for Refusing to Grant China Market Economy Status in 2016</span>, 46 GA. J. INT’L & COMP. L. 1 (2018).</li>
                    </ul>
                </Tabs.Item>

                <Tabs.Item
                title="Recognitions"
                >
                    <ul>
                        <li><span className="font-semibold">Best Lawyers&#8482;:</span> Ones to Watch, Construction Law</li>
                        <li><span className="font-semibold">Best Lawyers&#8482;:</span> Ones to Watch, Commercial Litigation</li>
                    </ul>
                </Tabs.Item>

            </Tabs.Group>
        </div>
        )
}

export default BioMenu