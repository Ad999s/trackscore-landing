
"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Arc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

interface GlobeConfig {
  pointSize: number;
  globeColor: string;
  showAtmosphere: boolean;
  atmosphereColor: string;
  atmosphereAltitude: number;
  emissive: string;
  emissiveIntensity: number;
  shininess: number;
  polygonColor: string;
  ambientLight: string;
  directionalLeftLight: string;
  directionalTopLight: string;
  pointLight: string;
  arcTime: number;
  arcLength: number;
  rings: number;
  maxRings: number;
  initialPosition: { lat: number; lng: number };
  autoRotate: boolean;
  autoRotateSpeed: number;
}

// Since we're getting an error with the direct import, we'll load OrbitControls dynamically
class OrbitControlsImplementation {
  enableDamping: boolean = true;
  dampingFactor: number = 0.05;
  rotateSpeed: number = 0.07;
  enablePan: boolean = false;
  enableZoom: boolean = true;
  minDistance: number = 6;
  maxDistance: number = 15;
  autoRotate: boolean = false;
  autoRotateSpeed: number = 0.5;
  target: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

  constructor(camera: THREE.Camera, domElement: HTMLElement) {
    this.autoRotate = false;
    this.autoRotateSpeed = 0.5;
    
    // We'll load the actual OrbitControls module dynamically
    import('three/examples/jsm/controls/OrbitControls').then(({ OrbitControls }) => {
      const controls = new OrbitControls(camera, domElement);
      controls.enableDamping = this.enableDamping;
      controls.dampingFactor = this.dampingFactor;
      controls.rotateSpeed = this.rotateSpeed;
      controls.enablePan = this.enablePan;
      controls.enableZoom = this.enableZoom;
      controls.minDistance = this.minDistance;
      controls.maxDistance = this.maxDistance;
      controls.autoRotate = this.autoRotate;
      controls.autoRotateSpeed = this.autoRotateSpeed;
      
      // Replace this instance with the real controls
      Object.assign(this, controls);
    }).catch(err => {
      console.error('Failed to load OrbitControls:', err);
    });
  }

  update() {
    // This will be replaced by the real update method when OrbitControls loads
  }
}

export const World = ({ data, globeConfig }: { data: Arc[]; globeConfig: GlobeConfig }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<any>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  
  const convertLatLngToVector3 = (lat: number, lng: number, radius: number = 5) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  const createArc = (arc: Arc) => {
    const start = convertLatLngToVector3(arc.startLat, arc.startLng);
    const end = convertLatLngToVector3(arc.endLat, arc.endLng);
    const arcHeight = arc.arcAlt || 0.2;
    
    // Control point for the curve
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(5 + arcHeight * 5); // Adjust the arc height
    
    // Create a quadratic bezier curve
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    
    // Create the geometry from the curve
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    // Create a material
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(arc.color),
      linewidth: 1.5,
      opacity: 0.8,
      transparent: true,
    });
    
    // Create the final object to add to the scene
    const curveObject = new THREE.Line(geometry, material);
    return curveObject;
  };

  const createPoint = (lat: number, lng: number, size: number = 0.15, color: string = '#ffffff') => {
    const point = convertLatLngToVector3(lat, lng);
    const geometry = new THREE.SphereGeometry(size, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(point);
    return mesh;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(
      globeConfig.ambientLight,
      1
    );
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(
      globeConfig.pointLight,
      0.5
    );
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);
    
    const directionalLightLeft = new THREE.DirectionalLight(
      globeConfig.directionalLeftLight,
      0.8
    );
    directionalLightLeft.position.set(-10, 0, 0);
    scene.add(directionalLightLeft);
    
    const directionalLightTop = new THREE.DirectionalLight(
      globeConfig.directionalTopLight,
      0.8
    );
    directionalLightTop.position.set(0, 10, 0);
    scene.add(directionalLightTop);
    
    // Globe creation
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(5, 64, 64),
      new THREE.MeshPhongMaterial({
        color: globeConfig.globeColor,
        emissive: new THREE.Color(globeConfig.emissive),
        emissiveIntensity: globeConfig.emissiveIntensity,
        shininess: globeConfig.shininess,
        transparent: true,
        opacity: 0.9,
      })
    );
    scene.add(globe);
    globeRef.current = globe;
    
    // Atmosphere
    if (globeConfig.showAtmosphere) {
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 64, 64),
        new THREE.MeshPhongMaterial({
          color: globeConfig.atmosphereColor,
          transparent: true,
          opacity: 0.2,
          side: THREE.BackSide,
        })
      );
      atmosphere.scale.set(1.1, 1.1, 1.1);
      scene.add(atmosphere);
    }
    
    // Add all arcs
    data.forEach((arc) => {
      const arcObject = createArc(arc);
      scene.add(arcObject);
      
      // Add points at start and end of arcs
      const startPoint = createPoint(arc.startLat, arc.startLng, 0.1, '#ffffff');
      const endPoint = createPoint(arc.endLat, arc.endLng, 0.07, '#ffffff');
      scene.add(startPoint);
      scene.add(endPoint);
    });
    
    // Set initial position
    if (globeConfig.initialPosition) {
      const initPosition = convertLatLngToVector3(
        globeConfig.initialPosition.lat,
        globeConfig.initialPosition.lng,
        12
      );
      camera.position.copy(initPosition);
      camera.lookAt(0, 0, 0);
    }
    
    // Use our custom OrbitControlsImplementation until the real one loads
    const controls = new OrbitControlsImplementation(camera, renderer.domElement);
    controls.autoRotate = globeConfig.autoRotate;
    controls.autoRotateSpeed = globeConfig.autoRotateSpeed;
    controlsRef.current = controls;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [data, globeConfig]);
  
  return <div ref={containerRef} className="w-full h-full" />;
};
