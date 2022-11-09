import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-11/12 mx-auto my-20'>
            <h1 className='text-3xl font-bold mb-5'>Blogs Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='bg-slate-400 rounded-xl p-12 text-start'>
                    <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-1</h1>
                    <p className='md:text-xl'><strong>Difference between SQL and NoSQL:</strong> SQL is the programming language used 
                    to interface with relational databases. (Relational databases model data as records in rows 
                    and tables with logical links between them). 
                    NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br /> <br />
                    SQL databases are efficient at processing queries and joining data across tables, making it
                    easier to perform complex queries against structured data, including ad hoc requests. NoSQL 
                    databases lack consistency across products and typically require more work to query data, 
                    particular as query complexity increases.
                    </p>
                </div>
                <div className='bg-slate-400 rounded-xl p-12 text-start'>
                    <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-2</h1>
                    <p className='md:text-xl'><strong>JWT is: And it works</strong> What is JWT (JSON
                    Web Token)? 
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information 
                    between parties as JSON object. It is compact, readable and digitally signed using a private 
                    key/ or a public key pair by the Identity Provider(IdP). <br /> <br />
                    JWT is mainly used for APIs while OAuth can be used for web, browser, API, and various apps or 
                    resources. JWT token vs oauth token: JWT defines a token format while OAuth deals in defining 
                    authorization protocols. JWT is simple and easy to learn from the initial stage while OAuth is 
                    complex. <br /> <br />
                    Information Exchange: JWTs are a good way of securely transmitting information between parties 
                    because they can be signed, which means you can be sure that the senders are who they say they 
                    are. Additionally, the structure of a JWT allows you to verify that the content hasn't been 
                    tampered with.
                    </p>
                </div>
                <div className='bg-slate-400 rounded-xl p-12 text-start'>
                    <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-3</h1>
                    <p className='md:text-xl'><strong>The difference between Javascript and NodeJS:</strong> JavaScript 
                    is a simple programming language that can be used with any browser that has the JavaScript 
                    Engine installed. Node. js, on the other hand, is an interpreter or execution environment for 
                    the JavaScript programming language. <br /> <br />
                    To summarize, Node. js is a cross-platform JavaScript runtime environment for servers and 
                    applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 
                    JavaScript engine, and a low-level I/O API. <br /> <br />
                    The short answer is yes, you need to learn JavaScript in order to use Nodejs. Nodejs is a toolkit
                    built around JavaScript and all of the code you will be writing will be in JavaScript.
                    </p>
                </div>
                <div className='bg-slate-400 rounded-xl p-12 text-start'>
                    <h1 className='text-2xl font-bold mb-5'>Answare To the Question No-4</h1>
                    <p className='md:text-xl'><strong>NodeJS is handle multiple requests at the same time:</strong> 
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places 
                    them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has 
                    its own EventLoop which is an infinite loop that receives requests and processes them. <br /> <br />
                    Node. js runs JavaScript code in a single thread, which means that your code can only do one task 
                    at a time. However, Node. js itself is multithreaded and provides hidden threads through the libuv 
                    library, which handles I/O operations like reading files from a disk or network requests.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;