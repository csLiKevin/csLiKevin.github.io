import React, {Fragment} from "react";

import resume from "./resume";
import {Basics} from "./Basics";

export function App() {
    return (
        <Fragment>
            <Basics {...resume.basics} />
        </Fragment>
    );
}

export default App;
