function main()
{
    var canvas = document.getElementById('myCanvas');   //kertas
    var gl = canvas.getContext('webgl');                //alat

    //nanti buat vertices dan lokasinya ya yas disini yang panjang
    //gambar 1 
    /**
     * A(0.7, 0.65)
        B(0.85, 0.65)
        C(0.625, 0.25)
        D(0.675, 0.6)
        E(0.8, 0.6)
        F(0.65, 0.325)
     */
    const vertexData = {
        bodyColor : [0/256, 255/256, 127/256],
        bodyCenter: [0.4, 0.5],
        bodyA: [0.5, 0.1],
        bodyB: [0.3, 0.1],
        bodyC: [0.2, 0.2],
        bodyD: [0.1, 0.8],
        bodyE: [0.2, 0.7],
        bodyF: [0.6, 0.7],
        bodyG: [0.7, 0.8],
        bodyH: [0.6, 0.2],
        bodyI: [0.2, 0.9],
        bodyJ: [0.6, 0.9],

        topColor: [50/256, 205/256, 50/256],
        topCenter: [0.4, 0.8],

        handleA: [0.675, 0.65],
        handleB: [0.9, 0.65],
        handleC: [0.625, 0.35],
        handleD: [0.66, 0.6],
        handleE: [0.775, 0.6],
        handleF: [0.64, 0.44]

    };
    /**
     * top:
     * EDI
     * EFI
     * FIJ
     * FGJ
     * 
     * body:
     * CDE 
     * BCE 
     * ABE 
     * AFE 
     * AFH 
     * FGH
     * 
     * handle:
     * ADE 
     * ABE
     * BCE 
     * CEF
     */
     
     
     
     

    //gambar 2
    const vertexData2 = {
        bodyColor : [0/256, 255/256, 127/256],
        bodyCenter: [-0.4, 0.5],
        bodyA: [-0.5, 0.1],
        bodyB: [-0.3, 0.1],
        bodyC: [-0.2, 0.2],
        bodyD: [-0.1, 0.8],
        bodyE: [-0.2, 0.7],
        bodyF: [-0.6, 0.7],
        bodyG: [-0.7, 0.8],
        bodyH: [-0.6, 0.2],
        bodyI: [-0.2, 0.9],
        bodyJ: [-0.6, 0.9],

        topColor: [50/256, 205/256, 50/256], 
        topCenter: [-0.4, 0.8],

        handleA: [-0.675, 0.65],
        handleB: [-0.9, 0.65],
        handleC: [-0.625, 0.35],
        handleD: [-0.66, 0.6],
        handleE: [-0.775, 0.6],
        handleF: [-0.64, 0.44]

    };

    const vertices = [
        //body
        ...vertexData.bodyC, ...vertexData.bodyColor,
        ...vertexData.bodyD, ...vertexData.bodyColor,
        ...vertexData.bodyE, ...vertexData.bodyColor,

        ...vertexData.bodyB, ...vertexData.bodyColor,
        ...vertexData.bodyC, ...vertexData.bodyColor,
        ...vertexData.bodyE, ...vertexData.bodyColor,

        ...vertexData.bodyA, ...vertexData.bodyColor,
        ...vertexData.bodyB, ...vertexData.bodyColor,
        ...vertexData.bodyE, ...vertexData.bodyColor,

        ...vertexData.bodyA, ...vertexData.bodyColor,
        ...vertexData.bodyF, ...vertexData.bodyColor,
        ...vertexData.bodyE, ...vertexData.bodyColor,

        ...vertexData.bodyA, ...vertexData.bodyColor,
        ...vertexData.bodyF, ...vertexData.bodyColor,
        ...vertexData.bodyH, ...vertexData.bodyColor, 

        ...vertexData.bodyF, ...vertexData.bodyColor,
        ...vertexData.bodyG, ...vertexData.bodyColor,
        ...vertexData.bodyH, ...vertexData.bodyColor, //6x3  x5 = 90

        //top
        ...vertexData.bodyE, ...vertexData.topColor,
        ...vertexData.bodyD, ...vertexData.topColor,
        ...vertexData.bodyI, ...vertexData.topColor,

        ...vertexData.bodyE, ...vertexData.topColor,
        ...vertexData.bodyF, ...vertexData.topColor,
        ...vertexData.bodyI, ...vertexData.topColor,

        ...vertexData.bodyF, ...vertexData.topColor,
        ...vertexData.bodyI, ...vertexData.topColor,
        ...vertexData.bodyJ, ...vertexData.topColor,

        ...vertexData.bodyF, ...vertexData.topColor,
        ...vertexData.bodyG, ...vertexData.topColor,
        ...vertexData.bodyJ, ...vertexData.topColor, // 4x3

        //side
        ...vertexData.handleA, ...vertexData.bodyColor,
        ...vertexData.handleD, ...vertexData.bodyColor,
        ...vertexData.handleE, ...vertexData.bodyColor,

        ...vertexData.handleA, ...vertexData.bodyColor,
        ...vertexData.handleB, ...vertexData.bodyColor,
        ...vertexData.handleE, ...vertexData.bodyColor,

        ...vertexData.handleB, ...vertexData.bodyColor,
        ...vertexData.handleC, ...vertexData.bodyColor,
        ...vertexData.handleE, ...vertexData.bodyColor,

        ...vertexData.handleC, ...vertexData.bodyColor,
        ...vertexData.handleE, ...vertexData.bodyColor,
        ...vertexData.handleF, ...vertexData.bodyColor, //4x3 = 42   x5

        //body
        ...vertexData2.bodyC, ...vertexData2.bodyColor,
        ...vertexData2.bodyD, ...vertexData2.bodyColor,
        ...vertexData2.bodyE, ...vertexData2.bodyColor,

        ...vertexData2.bodyB, ...vertexData2.bodyColor,
        ...vertexData2.bodyC, ...vertexData2.bodyColor,
        ...vertexData2.bodyE, ...vertexData2.bodyColor,

        ...vertexData2.bodyA, ...vertexData2.bodyColor,
        ...vertexData2.bodyB, ...vertexData2.bodyColor,
        ...vertexData2.bodyE, ...vertexData2.bodyColor,

        ...vertexData2.bodyA, ...vertexData2.bodyColor,
        ...vertexData2.bodyF, ...vertexData2.bodyColor,
        ...vertexData2.bodyE, ...vertexData2.bodyColor,

        ...vertexData2.bodyA, ...vertexData2.bodyColor,
        ...vertexData2.bodyF, ...vertexData2.bodyColor,
        ...vertexData2.bodyH, ...vertexData2.bodyColor, 

        ...vertexData2.bodyF, ...vertexData2.bodyColor,
        ...vertexData2.bodyG, ...vertexData2.bodyColor,
        ...vertexData2.bodyH, ...vertexData2.bodyColor, //6x3

        //top
        ...vertexData2.bodyE, ...vertexData2.topColor,
        ...vertexData2.bodyD, ...vertexData2.topColor,
        ...vertexData2.bodyI, ...vertexData2.topColor,

        ...vertexData2.bodyE, ...vertexData2.topColor,
        ...vertexData2.bodyF, ...vertexData2.topColor,
        ...vertexData2.bodyI, ...vertexData2.topColor,

        ...vertexData2.bodyF, ...vertexData2.topColor,
        ...vertexData2.bodyI, ...vertexData2.topColor,
        ...vertexData2.bodyJ, ...vertexData2.topColor,

        ...vertexData2.bodyF, ...vertexData2.topColor,
        ...vertexData2.bodyG, ...vertexData2.topColor,
        ...vertexData2.bodyJ, ...vertexData2.topColor, // 4x3

        //side
        ...vertexData2.handleA, ...vertexData2.bodyColor,
        ...vertexData2.handleD, ...vertexData2.bodyColor,
        ...vertexData2.handleE, ...vertexData2.bodyColor,

        ...vertexData2.handleA, ...vertexData2.bodyColor,
        ...vertexData2.handleB, ...vertexData2.bodyColor,
        ...vertexData2.handleE, ...vertexData2.bodyColor,

        ...vertexData2.handleB, ...vertexData2.bodyColor,
        ...vertexData2.handleC, ...vertexData2.bodyColor,
        ...vertexData2.handleE, ...vertexData2.bodyColor,

        ...vertexData2.handleC, ...vertexData2.bodyColor,
        ...vertexData2.handleE, ...vertexData2.bodyColor,
        ...vertexData2.handleF, ...vertexData2.bodyColor, //4x3 = 42
    ];

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, `
    precision mediump float;
    attribute vec2 position;
    attribute vec3 color;
    varying vec3 vColor;
    void main()
    {
        vColor = color;
        gl_Position = vec4(position, 0.0, 1.0);
    }`);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, `
    precision mediump float;
    varying vec3 vColor;
    void main()
    {
        gl_FragColor = vec4(vColor, 1);
    }`);
    gl.compileShader(fragmentShader);
    console.log(gl.getShaderInfoLog(fragmentShader));

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);
    gl.useProgram(program);

    const positionLocation = gl.getAttribLocation(program, `position`);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(positionLocation);

    const aColor = gl.getAttribLocation(program, `color`);
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);



    var speedRaw = 1;
    var speed = 0.0053;
    var change = 0;
    var counter = 0;
    var uChange = gl.getUniformLocation(program, "uChange");

    function moveVertices () {
        
        if (vertices[16] < -1.0 || vertices[101] > 1.0) {
            speed = speed * -1;
        }
        
        for (let i = 1; i < vertices.length / 2; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        // if (change >= 0.5 || change <= -0.5) speed = -speed;
        change = change + speed;
        gl.uniform1f(uChange, change);
        
        gl.clearColor(205/256, 133/256, 63/256, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 84);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}