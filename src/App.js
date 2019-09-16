import React, { Fragment } from "react";

import resume from "./resume";
import { Basics } from "./Basics";
import { Experience } from "./Experience";

export function App() {
    return (
        <Fragment>
            <Basics {...resume.basics} />
            <Experience work={resume.work} />
        </Fragment>
    );
}

export default App;
