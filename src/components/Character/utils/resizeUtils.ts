import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  cleanupCharTimeline,
  setCharTimeline,
  setAllTimeline,
} from "../../utils/GsapScroll";
import { getAdaptiveDPR } from "../../../utils/device";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  const canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  renderer.setPixelRatio(getAdaptiveDPR());
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  cleanupCharTimeline();
  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger !== workTrigger) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
