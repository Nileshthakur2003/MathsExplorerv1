import React from 'react';
import SleNav from './sleNav';

const SLELinksAndReferences = () => {
    return (
        <>
        <SleNav/>
        <div className="container mx-auto px-4 py-8 text-justify">
            <h1 className="text-3xl font-bold mb-4">System of Linear Equations: Links and References</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Historical Background</h2>
                <p className="mb-4 text-lg">
                    The study of linear equations dates back to ancient civilizations. Here are some historical references:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        <a href="https://en.wikipedia.org/wiki/History_of_linear_algebra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            History of Linear Algebra - Wikipedia
                        </a>
                    </li>
                    <li>
                        <a href="https://www.storyofmathematics.com/hellenistic_algebra.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            The Story of Mathematics - Hellenistic Algebra
                        </a>
                    </li>
                    <li>
                        <a href="https://mathshistory.st-andrews.ac.uk/HistTopics/Matrices_and_determinants/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            History of Matrices and Determinants - St Andrews University
                        </a>
                    </li>
                </ul>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Research Papers</h2>
                <p className="mb-4 text-lg">
                    For those interested in more in-depth research, here are some scholarly articles:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        <a href="https://www.jstor.org/stable/2796368" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Solving Systems of Linear Equations - JSTOR
                        </a>
                    </li>
                    <li>
                        <a href="https://link.springer.com/article/10.1007/BF02123317" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Numerical Methods for Linear Equations - Springer
                        </a>
                    </li>
                    <li>
                        <a href="https://arxiv.org/abs/1407.3015" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Algorithms for Solving Linear Systems - arXiv
                        </a>
                    </li>
                </ul>
            </section>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Books and Textbooks</h2>
                <p className="mb-4 text-lg">
                    For comprehensive study materials, consider these books:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        <a href="https://www.springer.com/gp/book/9781441975606" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Linear Algebra and Its Applications - Springer
                        </a>
                    </li>
                    <li>
                        <a href="https://www.pearson.com/store/p/introduction-to-linear-algebra/P100000661514" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Introduction to Linear Algebra - Pearson
                        </a>
                    </li>
                    <li>
                        <a href="https://press.princeton.edu/books/hardcover/9780691174654/linear-algebra-done-right" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Linear Algebra Done Right - Princeton University Press
                        </a>
                    </li>
                </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-semibold mb-2">Online Courses and Tutorials</h2>
                <p className="mb-4 text-lg">
                    Boost your understanding with these online resources:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        <a href="https://www.coursera.org/learn/linear-algebra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Linear Algebra Course - Coursera
                        </a>
                    </li>
                    <li>
                        <a href="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Linear Algebra - MIT OpenCourseWare
                        </a>
                    </li>
                    <li>
                        <a href="https://www.khanacademy.org/math/linear-algebra" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Linear Algebra - Khan Academy
                        </a>
                    </li>
                </ul>
            </section>
        </div>
        </>
    );
}

export default SLELinksAndReferences;
