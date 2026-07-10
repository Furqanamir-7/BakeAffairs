"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const C = {
  sponge: 0xf0a898,
  spongeAlt: 0xf5b8a8,
  frost: 0xfff5ef,
  frostBlush: 0xffe4d6,
  cherry: 0xd4566a,
  board: 0x922a28,
  candle: 0xffffff,
  flame: 0xffc857,
  sprinkle: [0xffb3c1, 0xfbc9a4, 0xffe4ec, 0xe78b67],
};

function disposeObject(obj: THREE.Object3D) {
  obj.traverse((child) => {
    const mesh = child as THREE.Mesh;
    mesh.geometry?.dispose();
    const mat = mesh.material;
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
    else mat?.dispose();
  });
}

export default function CakeShowcase() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.55, 5.0);
    camera.lookAt(0, -0.35, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.style.touchAction = "pan-y";

    scene.add(new THREE.AmbientLight(0xfff0ea, 0.7));
    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(3, 5, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffc4b0, 0.45);
    fill.position.set(-4, 1, -3);
    scene.add(fill);

    const cake = new THREE.Group();
    cake.position.y = -0.42;
    scene.add(cake);

    const soft = (color: number) =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.72,
        metalness: 0,
      });

    const spongeA = soft(C.sponge);
    const spongeB = soft(C.spongeAlt);
    const frost = soft(C.frost);
    const frostBlush = soft(C.frostBlush);

    // Tiny cake plate
    const plate = new THREE.Mesh(
      new THREE.CylinderGeometry(1.35, 1.42, 0.08, 32),
      soft(C.board)
    );
    plate.position.y = -0.72;
    cake.add(plate);

    // Two chubby tiers — cute mini cake proportions
    const tiers = [
      { r: 1.05, spongeH: 0.42, frostH: 0.14, y: -0.38, mat: spongeA },
      { r: 0.72, spongeH: 0.36, frostH: 0.12, y: 0.18, mat: spongeB },
    ];

    tiers.forEach((t, i) => {
      const sponge = new THREE.Mesh(
        new THREE.CylinderGeometry(t.r * 0.98, t.r * 1.02, t.spongeH, 28),
        t.mat
      );
      sponge.position.y = t.y;
      cake.add(sponge);

      const cap = new THREE.Mesh(
        new THREE.CylinderGeometry(t.r * 1.06, t.r * 0.98, t.frostH, 28),
        i === 0 ? frostBlush : frost
      );
      cap.position.y = t.y + t.spongeH / 2 + t.frostH / 2;
      cake.add(cap);

      // Chubby frosting dots
      const dots = 12 + i * 4;
      for (let d = 0; d < dots; d++) {
        const a = (d / dots) * Math.PI * 2;
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.035, 8, 8),
          frost
        );
        dot.position.set(
          Math.cos(a) * t.r * 1.02,
          t.y + t.spongeH / 2 + t.frostH - 0.02,
          Math.sin(a) * t.r * 1.02
        );
        cake.add(dot);
      }
    });

    const top = tiers[1];
    const topY = top.y + top.spongeH / 2 + top.frostH;

    // Rounded dollop on top
    const dollop = new THREE.Mesh(
      new THREE.SphereGeometry(0.38, 20, 14),
      frost
    );
    dollop.scale.set(1.05, 0.65, 1.05);
    dollop.position.y = topY + 0.12;
    cake.add(dollop);

    // One plump cherry — cute focal point
    const cherry = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16),
      soft(C.cherry)
    );
    cherry.scale.set(1, 0.92, 1);
    cherry.position.set(0, topY + 0.38, 0);
    cake.add(cherry);

    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.008, 0.1, 6),
      soft(0x6b9b5e)
    );
    stem.position.set(0.04, topY + 0.48, 0);
    stem.rotation.z = 0.35;
    cake.add(stem);

    // One little candle
    const candle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.028, 0.032, 0.28, 10),
      soft(C.candle)
    );
    candle.position.set(0.22, topY + 0.22, 0.12);
    cake.add(candle);

    const flame = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 10, 10),
      new THREE.MeshStandardMaterial({
        color: C.flame,
        emissive: C.flame,
        emissiveIntensity: 0.9,
        roughness: 0.2,
      })
    );
    flame.scale.set(1, 1.3, 1);
    flame.position.set(0.22, topY + 0.4, 0.12);
    cake.add(flame);

    // Colorful sprinkles
    for (let s = 0; s < 20; s++) {
      const tier = s < 12 ? tiers[0] : tiers[1];
      const a = (s / 20) * Math.PI * 6;
      const r = tier.r * (0.55 + (s % 5) * 0.08);
      const sprinkle = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.012, 0.045, 3, 6),
        soft(C.sprinkle[s % C.sprinkle.length])
      );
      sprinkle.position.set(
        Math.cos(a) * r,
        tier.y + (s % 3) * 0.08,
        Math.sin(a) * r
      );
      sprinkle.rotation.set(Math.random(), Math.random(), Math.random());
      cake.add(sprinkle);
    }

    let targetRotY = 0.4;
    let targetRotX = 0.08;
    let curRotY = 0.4;
    let curRotX = 0.08;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let autoSpin = !prefersReduced;

    const onDown = (e: PointerEvent) => {
      dragging = true;
      autoSpin = false;
      lastX = e.clientX;
      lastY = e.clientY;
      renderer.domElement.style.cursor = "grabbing";
      renderer.domElement.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      targetRotY += (e.clientX - lastX) * 0.012;
      targetRotX += (e.clientY - lastY) * 0.007;
      targetRotX = Math.max(-0.3, Math.min(0.35, targetRotX));
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      renderer.domElement.style.cursor = "grab";
      try {
        renderer.domElement.releasePointerCapture(e.pointerId);
      } catch {}
    };
    renderer.domElement.addEventListener("pointerdown", onDown);
    renderer.domElement.addEventListener("pointermove", onMove);
    renderer.domElement.addEventListener("pointerup", onUp);
    renderer.domElement.addEventListener("pointerleave", onUp);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (autoSpin) targetRotY += 0.006;
      curRotY += (targetRotY - curRotY) * 0.1;
      curRotX += (targetRotX - curRotX) * 0.1;
      cake.rotation.y = curRotY;
      cake.rotation.x = curRotX;

      if (!prefersReduced) {
        cake.position.y = -0.42 + Math.sin(t * 1.6) * 0.035;
        cake.rotation.z = Math.sin(t * 1.2) * 0.03;
        const fs = 1 + Math.sin(t * 10) * 0.18;
        flame.scale.set(fs, fs * 1.2, fs);
        (flame.material as THREE.MeshStandardMaterial).emissiveIntensity =
          0.7 + Math.sin(t * 12) * 0.3;
      } else {
        cake.position.y = -0.42;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointermove", onMove);
      renderer.domElement.removeEventListener("pointerup", onUp);
      renderer.domElement.removeEventListener("pointerleave", onUp);
      disposeObject(cake);
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
