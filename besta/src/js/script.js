import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var setArrowSelected = "q";
var arrow;
var arrow1;

window.addEventListener("resize", onResize);

function onResize() {
  "use strict";
  renderer.setSize(window.innerWidth, window.innerHeight);

  if (window.innerHeight > 0 && window.innerWidth > 0) {
    camera.aspect = renderer.getSize().width / renderer.getSize().height;
    camera.updateProjectionMatrix();
  }
}

let j = 1;

function createBeast() {
  const beast = new THREE.Group();

  const bodyGeometry = new THREE.BoxGeometry(3, 0.2, 0.5);
  const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const bodyMaterial1 = new THREE.MeshBasicMaterial({ color: 0x964b00 });

  bodyGeometry.rotateZ(Math.PI / -10);

  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  const body1 = new THREE.Mesh(bodyGeometry, bodyMaterial1);

  body.position.y = 1.5;
  body.position.z = 1.5;
  body.position.x = 8;

  body1.position.y = 1.5;
  body1.position.z = 2.3;
  body1.position.x = 8;

  const trunkGeometry = new THREE.BoxGeometry(3.5, 0.2, 0.2);
  const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);

  trunk.position.y = 2;
  trunk.position.z = 1.8;
  trunk.position.x = 7;

  trunk.rotateY(190);

  arrow = createArrow(2.29);
  arrow1 = createArrow(1.5);

  arrow.children[1].material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  arrow1.children[1].material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });

  const weightGeometry = new THREE.BoxGeometry(0.4, 0.25, 0.5);
  const weightMaterial = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const weightMaterial1 = new THREE.MeshBasicMaterial({ color: 0x964b00 });

  const weight = new THREE.Mesh(weightGeometry, weightMaterial);
  const weight1 = new THREE.Mesh(weightGeometry, weightMaterial1);

  weight.position.y = 1.4;
  weight.position.z = 1.5;
  weight.position.x = 9;

  weight1.position.y = 1.4;
  weight1.position.z = 2.3;
  weight1.position.x = 9;

  const shouldersGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const shouldersMaterial = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const shoulders = new THREE.Mesh(shouldersGeometry, shouldersMaterial);

  shoulders.position.y = 1.2;
  shoulders.position.z = 1.9;
  shoulders.position.x = 8;

  const footGeometry = new THREE.BoxGeometry(1, 0.3, 0.5);
  const footMaterialRight1 = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const footMaterialRight2 = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const footMaterialRight3 = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const footMaterialRight4 = new THREE.MeshBasicMaterial({ color: 0x964b00 });

  const footRight1 = new THREE.Mesh(footGeometry, footMaterialRight1);
  const footRight2 = new THREE.Mesh(footGeometry, footMaterialRight2);

  const footLeft1 = new THREE.Mesh(footGeometry, footMaterialRight3);
  const footLeft2 = new THREE.Mesh(footGeometry, footMaterialRight4);

  footRight1.position.y = 0.8;
  footRight1.position.z = 2.05;
  footRight1.position.x = 8;

  footRight1.rotateZ(120);
  footRight1.rotateX(7.85);

  footRight2.position.y = 0.8;
  footRight2.position.z = 1.7;
  footRight2.position.x = 8;

  footRight2.rotateZ(120);
  footRight2.rotateX(7.85);

  footLeft1.position.y = 0.8;
  footLeft1.position.z = 2.05;
  footLeft1.position.x = 8;

  footLeft1.rotateZ(-120);
  footLeft1.rotateX(-7.85);

  footLeft2.position.y = 0.8;
  footLeft2.position.z = 1.7;
  footLeft2.position.x = 8;

  footLeft2.rotateZ(-120);
  footLeft2.rotateX(-7.85);

  const baseGeometry = new THREE.BoxGeometry(0.2, 0.3, 1.5);
  const baseMaterialRight = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const baseMaterialLeft = new THREE.MeshBasicMaterial({ color: 0x964b00 });

  const baseRight = new THREE.Mesh(baseGeometry, baseMaterialRight);

  baseRight.position.y = 0.3;
  baseRight.position.z = 1.7;
  baseRight.position.x = 8;

  baseRight.rotateZ(190);
  baseRight.rotateX(-7.85);

  const baseLeft = new THREE.Mesh(baseGeometry, baseMaterialLeft);

  baseLeft.position.y = 0.3;
  baseLeft.position.z = 2.05;
  baseLeft.position.x = 8;

  baseLeft.rotateZ(190);
  baseLeft.rotateX(-7.85);

  const wheelsGeometry = new THREE.TorusGeometry(0.1, 0.05, 16, 100);
  const wheelsMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const wheelsMaterial2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const wheelsMaterial3 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const wheelsMaterial4 = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  const wheels1 = new THREE.Mesh(wheelsGeometry, wheelsMaterial1);
  const wheels2 = new THREE.Mesh(wheelsGeometry, wheelsMaterial2);
  const wheels3 = new THREE.Mesh(wheelsGeometry, wheelsMaterial3);
  const wheels4 = new THREE.Mesh(wheelsGeometry, wheelsMaterial4);

  wheels1.position.y = 0.15;
  wheels1.position.z = 1.56;
  wheels1.position.x = 8.5;

  wheels2.position.y = 0.15;
  wheels2.position.z = 1.56;
  wheels2.position.x = 7.5;

  wheels3.position.y = 0.15;
  wheels3.position.z = 2.21;
  wheels3.position.x = 8.5;

  wheels4.position.y = 0.15;
  wheels4.position.z = 2.21;
  wheels4.position.x = 7.5;

  beast.add(body);
  beast.add(body1);
  beast.add(trunk);
  beast.add(arrow);
  beast.add(arrow1);

  arrow.name = "9d063e00-e20e-4c0a-804a-df56d423ca83";
  arrow1.name = "ce091127-d896-4264-b776-41183beefb2d";

  beast.add(weight);
  beast.add(weight1);

  beast.add(shoulders);
  beast.add(footRight1);
  beast.add(footRight2);
  beast.add(footLeft1);
  beast.add(footLeft2);

  beast.add(baseRight);
  beast.add(baseLeft);

  beast.add(wheels1);
  beast.add(wheels2);
  beast.add(wheels3);
  beast.add(wheels4);

  beast.position.x += 2;

  return beast;
}

function createArro() {
  const arrowGroup = new THREE.Group();

  const arrowGeometry = new THREE.CapsuleGeometry(0.05, 0.8);
  const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const arrowTart = new THREE.Mesh(arrowGeometry, arrowMaterial);
  arrowTart.position.y += 1;
  arrowTart.position.x += 0.7;

  arrowTart.rotateZ(190);

  arrowGroup.add(arrowTart);

  const coneGeometry = new THREE.ConeGeometry(0.1, 0.2, 32);
  const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const cone = new THREE.Mesh(coneGeometry, coneMaterial);
  cone.position.y += 1;
  cone.position.x += 0.2;
  cone.rotateZ(190);

  arrowGroup.add(cone);

  return arrowGroup;
}

function createArrow(position) {
  const arrowGroup = new THREE.Group();

  const arrowGeometry = new THREE.CapsuleGeometry(0.05, 1);
  const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const arrowTart = new THREE.Mesh(arrowGeometry, arrowMaterial);

  arrowTart.position.y = 1.9;
  arrowTart.position.z = position ? position : 1.89;
  arrowTart.position.x = 7;

  arrowTart.rotateZ(190);

  arrowGroup.add(arrowTart);

  const coneGeometry = new THREE.ConeGeometry(0.1, 0.2, 32);
  const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const cone = new THREE.Mesh(coneGeometry, coneMaterial);

  arrowGroup.add(cone);

  cone.position.y = 1.9;
  cone.position.z = position ? position : 1.89;
  cone.position.x = 6.35;
  cone.rotateZ(190);

  return arrowGroup;
}

function moveArrow(arrowMove) {
  const positionXLimit = -20;
  const positionYLimit = -1.8900000000000003;

  setInterval(() => {
    if (arrowMove.position.y !== positionYLimit) {
      arrowMove.position.y -= 0.189;
    }

    if (arrowMove.position.x === positionXLimit) {
    }

    if (arrowMove.position.x !== positionXLimit) {
      arrowMove.position.x -= 1;

      persons.forEach((person) => {
        if (CheckCollisionBetweenArrows(person, arrowMove)) {
          scene.remove(arrowMove);
          const z = createArro();

          person.add(z);

          setTimeout(() => {
            person.remove(z);
          }, 3000);
        }
      });
    }

    renderer.render(scene, camera);
  }, 100);
}

function createTarget(radius) {
  const target = new THREE.Group();

  const thirdCircle = new THREE.CircleGeometry(radius, 32);
  const thirdMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const circle2 = new THREE.Mesh(thirdCircle, thirdMaterial);
  circle2.position.y = 4;
  circle2.position.z = 0.02;

  target.add(circle2);

  const fourthCircle = new THREE.CircleGeometry(0.4, 32);
  const fourthMaterial = new THREE.MeshBasicMaterial({ color: 0xfffffff });
  const circle3 = new THREE.Mesh(fourthCircle, fourthMaterial);
  circle3.position.y = 4;
  circle3.position.z = 0.03;

  target.add(circle3);

  const fifthCircle = new THREE.CircleGeometry(0.1, 32);
  const fifthMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const circle4 = new THREE.Mesh(fifthCircle, fifthMaterial);
  circle4.position.y = 4;
  circle4.position.z = 0.04;

  target.add(circle4);

  target.rotateY(190);

  target.position.y = -3;
  target.position.x = 0.1;

  return target;
}

function createPerson() {
  const person = new THREE.Object3D();

  const headGeometry = new THREE.BoxGeometry(0.1, 0.2, 0.2);
  const headMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 1.6;

  person.add(head);

  const shouldersGeometry = new THREE.BoxGeometry(0.2, 1, 0.6);
  const shouldersMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const shoulders = new THREE.Mesh(shouldersGeometry, shouldersMaterial);

  shoulders.position.y = 1;

  person.add(shoulders);

  const target = createTarget(0.4);

  person.add(target);

  const footLeftGeometry = new THREE.BoxGeometry(0.2, 1, 0.1);
  const footMaterialLeft = new THREE.MeshBasicMaterial({ color: 0x333333 });
  const footLeft = new THREE.Mesh(footLeftGeometry, footMaterialLeft);

  footLeft.position.z = -0.15;

  const footRightGeometry = new THREE.BoxGeometry(0.2, 1, 0.1);
  const footMaterialRight = new THREE.MeshBasicMaterial({ color: 0x333333 });

  const footRight = new THREE.Mesh(footRightGeometry, footMaterialRight);

  footRight.position.z = 0.15;

  person.add(footLeft);
  person.add(footRight);

  return person;
}

function createRing() {
  const ring = new THREE.Group();

  const planeGeometry = new THREE.PlaneGeometry(30, 30);
  const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0x1ad3d,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;

  const wallGeometry = new THREE.BoxGeometry(30, 2, 2);
  const wallMaterial1 = new THREE.MeshBasicMaterial({ color: 0x09d605 });
  const wall1 = new THREE.Mesh(wallGeometry, wallMaterial1);

  wall1.position.z = 15;
  wall1.position.y = 1;

  const wallMaterial2 = new THREE.MeshBasicMaterial({ color: 0x09d605 });
  const wall2 = new THREE.Mesh(wallGeometry, wallMaterial2);

  wall2.position.z = -15;
  wall2.position.y = 1;

  const wallFrontGeometry = new THREE.BoxGeometry(30, 2, 7);
  const wallFrontMaterial3 = new THREE.MeshBasicMaterial({ color: 0x09d605 });

  const wall3 = new THREE.Mesh(wallFrontGeometry, wallFrontMaterial3);

  wall3.position.x = 14.9;
  wall3.position.y = 1;
  wall3.position.z = 0;

  wall3.rotateX(Math.PI / 2);
  wall3.rotateZ(190);

  const wallFrontMaterial4 = new THREE.MeshBasicMaterial({ color: 0x964b00 });
  const wall4 = new THREE.Mesh(wallFrontGeometry, wallFrontMaterial4);

  wall4.position.x = -14.9;
  wall4.position.y = 1;
  wall4.position.z = 0;

  wall4.rotateX(Math.PI / 2);
  wall4.rotateZ(190);

  const points = [];
  for (let i = 0; i < 10; i++) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
  }
  const geometry = new THREE.LatheGeometry(points);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const lathe = new THREE.Mesh(geometry, material);

  lathe.position.y = -8;

  ring.add(plane);
  ring.add(wall1);
  ring.add(wall2);
  ring.add(wall3);
  ring.add(wall4);
  ring.add(lathe);

  return ring;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const orbit = new OrbitControls(camera, renderer.domElement);

// Helpers
const axesHelper = new THREE.AxesHelper(18);
const gridHelper = new THREE.GridHelper(30);

axesHelper.position.set(0, 3, 3);

// scene.add(gridHelper)
// scene.add(axesHelper)

const ring = createRing();

const persons = [];
const targets = [];

function addPersons(number) {
  for (let i = 0; i < number; i++) {
    let person = createPerson();
    let target = createTarget();

    person.position.z = i;
    target.position.z = i;

    scene.add(person);
    persons.push(person);
    targets.push(target);
  }
}

addPersons(10);

const beast = createBeast();

scene.add(ring);

scene.add(beast);

document.onkeydown = function (e) {
  if (e.key === "1") {
    camera.position.set(
      -0.0000011983559606359216,
      28.952231605402492,
      -0.000028954432749624435
    );
    orbit.update();
  }

  if (e.key === "2") {
    camera.position.set(
      2.0515698197258883,
      14.115196305975795,
      34.59121701412886
    );
    orbit.update();
  }

  if (e.key === "3") {
    camera.position.set(
      24.851164451435498,
      14.710943748516772,
      -2.0589983898557436
    );
    orbit.update();
  }

  if (e.key === "4") {
    scene.traverse(function (node) {
      if (node instanceof THREE.Mesh) {
        node.material.wireframe = !node.material.wireframe;
      }
    });
  }

  if (e.key === "q") {
    setArrowSelected = "q";

    arrow.children[1].material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });
    arrow1.children[1].material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
  }

  if (e.key === "w") {
    setArrowSelected = "w";
    arrow1.children[1].material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });
    arrow.children[1].material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
  }

  if (e.key === "ArrowRight" && beast.position.z != -14) {
    beast.position.z -= 1;
  }

  if (e.key === "ArrowLeft" && beast.position.z != 10) {
    beast.position.z += 1;
  }

  if (e.code === "Space") {
    if (setArrowSelected == "q") {
      var arrowSelected = createArrow();

      arrowSelected.position.z = beast.position.z;

      scene.add(arrowSelected);

      moveArrow(arrowSelected);
    }

    if (setArrowSelected == "w") {
      var arrowSelected = createArrow();

      arrowSelected.position.z = beast.position.z;

      scene.add(arrowSelected);

      moveArrow(arrowSelected);
    }
  }

  if (e.key === "m") {
    persons.forEach((person) => {
      if (j % 2 !== 0) {
        scene.remove(person);
      } else {
        scene.add(person);
      }
    });

    targets.forEach((target) => {
      if (j % 2 === 0) {
        scene.remove(target);
      } else {
        scene.add(target);
      }
    });

    j += 1;
  }
};

camera.position.set(20.65034880267236, 31.125060490651368, -2.189452849746269);
orbit.update();

renderer.render(scene, camera);

function CheckCollisionBetweenArrows(target1, target2) {
  var obj1 = new THREE.Box3().setFromObject(target1);
  var obj2 = new THREE.Box3().setFromObject(target2);

  var bounderObj1 = {
    Xmin: obj1.min.x,
    Xmax: obj1.max.x,
    Ymin: obj1.min.y,
    Ymax: obj1.max.y,
    Zmin: obj1.min.z,
    Zmax: obj1.max.z,
  };
  var bounderObj2 = {
    Xmin: obj2.min.x,
    Xmax: obj2.max.x,
    Ymin: obj2.min.y,
    Ymax: obj2.max.y,
    Zmin: obj2.min.z,
    Zmax: obj2.max.z,
  };
  if (
    bounderObj2.Xmin <= bounderObj1.Xmax &&
    bounderObj2.Xmax >= bounderObj1.Xmin &&
    bounderObj2.Ymin <= bounderObj1.Ymax &&
    bounderObj2.Ymax >= bounderObj1.Ymin &&
    bounderObj2.Zmin <= bounderObj1.Zmax &&
    bounderObj2.Zmax >= bounderObj1.Zmin
  ) {
    return true;
  }
  return false;
}

function CheckCollision(target1, target2) {
  var obj1 = new THREE.Box3().setFromObject(target1);
  var obj2 = new THREE.Box3().setFromObject(target2);

  var bounderObj1 = {
    Xmin: obj1.min.x,
    Xmax: obj1.max.x,
    Ymin: obj1.min.y,
    Ymax: obj1.max.y,
    Zmin: obj1.min.z,
    Zmax: obj1.max.z,
  };
  var bounderObj2 = {
    Xmin: obj2.min.x,
    Xmax: obj2.max.x,
    Ymin: obj2.min.y,
    Ymax: obj2.max.y,
    Zmin: obj2.min.z,
    Zmax: obj2.max.z,
  };
  if (
    bounderObj2.Xmin <= bounderObj1.Xmax &&
    bounderObj2.Xmax >= bounderObj1.Xmin &&
    bounderObj2.Ymin <= bounderObj1.Ymax &&
    bounderObj2.Ymax >= bounderObj1.Ymin &&
    bounderObj2.Zmin <= bounderObj1.Zmax &&
    bounderObj2.Zmax >= bounderObj1.Zmin
  ) {
    target1.position.z += 0.2;
    target1.position.x += 0.2;

    target2.position.z -= 0.2;
    target2.position.x -= 0.2;

    return true;
  }
  return false;
}

function animate() {
  setInterval(() => {
    persons.forEach((person) => {
      persons.flatMap((person1) =>
        persons.map((person2) => CheckCollision(person1, person2))
      );

      if (
        person.position.z >= -13 &&
        person.position.z <= 13 &&
        person.position.x >= -13 &&
        person.position.x <= 5
      ) {
        person.position.z += Math.round(Math.random()) ? 0.2 : -0.2;
        person.position.x += Math.round(Math.random()) ? 0.2 : -0.2;
      } else {
        if (Math.round(person.position.z) == -13) {
          person.position.z += 0.2;
        } else if (Math.round(person.position.z) == 13) {
          person.position.z -= 0.2;
        } else if (Math.round(person.position.x) == -13) {
          person.position.x += 0.2;
        } else if (Math.round(person.position.x) == 13) {
          person.position.x -= 0.2;
        } else if (Math.round(person.position.x) == 5) {
          person.position.x -= 0.2;
        }
      }
    });

    targets.forEach((target) => {
      if (
        target.position.z >= -13 &&
        target.position.z <= 13 &&
        target.position.x >= -13 &&
        target.position.x <= 5
      ) {
        target.position.z += Math.round(Math.random()) ? 0.2 : -0.2;
      } else {
        if (Math.round(target.position.z) == -13) {
          target.position.z += 0.2;
        } else if (Math.round(target.position.z) == 13) {
          target.position.z -= 0.2;
        } else if (Math.round(target.position.x) == -13) {
          target.position.x += 0.2;
        } else if (Math.round(target.position.x) == 13) {
          target.position.x -= 0.2;
        } else if (Math.round(target.position.x) == 5) {
          target.position.x -= 0.2;
        }
      }
    });

    renderer.render(scene, camera);
  }, 100);
}

animate();
