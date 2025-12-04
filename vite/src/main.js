import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

// creating the scene.
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// creating the camera.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// creating the object.
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({color: '#468585', emissive: '#468585' }); // teal color.
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({color: '#b4b4b3'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

// add the objects to the scene.
scene.add(dodecahedron);
scene.add(box);

// creating lighting.
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// add renderer.
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


// add orbit controlsl
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // make controls smoother
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// adding animations
function animate() {
  requestAnimationFrame(animate);

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  box.rotation.y +=0.005;

  controls.update(); // so the damping takes effect.
  
  renderer.render(scene, camera);

}

animate();