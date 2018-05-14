import React from "react";

export default function TributePage() {
    return (
        <div className="jumbotron tribute-page">
            <h1 className="text-center"> John Von Neumann </h1>
            <img className="center" src="https://www.atomicheritage.org/sites/default/files/John_von_Neumann_ID_badge.png" />
            <hr/>
            <h3>Major Works</h3>
            <ul>
                <li>In 1945, mathematician John von Neumann undertook a study of computation that demonstrated that a computer could have a
            simple, fixed structure, yet be able to execute any kind of computation given properly programmed control without the need
            for hardware modification. Von Neumann contributed a new understanding of how practical fast computers should be organized
            and built; these ideas, often referred to as the stored-program technique, became fundamental for future generations of
            high-speed digital computers and were universally adopted. The primary advance was the provision of a special type of machine
            instruction called conditional control transfer--which permitted the program sequence to be interrupted and reinitiated at any
            point, similar to the system suggested by Babbage for his analytical engine--and by storing all instruction programs together
            with data in the same memory unit, so that, when desired, instructions could be arithmetically modified in the same way as
            data. Thus, data was the same as program.</li>
                <li>Von Neumann was the founder of many theories such as the Ergodic Theory, the Operator Theory, the Lattice Theory,
                Game Theory and the Measure Theory as well as a branch of geometry known as continuous geometry and the Von Neumann
                Algebras.</li>
                <li>‘Theory of Games and Economic Behavior’, which Neumann had co-authored with economist Oskar Morgenstern, is however
                his most significant work. The book, published in 1944, created the interdisciplinary research field of game theory.
                The work was based on Neumann’s 1928 research work, ‘On the Theory of Parlor Games’.</li>
            </ul>
            <h3>Awards & Achievements</h3>
            <ul>
                <li>John von Neumann had received several awards; among them Bôcher Memorial Prize (1938) </li>
                <li>Navy Distinguished Civilian Service Award (1946)</li>
                <li>Medal for Merit (1946), Medal of Freedom (1956) and Enrico Fermi Award (1956) are the most significant. </li>
            </ul>
            <h5>More info</h5>
            <ul><li><a href="https://en.wikipedia.org/wiki/John_von_Neumann">Wikipedia</a></li></ul>
        </div>
    );
}
