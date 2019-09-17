import React from "react";

import resume from "./resume";
import { Basics } from "./Basics";
import { Experience } from "./Experience";
import Education from "./Education";

export function App() {
    return (
        <div className="lux">
            <Basics {...resume.basics} />
            <Experience work={resume.work} />
            <Education education={resume.education} />
        </div>
    );
}

export default App;
