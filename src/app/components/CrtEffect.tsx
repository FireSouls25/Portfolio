
'use client';

import React, { useEffect, useRef } from 'react';
import { Curtains, Plane } from 'curtainsjs';
import { PlaneParams, Uniform } from 'curtainsjs';

const CrtEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const planeElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (planeElement.current) {
      const curtains = new Curtains({
        container: planeElement.current,
        pixelRatio: Math.min(1.5, window.devicePixelRatio),
      });

      const planeVs = `
        #ifdef GL_ES
        precision mediump float;
        #endif
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
        varying vec2 vTextureCoord;
        void main() {
          vTextureCoord = aTextureCoord;
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        }
      `;

      const planeFs = `
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec2 vTextureCoord;
        uniform sampler2D uSampler;
        uniform float uTime;
        void main() {
          vec2 uv = vTextureCoord;
          vec4 color = texture2D(uSampler, uv);
          float scanline = sin(uv.y * 800.0 + uTime * 5.0) * 0.02;
          color.rgb -= scanline;
          gl_FragColor = color;
        }
      `;

      const planeParams: PlaneParams = {
        vertexShader: planeVs,
        fragmentShader: planeFs,
        uniforms: {
          time: {
            name: 'uTime',
            type: '1f',
            value: 0,
          } as Uniform,
        },
      };

      const plane = new Plane(curtains, planeElement.current!, planeParams);

      const animate = () => {
        if (plane.uniforms.time) {
            (plane.uniforms.time.value as number)++;
        }
        requestAnimationFrame(animate);
      };

      animate();

      return () => {
        curtains.dispose();
      };
    }
  }, []);

  return <div ref={planeElement} className="w-full h-full fixed inset-0"><div className="crt-plane w-full h-full absolute inset-0">{children}</div></div>;
};

export default CrtEffect;
