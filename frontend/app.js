/* Initial setup */
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x427af4);
var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1800 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

/* iOS touchstart dimming fix */
renderer.domElement.addEventListener('touchstart', function(e) {
  e.preventDefault();
});


/* Point field */
var pointsGeometry = new THREE.Geometry();
window.points.forEach(function(coords) {
  var point = new THREE.Vector3();
  point.x = coords[0];
  point.y = coords[1];
  point.z = coords[2];
  pointsGeometry.vertices.push(point);
});

var material = new THREE.PointsMaterial({
  color: 0xff7072,
  size: 3,
});

var pointField = new THREE.Points(pointsGeometry, material);
scene.add(pointField);


/* Bottom plane */
var planeGeometry = new THREE.PlaneGeometry(150, 150);
var planeMaterial = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.2,
});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.set(-Math.PI/2, Math.PI/2000, Math.PI);
plane.position.x = 50;
plane.position.z = 70;
plane.position.y = -20;
scene.add(plane);


/* Controls */
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 700;
controls.maxDistance = 1400;
controls.maxAzimuthAngle = 1.7;
controls.minAzimuthAngle = -0.2;
controls.maxPolarAngle = 1.7;

var center = new THREE.Vector3(center[0], center[1], center[2]);
controls.target = center;

controls.update();


/* Render loop */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
