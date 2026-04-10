"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: Record<string, { value: unknown }> | null
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        /* zoom out: scale coordinate space so full wave fits in Hero */
        p *= 1.5;

        float d = length(p) * distortion;

        float x1 = p.x * (1.0 + d);
        float x2 = p.x;
        float x3 = p.x * (1.0 - d);

        float vertOffset = 0.25;
        float beam1 = 0.06 / abs((p.y - vertOffset) + sin((x1 + time) * xScale) * yScale);
        float beam2 = 0.06 / abs((p.y - vertOffset) + sin((x2 + time) * xScale) * yScale);
        float beam3 = 0.06 / abs((p.y - vertOffset) + sin((x3 + time) * xScale) * yScale);

        // Combine beams into a single intensity value
        float intensity = (beam1 + beam2 + beam3) / 3.0;

        // Map intensity to solar gold -> white colour curve:
        // dim  → black
        // mid  → deep amber/gold  (#f5a623 → rgb(1.0, 0.65, 0.14))
        // high → warm yellow       (#ffe066 → rgb(1.0, 0.88, 0.40))
        // peak → white             (rgb(1.0, 1.0, 1.0))
        float r = clamp(intensity * 1.8, 0.0, 1.0);
        float g = clamp(intensity * 1.1 - 0.05, 0.0, 1.0);
        float b = clamp(intensity * 0.35 - 0.15, 0.0, 1.0);

        // Soft white bloom at peak brightness
        float bloom = clamp((intensity - 0.55) * 4.0, 0.0, 1.0);
        r = mix(r, 1.0, bloom);
        g = mix(g, 1.0, bloom);
        b = mix(b, 1.0, bloom);

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `

    const initScene = () => {
      refs.scene = new THREE.Scene()
      refs.renderer = new THREE.WebGLRenderer({ canvas })
      refs.renderer.setPixelRatio(window.devicePixelRatio)
      refs.renderer.setClearColor(new THREE.Color(0x000000))

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      const parent = canvas.parentElement
      const initWidth = parent ? parent.clientWidth : window.innerWidth
      const initHeight = parent ? parent.clientHeight : window.innerHeight

      refs.uniforms = {
        resolution: { value: [initWidth, initHeight] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.4 },
        distortion: { value: 0.04 },
      }

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ]

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", positions)

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)

      handleResize()
    }

    const animate = () => {
      if (refs.uniforms) {
        (refs.uniforms.time.value as number)
        refs.uniforms.time.value = (refs.uniforms.time.value as number) + 0.01
      }
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return
      const parent = canvas.parentElement
      if (!parent) return
      const width = parent.clientWidth
      const height = parent.clientHeight
      refs.renderer.setSize(width, height, false)
      refs.uniforms.resolution.value = [width, height]
    }

    initScene()
    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      window.removeEventListener("resize", handleResize)
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose()
        }
      }
      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "absolute top-0 left-0 w-full h-full block"}
    />
  )
}
