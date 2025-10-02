'use client';

import React from 'react';

const Testimonies: React.FC = () => {
  return (
    <div className="text-foreground font-mono p-4">
      <h1 className="text-6xl mb-4 text-main-100">Testimonies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-xl mb-4">
            Fusce sit amet tortor quis erat dapibus viverra.
            Mauris congue tempor lorem, vel tristique orci
            egestas ac.
          </p>
          <p className="text-xl mb-4 text-main-70">
            - tal
          </p>
        </div>
        <div>
          <p className="text-xl mb-4">
            Nunc et lacus ut nisl blandit sodales in
            ut diam. Etiam lobortis, orci ut semper
            cursus, diam tortor molestie dolor.
          </p>
          <p className="text-xl mb-4 text-main-70">
            - tal.2
          </p>
        </div>
        <div>
          <p className="text-xl mb-4">
            Vestibulum ut luctus augue. Sed orci enim,
            venenatis at dui vitae, dictum venenatis nisi.
            Vestibulum facilisis felis purus.
          </p>
          <p className="text-xl mb-4 text-main-70">
            - tal.3
          </p>
        </div>
        <div>
          <p className="text-xl mb-4">
            Donec viverra risus eu ex rutrum, in
            lobortis ex faucibus. Suspendisse at
            pharetra mauris.
          </p>
          <p className="text-xl mb-4 text-main-70">
            - tal.4
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
