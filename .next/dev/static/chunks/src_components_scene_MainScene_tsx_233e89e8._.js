(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/scene/MainScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ParticleSystem({ scrollProgress }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particleCount = 500;
    // Generate initial particle positions and velocities - using a seeded approach
    const particleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleSystem.useMemo[particleData]": ()=>{
            const positions = new Float32Array(particleCount * 3);
            const velocities = new Float32Array(particleCount * 3);
            // Use a simple seeded random to avoid Math.random in render
            let seed = 12345;
            const seededRandom = {
                "ParticleSystem.useMemo[particleData].seededRandom": ()=>{
                    seed = (seed * 9301 + 49297) % 233280;
                    return seed / 233280;
                }
            }["ParticleSystem.useMemo[particleData].seededRandom"];
            for(let i = 0; i < particleCount; i++){
                const i3 = i * 3;
                // Random initial positions
                positions[i3] = (seededRandom() - 0.5) * 20;
                positions[i3 + 1] = (seededRandom() - 0.5) * 20;
                positions[i3 + 2] = (seededRandom() - 0.5) * 20;
                // Random velocities for chaotic movement
                velocities[i3] = (seededRandom() - 0.5) * 0.02;
                velocities[i3 + 1] = (seededRandom() - 0.5) * 0.02;
                velocities[i3 + 2] = (seededRandom() - 0.5) * 0.02;
            }
            return {
                positions,
                velocities
            };
        }
    }["ParticleSystem.useMemo[particleData]"], []);
    // Mutable refs for animation data
    const currentPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Float32Array(particleData.positions));
    const currentVelocities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Float32Array(particleData.velocities));
    // Calculate grid positions for Act II
    const gridPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleSystem.useMemo[gridPositions]": ()=>{
            const positions = new Float32Array(particleCount * 3);
            const gridSize = Math.ceil(Math.pow(particleCount, 1 / 3));
            const spacing = 1.5;
            for(let i = 0; i < particleCount; i++){
                const i3 = i * 3;
                const x = i % gridSize - gridSize / 2;
                const y = Math.floor(i / gridSize) % gridSize - gridSize / 2;
                const z = Math.floor(i / (gridSize * gridSize)) - gridSize / 2;
                positions[i3] = x * spacing;
                positions[i3 + 1] = y * spacing;
                positions[i3 + 2] = z * spacing;
            }
            return positions;
        }
    }["ParticleSystem.useMemo[gridPositions]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleSystem.useEffect": ()=>{
            if (!meshRef.current) return;
            const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
            // Initialize instances with current positions
            for(let i = 0; i < particleCount; i++){
                dummy.position.set(currentPositions.current[i * 3], currentPositions.current[i * 3 + 1], currentPositions.current[i * 3 + 2]);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(i, dummy.matrix);
            }
            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    }["ParticleSystem.useEffect"], [
        particleCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ParticleSystem.useFrame": (state)=>{
            if (!meshRef.current) return;
            const time = state.clock.getElapsedTime();
            const dummy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]();
            // Determine which act we're in based on scroll progress
            const isActOne = scrollProgress < 0.25;
            const isActTwo = scrollProgress >= 0.25 && scrollProgress < 0.5;
            for(let i = 0; i < particleCount; i++){
                const i3 = i * 3;
                if (isActOne) {
                    // ACT I: Chaotic movement with noise
                    currentPositions.current[i3] += currentVelocities.current[i3] + Math.sin(time + i) * 0.001;
                    currentPositions.current[i3 + 1] += currentVelocities.current[i3 + 1] + Math.cos(time + i) * 0.001;
                    currentPositions.current[i3 + 2] += currentVelocities.current[i3 + 2] + Math.sin(time * 0.5 + i) * 0.001;
                    // Boundary check - wrap around
                    for(let j = 0; j < 3; j++){
                        if (Math.abs(currentPositions.current[i3 + j]) > 10) {
                            currentPositions.current[i3 + j] = -Math.sign(currentPositions.current[i3 + j]) * 10;
                        }
                    }
                } else if (isActTwo) {
                    // ACT II: Transition to grid
                    const transitionProgress = (scrollProgress - 0.25) / 0.25;
                    const easedProgress = Math.min(1, transitionProgress);
                    for(let j = 0; j < 3; j++){
                        const current = currentPositions.current[i3 + j];
                        const target = gridPositions[i3 + j];
                        currentPositions.current[i3 + j] = current + (target - current) * easedProgress * 0.05;
                    }
                }
                dummy.position.set(currentPositions.current[i3], currentPositions.current[i3 + 1], currentPositions.current[i3 + 2]);
                dummy.scale.setScalar(0.05);
                dummy.updateMatrix();
                meshRef.current.setMatrixAt(i, dummy.matrix);
            }
            meshRef.current.instanceMatrix.needsUpdate = true;
            // Color transition from red to cyan
            const material = meshRef.current.material;
            if (isActOne) {
                material.color.setHex(0xFF2A2A); // Red (jamming)
            } else if (isActTwo) {
                const colorTransition = (scrollProgress - 0.25) / 0.25;
                const r = 1 - colorTransition;
                const g = 0.83 * colorTransition;
                const b = 0.17 + 0.83 * colorTransition;
                material.color.setRGB(r, g, b);
            }
        }
    }["ParticleSystem.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: meshRef,
        args: [
            undefined,
            undefined,
            particleCount
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    1,
                    8,
                    8
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/scene/MainScene.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {}, void 0, false, {
                fileName: "[project]/src/components/scene/MainScene.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/scene/MainScene.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(ParticleSystem, "4fxUv5F9RjiRf9NyQ/ZepGg97yo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ParticleSystem;
function VineLines({ scrollProgress }) {
    _s1();
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use memoized random positions to avoid re-rendering with different positions
    const linePositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VineLines.useMemo[linePositions]": ()=>{
            const lineCount = 20;
            const gridSize = 8;
            const spacing = 1.5;
            const positions = [];
            // Use seeded random for consistent positions
            let seed = 54321;
            const seededRandom = {
                "VineLines.useMemo[linePositions].seededRandom": ()=>{
                    seed = (seed * 9301 + 49297) % 233280;
                    return seed / 233280;
                }
            }["VineLines.useMemo[linePositions].seededRandom"];
            for(let i = 0; i < lineCount; i++){
                const startX = (seededRandom() * gridSize - gridSize / 2) * spacing;
                const startY = (seededRandom() * gridSize - gridSize / 2) * spacing;
                const startZ = (seededRandom() * gridSize - gridSize / 2) * spacing;
                const endX = (seededRandom() * gridSize - gridSize / 2) * spacing;
                const endY = (seededRandom() * gridSize - gridSize / 2) * spacing;
                const endZ = (seededRandom() * gridSize - gridSize / 2) * spacing;
                positions.push({
                    start: [
                        startX,
                        startY,
                        startZ
                    ],
                    end: [
                        endX,
                        endY,
                        endZ
                    ]
                });
            }
            return positions;
        }
    }["VineLines.useMemo[linePositions]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VineLines.useEffect": ()=>{
            if (!linesRef.current) return;
            // Clear existing lines
            while(linesRef.current.children.length > 0){
                linesRef.current.remove(linesRef.current.children[0]);
            }
            // Only show lines in Act II when grid is forming
            if (scrollProgress >= 0.25 && scrollProgress < 0.5) {
                linePositions.forEach({
                    "VineLines.useEffect": ({ start, end })=>{
                        const points = [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](start[0], start[1], start[2]),
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](end[0], end[1], end[2])
                        ];
                        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(points);
                        const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                            color: 0x00D4FF,
                            opacity: 0.3,
                            transparent: true
                        });
                        const line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](geometry, material);
                        linesRef.current?.add(line);
                    }
                }["VineLines.useEffect"]);
            }
        }
    }["VineLines.useEffect"], [
        scrollProgress,
        linePositions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: linesRef
    }, void 0, false, {
        fileName: "[project]/src/components/scene/MainScene.tsx",
        lineNumber: 216,
        columnNumber: 10
    }, this);
}
_s1(VineLines, "LlILGGthBK+tr0vfqP2zmIOKcbI=");
_c1 = VineLines;
function MainScene({ scrollProgress, lowPowerMode = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    15
                ],
                fov: 75
            },
            gl: {
                antialias: !lowPowerMode,
                powerPreference: lowPowerMode ? 'low-power' : 'high-performance'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.5
                }, void 0, false, {
                    fileName: "[project]/src/components/scene/MainScene.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleSystem, {
                    scrollProgress: scrollProgress
                }, void 0, false, {
                    fileName: "[project]/src/components/scene/MainScene.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VineLines, {
                    scrollProgress: scrollProgress
                }, void 0, false, {
                    fileName: "[project]/src/components/scene/MainScene.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                !lowPowerMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                        intensity: 0.5,
                        luminanceThreshold: 0.2,
                        luminanceSmoothing: 0.9
                    }, void 0, false, {
                        fileName: "[project]/src/components/scene/MainScene.tsx",
                        lineNumber: 240,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/scene/MainScene.tsx",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/scene/MainScene.tsx",
            lineNumber: 227,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/scene/MainScene.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
_c2 = MainScene;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ParticleSystem");
__turbopack_context__.k.register(_c1, "VineLines");
__turbopack_context__.k.register(_c2, "MainScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/scene/MainScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/scene/MainScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_scene_MainScene_tsx_233e89e8._.js.map