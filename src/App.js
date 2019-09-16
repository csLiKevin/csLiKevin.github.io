import React, { Fragment } from "react";

import resume from "./resume";
import { Basics } from "./Basics";
import { Experience } from "./Experience";
import Education from "./Education";

export function App() {
    return (
        <Fragment>
            <Basics {...resume.basics} />
            <Experience work={resume.work} />
            <Education education={resume.education} />
        </Fragment>
    );
}

export default App;
