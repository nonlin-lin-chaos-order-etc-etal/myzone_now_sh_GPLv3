import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>my.zone</title>
      </Helmet>
      <h1>nile starts here!</h1>
      <br/>
      <p>
        Made with help of{' '}
        a <a href="https://github.com/vercel/vercel/tree/main/examples/gatsby" target="_blank" rel="noreferrer noopener">Gatsby now.sh template</a>.
        Is an app with two directories,{' '}
        <a href="https://github.com/nonlin-lin-chaos-order-etc-etal/myzone_now_sh_GPLv3/tree/main/src"><code>/src</code></a>{' '}
        for static content and{' '}
        <a href="https://github.com/nonlin-lin-chaos-order-etc-etal/myzone_now_sh_GPLv3/tree/main/api"><code>/api</code></a>{' '}
        which contains a serverless{' '} <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date"><code>api/date</code> for the Date API with Node.js (TypeScript)</a>.
        As an example, the date according to Node.js (TypeScript) is: {date ? date : 'Loading date...'}
      </p>
      <hr/>
      Copyright © 1974.....2021 me. All Rights Reserved.
      <hr/>
      <p>
        Hosted by{' '} <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">Vercel</a>
        {' · '} 
        Powered by{' '} <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </p>
    </main>
  );
}

export default Index;
