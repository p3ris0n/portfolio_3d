import * as THREE from 'three';

// crreting the scene.
const scene = THREE.scene = new THREE.Scene();
scene.backgrouund = new THREE.Color('#F0F0F0');

// creating the camera.
const camera = THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// creating the object.
const geometry  = new THREE.BoxGeometry();
const material  = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' })

const cube = new THREE.Mesh(geometry, material);

// add the cube to the scene.
scene.add(cube);

// creating lighting.
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(0, 1, 1);
scene.add(light);

// add renderer.
const renderer = THREE.WebGLRenderer();
renderer.setSize(window, innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// animation function for the scene.
renderer.render(scene, camera);
