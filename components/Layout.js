import Head from 'next/head';
import { useContext, useState } from 'react';
import AppContext from './AppContext';
import Link from 'next/link'

const Layout = props => {

    const { signOut, user } = useContext(AppContext);

    return (
        <div className="content-wrapper">
            <Head>
                <title>{props.title ? `${props.title} | Cool App` : 'Cool App'}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>

            <div className="main-content">
                <header>
                    {user && (
                        <>

                            <button className="btn" onClick={signOut}>
                                Sign Out
                        </button>
                            <Link href="/"><button className="btn">Home</button></Link>
                            <h1>Welcome {user}</h1>
                        </>
                    )}

                </header>
                {props.children}
            </div>

            <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          height: 100%;
        }

        body {
          margin: 0;
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
          background: #fff;
          background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
          color: #353535;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
            'Lucida Grande', sans-serif;
          text-rendering: optimizeLegibility;
          height: 100%;
        }

        a {
          color: #353535;
          text-decoration: none;
        }

        a:hover {
          color: #151515;
        }

        h1,
        h2,
        h3 {
          margin: 40px 0 30px;
        }

        h1 {
          font-size: 42px;
        }

        h2 {
          font-size: 36px;
        }

        p {
          margin: 0 0 10px;
        }

        .btn {
          background: #111;
          padding: 12px 24px;
          color: #fff;
          font-size: 18px;
          border: 0;
          border-radius: 4px;
          cursor: pointer;
          margin: 1 rem;
        }

        /* Layout */

        .content-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 150px;
          margin: 0 30px;
        }
      `}</style>
        </div>
    );
};

export default Layout;
