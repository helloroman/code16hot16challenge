// SETUP START
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(0xeeeeee);
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
const scene = new THREE.Scene();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 20);
scene.add(new THREE.AmbientLight(0xffffff, 1));
// SETUP END

// CODE16 START!!
const createFrame = (size) => {
  const edges = new THREE.EdgesGeometry(new THREE.PlaneGeometry(size, size));
  const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x000000}));
  scene.add(line);
}
for (let i = 0; i <= 100; i++) {
  createFrame(i/10);
}
const loop = () => {
  for (let i = 0; i < scene.children.length; i++) {
    scene.children[i].rotation.x += 0.0001 * i;
    scene.children[i].rotation.y += 0.00001 * i;
  }
  requestAnimationFrame(loop);
  renderer.render(scene, camera);
}
loop();



