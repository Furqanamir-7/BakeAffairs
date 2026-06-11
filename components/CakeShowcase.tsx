"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GOLD = 0xd9b779;
const GOLD_SOFT = 0xc4956a;
const CREAM = 0xe8d5b7;
const BERRY = 0xd98a7a;

export default function CakeShowcase() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 1.6, 9.2);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.style.touchAction = "pan-y";

    const cake = new THREE.Group();
    scene.add(cake);

    const mat = (color: number, opacity = 0.85) =>
      new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
      });

    // ---- Three stacked tiers (wireframe lattice like the globe) ----
    type Tier = { radius: number; height: number; y: number };
    const tiers: Tier[] = [
      { radius: 2.1, height: 1.0, y: -1.35 },
      { radius: 1.5, height: 0.85, y: -0.42 },
      { radius: 0.95, height: 0.7, y: 0.35 },
    ];

    tiers.forEach((t, i) => {
      const geo = new THREE.CylinderGeometry(
        t.radius,
        t.radius * 1.04,
        t.height,
        28,
        3,
        true
      );
      const wire = new THREE.WireframeGeometry(geo);
      const lines = new THREE.LineSegments(
        wire,
        mat(i === 1 ? GOLD : GOLD_SOFT, 0.55)
      );
      lines.position.y = t.y;
      cake.add(lines);

      // top + bottom rims (solid bright rings for definition)
      [t.height / 2, -t.height / 2].forEach((dy) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(t.radius * (dy > 0 ? 1 : 1.04), 0.025, 8, 40),
          new THREE.MeshBasicMaterial({ color: GOLD })
        );
        ring.rotation.x = Math.PI / 2;
        ring.position.y = t.y + dy;
        cake.add(ring);
      });

      // cream drip ring near the top edge of each tier
      const dripCount = 14 + i * 2;
      for (let d = 0; d < dripCount; d++) {
        const a = (d / dripCount) * Math.PI * 2;
        const drip = new THREE.Mesh(
          new THREE.SphereGeometry(0.07, 8, 8),
          new THREE.MeshBasicMaterial({ color: CREAM, transparent: true, opacity: 0.9 })
        );
        drip.position.set(
          Math.cos(a) * t.radius,
          t.y + t.height / 2 - 0.04,
          Math.sin(a) * t.radius
        );
        cake.add(drip);
      }
    });

    // ---- Cherries around the top tier ----
    const topTier = tiers[2];
    const cherryRingY = topTier.y + topTier.height / 2 + 0.12;
    for (let c = 0; c < 7; c++) {
      const a = (c / 7) * Math.PI * 2;
      const cherry = new THREE.Mesh(
        new THREE.SphereGeometry(0.13, 12, 12),
        new THREE.MeshBasicMaterial({ color: BERRY })
      );
      cherry.position.set(
        Math.cos(a) * (topTier.radius - 0.18),
        cherryRingY,
        Math.sin(a) * (topTier.radius - 0.18)
      );
      cake.add(cherry);
    }

    // ---- Candles on top ----
    const candleGroup = new THREE.Group();
    candleGroup.position.y = topTier.y + topTier.height / 2;
    cake.add(candleGroup);
    const flames: THREE.Mesh[] = [];
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2;
      const cx = Math.cos(a) * 0.4;
      const cz = Math.sin(a) * 0.4;

      const candle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.55, 10),
        new THREE.MeshBasicMaterial({ color: CREAM })
      );
      candle.position.set(cx, 0.27, cz);
      candleGroup.add(candle);

      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.07, 0.2, 10),
        new THREE.MeshBasicMaterial({ color: 0xffd27a })
      );
      flame.position.set(cx, 0.62, cz);
      candleGroup.add(flame);
      flames.push(flame);
    }

    // ---- a faint orbit ring (echoes the globe) ----
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(3.0, 0.012, 6, 80),
      new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.25 })
    );
    orbit.rotation.x = Math.PI / 2.2;
    orbit.position.y = -0.3;
    scene.add(orbit);

    // ---- interaction: drag to rotate ----
    let targetRotY = 0.4;
    let targetRotX = 0.0;
    let curRotY = 0.4;
    let curRotX = 0.0;
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
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      targetRotY += dx * 0.01;
      targetRotX += dy * 0.006;
      targetRotX = Math.max(-0.5, Math.min(0.6, targetRotX));
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

    // ---- resize ----
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

    // ---- animation loop ----
    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (autoSpin) targetRotY += 0.0045;
      curRotY += (targetRotY - curRotY) * 0.08;
      curRotX += (targetRotX - curRotX) * 0.08;
      cake.rotation.y = curRotY;
      cake.rotation.x = curRotX;

      // gentle bob
      cake.position.y = prefersReduced ? 0 : Math.sin(t * 1.1) * 0.08;
      orbit.rotation.z = t * 0.15;

      // flicker flames
      flames.forEach((f, i) => {
        const s = 1 + Math.sin(t * 8 + i) * 0.12;
        f.scale.set(1, s, 1);
      });

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
      renderer.dispose();
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mm = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mm)) mm.forEach((x) => x.dispose());
        else if (mm) mm.dispose();
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
