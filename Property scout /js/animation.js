// PropertyScout Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const playButton = document.getElementById('play-animation');
    const progressBar = document.querySelector('.progress');
    const buildingContainer = document.querySelector('.building-container');
    const zoningData = document.querySelector('.zoning-data');
    const citySkyline = document.querySelector('.city-skyline');
    const animationWrapper = document.querySelector('.animation-wrapper');
    const currentZoningLabel = document.querySelector('.zoning-district-label:not(.r12-label)');
    
    // Create NYC skyline SVG
    createSkyline();
    
    // Create background buildings for depth
    createBackgroundBuildings();
    
    // Create building SVGs
    createBuildings();
    
    // Animation state
    let isAnimating = false;
    let animationProgress = 0;
    let animationInterval;
    
    // Hide the play button since we'll auto-play continuously
    playButton.style.display = 'none';
    
    // Hide zoning label initially
    currentZoningLabel.style.opacity = '0';
    
    // Auto-start animation after 1.5 seconds
    setTimeout(() => {
        startAnimation();
    }, 1500);
    
    // Functions
    function startAnimation() {
        isAnimating = true;
        animationWrapper.classList.add('animating');
        
        // Start progress bar animation - 10% faster than the previous 15% slower version
        // (46ms * 0.9 = 41.4ms, rounded to 41ms)
        animationInterval = setInterval(() => {
            animationProgress += 0.5; // Increment
            progressBar.style.width = `${animationProgress}%`;
            
            // Show "Previous Zoning" at 5%
            if (animationProgress === 5) {
                currentZoningLabel.textContent = "Previous Zoning";
                currentZoningLabel.classList.add('changed');
                currentZoningLabel.style.opacity = '1';
            }
            
            // Switch to "Current Zoning" at 20%
            if (animationProgress === 20) {
                currentZoningLabel.classList.add('fading');
                setTimeout(() => {
                    currentZoningLabel.textContent = "Current Zoning";
                    currentZoningLabel.classList.remove('fading');
                }, 518); // 10% faster than 575ms
            }
            
            // Trigger building transformation at 25% - more gradual
            if (animationProgress === 25) {
                // Start the building block animation
                startBuildingBlockAnimation();
                
                // Add depth with sequential animation
                setTimeout(() => {
                    buildingContainer.parentElement.classList.add('animate-building-mid');
                }, 828); // 10% faster than 920ms
                
                setTimeout(() => {
                    buildingContainer.parentElement.classList.add('animate-building');
                }, 1656); // 10% faster than 1840ms
            }
            
            // Trigger data transformation at 50%
            if (animationProgress === 50) {
                zoningData.parentElement.classList.add('animate-data-start');
                
                // Sequential data animation for depth
                setTimeout(() => {
                    zoningData.parentElement.classList.add('animate-data');
                }, 828); // 10% faster than 920ms
            }
            
            // Add dramatic pause near the end
            if (animationProgress === 85) {
                clearInterval(animationInterval);
                
                // Dramatic pause
                setTimeout(() => {
                    // Resume for final completion
                    animationInterval = setInterval(() => {
                        animationProgress += 0.5;
                        progressBar.style.width = `${animationProgress}%`;
                        
                        if (animationProgress >= 100) {
                            clearInterval(animationInterval);
                            
                            // Final dramatic effect
                            setTimeout(() => {
                                buildingContainer.classList.add('pulse-glow');
                                animationWrapper.classList.add('depth-shadow');
                                
                                setTimeout(() => {
                                    buildingContainer.classList.remove('pulse-glow');
                                    
                                    // Reset and restart the animation after a pause
                                    setTimeout(() => {
                                        resetAndRestartAnimation();
                                    }, 2070); // 10% faster than 2300ms
                                }, 1553); // 10% faster than 1725ms
                            }, 518); // 10% faster than 575ms
                        }
                    }, 41); // 10% faster than 46ms
                }, 1035); // 10% faster than 1150ms
            }
        }, 41); // 10% faster than 46ms
    }
    
    function resetAndRestartAnimation() {
        // Reset animation state
        isAnimating = false;
        animationProgress = 0;
        animationWrapper.classList.remove('animating');
        animationWrapper.classList.remove('depth-shadow');
        
        // Reset animations
        clearInterval(animationInterval);
        progressBar.style.width = '0%';
        buildingContainer.parentElement.classList.remove('animate-building-start');
        buildingContainer.parentElement.classList.remove('animate-building-mid');
        buildingContainer.parentElement.classList.remove('animate-building');
        zoningData.parentElement.classList.remove('animate-data-start');
        zoningData.parentElement.classList.remove('animate-data');
        buildingContainer.classList.remove('pulse-glow');
        
        // Hide zoning label
        currentZoningLabel.style.opacity = '0';
        currentZoningLabel.classList.remove('changed');
        
        // Reset building floors
        const allFloors = document.querySelectorAll('.building-floor');
        allFloors.forEach(floor => {
            floor.style.opacity = '0';
            floor.style.transform = 'translateY(20px)';
        });
        
        // Short delay before restarting
        setTimeout(() => {
            startAnimation();
        }, 1035); // 10% faster than 1150ms
    }
    
    function startBuildingBlockAnimation() {
        const transformedBuilding = document.querySelector('.building.transformed');
        const floors = transformedBuilding.querySelectorAll('.building-floor');
        
        // Animate each floor sequentially
        floors.forEach((floor, index) => {
            setTimeout(() => {
                floor.style.opacity = '1';
                floor.style.transform = 'translateY(0)';
            }, 104 * index); // 10% faster than 115ms
        });
    }
    
    function createSkyline() {
        // Create an SVG for the NYC skyline
        const skylineSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        skylineSvg.setAttribute('width', '100%');
        skylineSvg.setAttribute('height', '100%');
        skylineSvg.setAttribute('viewBox', '0 0 1000 180');
        skylineSvg.style.position = 'absolute';
        skylineSvg.style.bottom = '0';
        
        // Define skyline path - more detailed NYC skyline
        const skylinePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        skylinePath.setAttribute('d', 'M0,180 L0,120 L15,120 L15,100 L30,100 L30,120 L45,120 L45,90 L60,90 L60,110 L75,110 L75,90 L90,90 L90,70 L105,70 L105,50 L120,50 L120,30 L135,30 L135,50 L150,50 L150,70 L165,70 L165,90 L180,90 L180,70 L195,70 L195,50 L210,50 L210,30 L225,30 L225,10 L240,10 L240,30 L255,30 L255,50 L270,50 L270,70 L285,70 L285,90 L300,90 L300,110 L315,110 L315,90 L330,90 L330,70 L345,70 L345,50 L360,50 L360,30 L375,30 L375,10 L390,10 L390,5 L405,5 L405,10 L420,10 L420,30 L435,30 L435,50 L450,50 L450,70 L465,70 L465,90 L480,90 L480,110 L495,110 L495,90 L510,90 L510,70 L525,70 L525,50 L540,50 L540,30 L555,30 L555,10 L570,10 L570,5 L585,5 L585,10 L600,10 L600,30 L615,30 L615,50 L630,50 L630,70 L645,70 L645,90 L660,90 L660,110 L675,110 L675,90 L690,90 L690,70 L705,70 L705,50 L720,50 L720,30 L735,30 L735,10 L750,10 L750,5 L765,5 L765,10 L780,10 L780,30 L795,30 L795,50 L810,50 L810,70 L825,70 L825,90 L840,90 L840,110 L855,110 L855,90 L870,90 L870,70 L885,70 L885,50 L900,50 L900,30 L915,30 L915,10 L930,10 L930,5 L945,5 L945,10 L960,10 L960,30 L975,30 L975,50 L990,50 L990,70 L1000,70 L1000,180 Z');
        
        // Add subtle gradient to skyline with more depth
        const skylineGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        skylineGradient.setAttribute('id', 'skylineGradient');
        skylineGradient.setAttribute('x1', '0%');
        skylineGradient.setAttribute('y1', '0%');
        skylineGradient.setAttribute('x2', '0%');
        skylineGradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#1e293b');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '70%');
        stop2.setAttribute('stop-color', '#334155');
        
        const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop3.setAttribute('offset', '100%');
        stop3.setAttribute('stop-color', '#475569');
        
        skylineGradient.appendChild(stop1);
        skylineGradient.appendChild(stop2);
        skylineGradient.appendChild(stop3);
        
        // Add subtle city lights effect
        const cityLightsFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        cityLightsFilter.setAttribute('id', 'cityLights');
        cityLightsFilter.setAttribute('x', '0');
        cityLightsFilter.setAttribute('y', '0');
        cityLightsFilter.setAttribute('width', '100%');
        cityLightsFilter.setAttribute('height', '100%');
        
        const feTurbulence = document.createElementNS('http://www.w3.org/2000/svg', 'feTurbulence');
        feTurbulence.setAttribute('type', 'fractalNoise');
        feTurbulence.setAttribute('baseFrequency', '0.65');
        feTurbulence.setAttribute('numOctaves', '3');
        feTurbulence.setAttribute('seed', '3');
        feTurbulence.setAttribute('result', 'noise');
        
        const feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
        feColorMatrix.setAttribute('in', 'noise');
        feColorMatrix.setAttribute('type', 'matrix');
        feColorMatrix.setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0');
        feColorMatrix.setAttribute('result', 'coloredNoise');
        
        const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
        feComposite.setAttribute('operator', 'in');
        feComposite.setAttribute('in', 'coloredNoise');
        feComposite.setAttribute('in2', 'SourceGraphic');
        feComposite.setAttribute('result', 'lights');
        
        cityLightsFilter.appendChild(feTurbulence);
        cityLightsFilter.appendChild(feColorMatrix);
        cityLightsFilter.appendChild(feComposite);
        
        // Add depth shadow for more dramatic effect
        const depthShadowFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        depthShadowFilter.setAttribute('id', 'depthShadow');
        depthShadowFilter.setAttribute('x', '-10%');
        depthShadowFilter.setAttribute('y', '-10%');
        depthShadowFilter.setAttribute('width', '120%');
        depthShadowFilter.setAttribute('height', '130%');
        
        const feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset');
        feOffset.setAttribute('in', 'SourceAlpha');
        feOffset.setAttribute('dx', '0');
        feOffset.setAttribute('dy', '10');
        feOffset.setAttribute('result', 'offsetblur');
        
        const feGaussianBlurShadow = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
        feGaussianBlurShadow.setAttribute('in', 'offsetblur');
        feGaussianBlurShadow.setAttribute('stdDeviation', '10');
        feGaussianBlurShadow.setAttribute('result', 'blurOut');
        
        const feColorMatrixShadow = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
        feColorMatrixShadow.setAttribute('in', 'blurOut');
        feColorMatrixShadow.setAttribute('type', 'matrix');
        feColorMatrixShadow.setAttribute('values', '0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.3 0');
        feColorMatrixShadow.setAttribute('result', 'shadowOut');
        
        const feMergeShadow = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
        
        const feMergeNodeShadow1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
        feMergeNodeShadow1.setAttribute('in', 'shadowOut');
        
        const feMergeNodeShadow2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
        feMergeNodeShadow2.setAttribute('in', 'SourceGraphic');
        
        feMergeShadow.appendChild(feMergeNodeShadow1);
        feMergeShadow.appendChild(feMergeNodeShadow2);
        
        depthShadowFilter.appendChild(feOffset);
        depthShadowFilter.appendChild(feGaussianBlurShadow);
        depthShadowFilter.appendChild(feColorMatrixShadow);
        depthShadowFilter.appendChild(feMergeShadow);
        
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.appendChild(skylineGradient);
        defs.appendChild(cityLightsFilter);
        defs.appendChild(depthShadowFilter);
        skylineSvg.appendChild(defs);
        
        skylinePath.setAttribute('fill', 'url(#skylineGradient)');
        skylinePath.setAttribute('filter', 'url(#cityLights)');
        
        // Add path to SVG
        skylineSvg.appendChild(skylinePath);
        
        // Add SVG to skyline container
        citySkyline.appendChild(skylineSvg);
    }
    
    function createBackgroundBuildings() {
        // Create a container for background buildings
        const bgBuildingsContainer = document.createElement('div');
        bgBuildingsContainer.className = 'background-buildings';
        animationWrapper.insertBefore(bgBuildingsContainer, citySkyline);
        
        // Create an SVG for the background buildings
        const bgBuildingsSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        bgBuildingsSvg.setAttribute('width', '100%');
        bgBuildingsSvg.setAttribute('height', '100%');
        bgBuildingsSvg.setAttribute('viewBox', '0 0 1000 300');
        bgBuildingsSvg.style.position = 'absolute';
        bgBuildingsSvg.style.bottom = '0';
        bgBuildingsSvg.style.left = '0';
        bgBuildingsSvg.style.right = '0';
        bgBuildingsSvg.style.zIndex = '1';
        
        // Create multiple background buildings with different heights and positions
        const numBuildings = 15;
        const buildingWidth = 40;
        const spacing = 30;
        
        for (let i = 0; i < numBuildings; i++) {
            // Randomize building properties
            const xPos = i * (buildingWidth + spacing) + Math.random() * 20 - 10;
            const height = Math.random() * 120 + 80; // 80-200px height
            const yPos = 300 - height;
            const opacity = Math.random() * 0.15 + 0.05; // Very faint buildings (0.05-0.2 opacity)
            
            // Create building rectangle
            const building = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            building.setAttribute('x', xPos);
            building.setAttribute('y', yPos);
            building.setAttribute('width', buildingWidth);
            building.setAttribute('height', height);
            building.setAttribute('fill', `rgba(100, 116, 139, ${opacity})`);
            
            // Add some windows to the buildings
            const numFloors = Math.floor(height / 15);
            const numColumns = Math.floor(buildingWidth / 10);
            
            for (let floor = 0; floor < numFloors; floor++) {
                for (let col = 0; col < numColumns; col++) {
                    // Only add windows randomly
                    if (Math.random() > 0.7) {
                        const windowOpacity = Math.random() * 0.2 + 0.1;
                        const windowWidth = 6;
                        const windowHeight = 8;
                        const windowX = xPos + col * 10 + 2;
                        const windowY = yPos + floor * 15 + 3;
                        
                        const buildingWindow = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        buildingWindow.setAttribute('x', windowX);
                        buildingWindow.setAttribute('y', windowY);
                        buildingWindow.setAttribute('width', windowWidth);
                        buildingWindow.setAttribute('height', windowHeight);
                        buildingWindow.setAttribute('fill', `rgba(226, 232, 240, ${windowOpacity})`);
                        buildingWindow.setAttribute('rx', '1');
                        
                        bgBuildingsSvg.appendChild(buildingWindow);
                    }
                }
            }
            
            bgBuildingsSvg.appendChild(building);
        }
        
        // Add a subtle blur filter for depth effect
        const blurFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        blurFilter.setAttribute('id', 'bgBlur');
        blurFilter.setAttribute('x', '-10%');
        blurFilter.setAttribute('y', '-10%');
        blurFilter.setAttribute('width', '120%');
        blurFilter.setAttribute('height', '120%');
        
        const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
        feGaussianBlur.setAttribute('in', 'SourceGraphic');
        feGaussianBlur.setAttribute('stdDeviation', '1');
        feGaussianBlur.setAttribute('result', 'blur');
        
        blurFilter.appendChild(feGaussianBlur);
        
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.appendChild(blurFilter);
        bgBuildingsSvg.appendChild(defs);
        
        // Apply the blur filter to the entire SVG
        bgBuildingsSvg.setAttribute('filter', 'url(#bgBlur)');
        
        // Add SVG to background buildings container
        bgBuildingsContainer.appendChild(bgBuildingsSvg);
    }
    
    function createBuildings() {
        // Original building (before transformation)
        const originalBuilding = document.querySelector('.building.original');
        const originalSvg = createBuildingSvg(12, 3, false);
        originalBuilding.appendChild(originalSvg);
        
        // Transformed building (after "City of Yes" zoning changes)
        const transformedBuilding = document.querySelector('.building.transformed');
        const transformedSvg = createBuildingSvg(30, 5, true);
        transformedBuilding.appendChild(transformedSvg);
    }
    
    function createBuildingSvg(floors, sections, isTransformed) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 200 300');
        
        // Building outline
        const buildingOutline = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        buildingOutline.setAttribute('x', '0');
        buildingOutline.setAttribute('y', '0');
        buildingOutline.setAttribute('width', '200');
        buildingOutline.setAttribute('height', '300');
        buildingOutline.setAttribute('fill', 'none');
        svg.appendChild(buildingOutline);
        
        // Create floors with depth effect
        const floorHeight = 300 / floors;
        
        for (let i = 1; i <= floors; i++) {
            // For transformed building, create individual floor groups for animation
            if (isTransformed) {
                const floorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                floorGroup.classList.add('building-floor');
                floorGroup.style.opacity = '0';
                floorGroup.style.transform = 'translateY(20px)';
                floorGroup.style.transition = `opacity 0.4s ease, transform 0.4s ease`;
                
                // Floor line
                const floor = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                floor.setAttribute('x1', '0');
                floor.setAttribute('y1', i * floorHeight);
                floor.setAttribute('x2', '200');
                floor.setAttribute('y2', i * floorHeight);
                floor.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
                floor.setAttribute('stroke-width', '1');
                floorGroup.appendChild(floor);
                
                // Add depth lines for taller building
                if (floors > 20 && i % 5 === 0) {
                    const depthLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    depthLine.setAttribute('x1', '0');
                    depthLine.setAttribute('y1', i * floorHeight);
                    depthLine.setAttribute('x2', '200');
                    depthLine.setAttribute('y2', i * floorHeight);
                    depthLine.setAttribute('stroke', 'rgba(255, 255, 255, 0.5)');
                    depthLine.setAttribute('stroke-width', '2');
                    depthLine.setAttribute('stroke-dasharray', '5,5');
                    floorGroup.appendChild(depthLine);
                }
                
                // Add windows for this floor
                for (let j = 0; j < sections; j++) {
                    const window = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    const sectionWidth = 200 / sections;
                    window.setAttribute('x', j * sectionWidth + sectionWidth * 0.2);
                    window.setAttribute('y', (i - 1) * floorHeight + floorHeight * 0.2);
                    window.setAttribute('width', sectionWidth * 0.6);
                    window.setAttribute('height', floorHeight * 0.6);
                    window.setAttribute('rx', '2');
                    
                    // Random opacity for window lighting effect
                    const opacity = Math.random() * 0.3 + 0.2;
                    window.setAttribute('fill', `rgba(255, 255, 255, ${opacity})`);
                    
                    // Add animation for some windows
                    if (Math.random() > 0.7) {
                        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                        animate.setAttribute('attributeName', 'opacity');
                        animate.setAttribute('values', `${opacity};${opacity * 1.5};${opacity}`);
                        animate.setAttribute('dur', `${Math.random() * 4.6 + 2.3}s`); // 15% slower
                        animate.setAttribute('repeatCount', 'indefinite');
                        window.appendChild(animate);
                    }
                    
                    floorGroup.appendChild(window);
                    
                    // Add depth effect with shadow for some windows
                    if (Math.random() > 0.8) {
                        const windowShadow = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        windowShadow.setAttribute('x', j * sectionWidth + sectionWidth * 0.2 + 2);
                        windowShadow.setAttribute('y', (i - 1) * floorHeight + floorHeight * 0.2 + 2);
                        windowShadow.setAttribute('width', sectionWidth * 0.6);
                        windowShadow.setAttribute('height', floorHeight * 0.6);
                        windowShadow.setAttribute('fill', 'rgba(0, 0, 0, 0.2)');
                        windowShadow.setAttribute('rx', '2');
                        floorGroup.appendChild(windowShadow);
                    }
                }
                
                svg.appendChild(floorGroup);
            } else {
                // For original building, create floors normally
                const floor = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                floor.setAttribute('x1', '0');
                floor.setAttribute('y1', i * floorHeight);
                floor.setAttribute('x2', '200');
                floor.setAttribute('y2', i * floorHeight);
                floor.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
                floor.setAttribute('stroke-width', '1');
                svg.appendChild(floor);
            }
        }
        
        // For original building, create vertical sections and windows normally
        if (!isTransformed) {
            // Create vertical sections with depth effect
            const sectionWidth = 200 / sections;
            for (let i = 1; i < sections; i++) {
                const section = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                section.setAttribute('x1', i * sectionWidth);
                section.setAttribute('y1', '0');
                section.setAttribute('x2', i * sectionWidth);
                section.setAttribute('y2', '300');
                section.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
                section.setAttribute('stroke-width', '1');
                svg.appendChild(section);
            }
            
            // Create windows
            for (let i = 0; i < floors; i++) {
                for (let j = 0; j < sections; j++) {
                    const window = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    window.setAttribute('x', j * sectionWidth + sectionWidth * 0.2);
                    window.setAttribute('y', i * floorHeight + floorHeight * 0.2);
                    window.setAttribute('width', sectionWidth * 0.6);
                    window.setAttribute('height', floorHeight * 0.6);
                    window.setAttribute('fill', 'rgba(255, 255, 255, 0.2)');
                    window.setAttribute('rx', '2');
                    svg.appendChild(window);
                }
            }
        } else {
            // For transformed building, add vertical sections
            const sectionWidth = 200 / sections;
            for (let i = 1; i < sections; i++) {
                const section = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                section.setAttribute('x1', i * sectionWidth);
                section.setAttribute('y1', '0');
                section.setAttribute('x2', i * sectionWidth);
                section.setAttribute('y2', '300');
                section.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
                section.setAttribute('stroke-width', '1');
                svg.appendChild(section);
            }
        }
        
        // Add a subtle glow effect for the transformed building
        if (isTransformed) {
            const glowFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
            glowFilter.setAttribute('id', 'glow');
            glowFilter.setAttribute('x', '-20%');
            glowFilter.setAttribute('y', '-20%');
            glowFilter.setAttribute('width', '140%');
            glowFilter.setAttribute('height', '140%');
            
            const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
            feGaussianBlur.setAttribute('stdDeviation', '5');
            feGaussianBlur.setAttribute('result', 'blur');
            
            const feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
            feColorMatrix.setAttribute('in', 'blur');
            feColorMatrix.setAttribute('type', 'matrix');
            feColorMatrix.setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7');
            feColorMatrix.setAttribute('result', 'glow');
            
            const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
            
            const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
            feMergeNode1.setAttribute('in', 'glow');
            
            const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
            feMergeNode2.setAttribute('in', 'SourceGraphic');
            
            feMerge.appendChild(feMergeNode1);
            feMerge.appendChild(feMergeNode2);
            
            glowFilter.appendChild(feGaussianBlur);
            glowFilter.appendChild(feColorMatrix);
            glowFilter.appendChild(feMerge);
            
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            defs.appendChild(glowFilter);
            svg.appendChild(defs);
            
            buildingOutline.setAttribute('filter', 'url(#glow)');
        }
        
        return svg;
    }
    
    // Add CSS for animation effects
    const style = document.createElement('style');
    style.textContent = `
        .pulse {
            animation: pulse 0.9s cubic-bezier(0.4, 0, 0.6, 1); /* 10% faster */
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
        
        .pulse-glow {
            animation: pulseGlow 1.553s ease-in-out; /* 10% faster than 1.725s */
        }
        
        @keyframes pulseGlow {
            0%, 100% {
                filter: drop-shadow(0 0 0 rgba(109, 40, 217, 0));
            }
            50% {
                filter: drop-shadow(0 0 30px rgba(109, 40, 217, 0.8));
            }
        }
        
        .animating .city-skyline {
            animation: skylineShift 4.14s ease-out forwards; /* 10% faster than 4.6s */
        }
        
        @keyframes skylineShift {
            0% {
                transform: translateY(0) scale(1);
                filter: brightness(1);
            }
            100% {
                transform: translateY(15px) scale(1.02);
                filter: brightness(1.1);
            }
        }
        
        .depth-shadow {
            animation: depthShadow 1.035s ease-out forwards; /* 10% faster than 1.15s */
        }
        
        @keyframes depthShadow {
            0% {
                box-shadow: 0 10px 25px rgba(109, 40, 217, 0.25);
            }
            100% {
                box-shadow: 0 20px 50px rgba(109, 40, 217, 0.4);
            }
        }
        
        .fading {
            opacity: 0;
            transition: opacity 0.518s ease; /* 10% faster than 0.575s */
        }
        
        .changed {
            color: #9333ea;
            font-weight: 800;
            border-color: #9333ea;
        }
        
        /* Background buildings styles */
        .background-buildings {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        
        .animating .background-buildings {
            animation: bgBuildingsShift 4.14s ease-out forwards; /* 10% faster than 4.6s */
        }
        
        @keyframes bgBuildingsShift {
            0% {
                transform: translateY(0) scale(1);
                opacity: 0.6;
            }
            100% {
                transform: translateY(10px) scale(1.01);
                opacity: 0.8;
            }
        }
        
        /* Building floor animation */
        .building-floor {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.36s ease, transform 0.36s ease; /* 10% faster than 0.4s */
        }
    `;
    document.head.appendChild(style);
}); 