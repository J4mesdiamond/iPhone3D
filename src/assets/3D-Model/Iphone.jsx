import React, { useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Iphone = () => {
  const gltf = useLoader(GLTFLoader, './scene.gltf');
  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);

  const startAnimation = () => {
    camera.position.set(0,2,6)

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#phone-model",
        start: "top+=200 top",
        endTrigger: "#battery",
        end: "top top",
        scrub: true,
        // markers: true,
      },
    });

    t1.fromTo(camera.position, { y: 0.5 }, { y: 0 })
      .to(scene.rotation, { y: 0.8 })
      .to(scene.rotation, {y: 3})
      .to(scene.rotation, {z: 1.58})
      .to(camera.position, {z: 4})
      .to(scene.rotation, {y:0, z:0} ,"key2")
      .to(camera.position,  {z:6, x: -0.15},"key2")
      .to(scene.rotation, {z: 0, y: 6.3 },"key3")
      .to(camera.position, {x: 0.16, y: 0},"key3");
  };

  useEffect(() => {
    startAnimation();
  }, [camera, scene]);

  return (
    <group>
      <primitive object={gltf.scene} />
    </group>
  );
};

export default Iphone;
