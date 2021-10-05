function sin(a)
    {
        return Math.sin(Math.PI * a);
    }

function cos(a)
{
    return Math.cos(Math.PI * a);
}

function main(){

    var canvas = document.getElementById('myCanvas');   //kertas
    var gl = canvas.getContext('webgl');                //alat

    var kiri = [];

    //lingkaran bagian atas
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270) / 180;
        var k = (i+271) / 180;
        var vertex1 = [
            sin(j) * 0.3 - 0.5 , cos(j) * 0.15 + 0.3, 
            50/256, 205/256, 50/256, // color
        ];

        var vertex2 = [
            -0.5, 0.3, 
            50/256, 205/256, 50/256, // color
        ];

        var vertex3 = [
            sin(k) * 0.3 - 0.5 , cos(k) * 0.15 + 0.3, 
            50/256, 205/256, 50/256, //color
        ];

        kiri = kiri.concat(vertex1, vertex2, vertex3);
    }

    //lingkaran bagian bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = i / 180;
        var k = (i+1)  / 180;
        var vertex1 = [
            sin(j) * 0.2 - 0.5 , cos(j) * 0.1 - 0.5,
            50/256, 205/256, 50/256, //color
        ];

        var vertex2 = [
            -0.5, -0.5, 
            50/256, 205/256, 50/256,
        ];

        var vertex3 = [
            sin(k) * 0.2 - 0.5 , cos(k) * 0.1 - 0.5, 
            50/256, 205/256, 50/256,
        ];

        kiri = kiri.concat(vertex1, vertex2, vertex3);
    }
    
    var A = kiri.slice(180*5*3, 180*5*3+2);
    A = A.concat([152/256, 251/256, 152/256,]);
    var B = kiri.slice(181*5*3, 181*5*3+5);
    var C = kiri.slice(5, 7);
    C = C.concat([152/256, 251/256, 152/256,]);
    var D = kiri.slice(361*5*3, 361*5*3+5);
    var E = kiri.slice(0*5*3, 0*5*3+2);
    E = E.concat([152/256, 251/256, 152/256,]);

    kiri = kiri.concat(A, B, C);
    kiri = kiri.concat(B, C, D);
    kiri = kiri.concat(C, D, E);

    //lingkaran bagian bawah atas
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 90) / 180;
        var k = (i+91)  / 180;
        var vertex1 = [
            sin(j) * 0.3 - 0.5 , cos(j) * 0.15 + 0.3, 
            50/256, 205/256, 50/256,
        ];

        var vertex2 = [
            -0.5, 0.3, 
            50/256, 205/256, 50/256,
        ];

        var vertex3 = [
            sin(k) * 0.3 - 0.5 , cos(k) * 0.15 + 0.3, 
            50/256, 205/256, 50/256,
        ];

        kiri = kiri.concat(vertex1, vertex2, vertex3);
    }

    var kanan = [];
    //lingkaran bagian atas
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 270)  / 180;
        var k = (i+271)  / 180;
        var vertex1 = [
            sin(j) * 0.3 + 0.6 , cos(j) * 0.15 + 0.3, 
            50/256, 205/256, 50/256,
        ];

        var vertex2 = [
            0.0, 0.3, // ini diubah biar kaya ada handlenya
            50/256, 205/256, 50/256,
        ];

        var vertex3 = [
            sin(k) * 0.3 + 0.6 , cos(k) * 0.15 + 0.3, 
            50/256, 205/256, 50/256,
        ];

        kanan = kanan.concat(vertex1,  vertex2, vertex3);
    }

    //lingkaran bagian bawah
    for(var i = 90; i<=270; i+=1)
    {
        var j = i  / 180;
        var k = (i+1)  / 180;
        var vertex1 = [
            sin(j) * 0.2 + 0.6 , cos(j) * 0.1 - 0.5, 
            50/256, 205/256, 50/256,
        ];

        var vertex2 = [
            0.6, -0.5, 
            50/256, 205/256, 50/256,
        ];

        var vertex3 = [
            sin(k) * 0.2 + 0.6 , cos(k) * 0.1 - 0.5, 
            50/256, 205/256, 50/256,
        ];

        kanan = kanan.concat(vertex1, vertex2, vertex3);
    }
    
    var A = kanan.slice(180*5*3, 180*5*3+2);
    A = A.concat([152/256, 251/256, 152/256,]);
    var B = kanan.slice(181*5*3, 181*5*3+5);
    var C = kanan.slice(5, 7);
    C = C.concat([152/256, 251/256, 152/256,]);
    var D = kanan.slice(361*5*3, 361*5*3+5);
    var E = kanan.slice(0*5*3, 0*5*3+2);
    E = E.concat([50/256, 205/256, 50/256,]);

    kanan = kanan.concat(A, B, C);
    kanan = kanan.concat(B, C, D);
    kanan = kanan.concat(C, D, E);

    //pegangan bagian atas
    for(var i = 0; i<=90; i+=1)
    {
        var j = (i + 270)  / 180;
        var k = (i+271)  / 180;
        var vertex1 = [
            sin(j) * 0.2 + 0.3 , cos(j) * 0.05 + 0.15, 
            205/256, 133/256, 63/256,
        ];

        var vertex2 = [
            0.325, 0.15, // ini diubah biar kaya ada handlenya
            205/256, 133/256, 63/256,
        ];

        var vertex3 = [
            sin(k) * 0.2 + 0.3 , cos(k) * 0.05 + 0.15, 
            205/256, 133/256, 63/256,
        ];

        kanan = kanan.concat(vertex1,  vertex2, vertex3);
    }

    //pegangan bagian bawah
    for(var i = 90; i<=180; i+=1)
    {
        var j = (i + 90)  / 180;
        var k = (i+91)  / 180;
        var vertex1 = [
            sin(j) * 0.2 + 0.3 , cos(j) * 0.05 + 0.15, 
            205/256, 133/256, 63/256,
        ];

        var vertex2 = [
            0.325, 0.15, 
            205/256, 133/256, 63/256,
        ];

        var vertex3 = [
            sin(k) * 0.2 + 0.3 , cos(k) * 0.05 + 0.15, 
            205/256, 133/256, 63/256,
        ];

        kanan = kanan.concat(vertex1, vertex2, vertex3);
    }

    //lingkaran bagian bawah atas
    for(var i = 0; i<=180; i+=1)
    {
        var j = (i + 90)  / 180;
        var k = (i+91)  / 180;
        var vertex1 = [
            sin(j) * 0.3 + 0.6 , cos(j) * 0.15 + 0.3, 
            50/256, 205/256, 50/256,
        ];

        var vertex2 = [
            0.6, 0.3, 
            50/256, 205/256, 50/256,
        ];

        var vertex3 = [
            sin(k) * 0.3 + 0.6 , cos(k) * 0.15 + 0.3, 
            50/256, 205/256, 50/256,
        ];

        kanan = kanan.concat(vertex1, vertex2, vertex3);
    }

    var vertices = [...kiri, ...kanan]

    var kiri_len = kiri.length / 5;
    var kanan_len = kanan.length / 5;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderCode = `
    attribute vec2 aPosition;
    attribute vec3 aColor;
    varying vec3 vColor;
    uniform mat4 u_matrix;

    void main(){
        gl_Position = u_matrix * vec4(aPosition, 0, 1);
        vColor = aColor;
    }`;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    var compiled = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
    if (!compiled) {
        console.error(gl.getShaderInfoLog(vertexShader));
    }

    var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;

    void main(){
        gl_FragColor = vec4(vColor, 1.0);
    }
    `;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderCode);
    gl.compileShader(fragmentShader);

    compiled = gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS);
    if (!compiled) {
        console.error(gl.getShaderInfoLog(fragmentShader));
    }

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);


    var linked = gl.getProgramParameter(shaderProgram, gl.LINK_STATUS);
    if (!linked) {
        console.error(gl.getProgramInfoLog(shaderProgram));
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    var aPosition = gl.getAttribLocation(shaderProgram, `aPosition`);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, `aColor`);
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    let uchange = 0;
    let speed = 0.0035;
    function drawScene() {
        if(uchange >= 0.5 || uchange <=-0.3) speed = -speed;
        uchange += speed;
        gl.useProgram(shaderProgram);
        const Objekkiri = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ]
        
        const Objekkanan = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, uchange, 0.0, 1.0,
        ]
        
        gl.clearColor(205/256, 133/256, 63/256, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const u_matrix = gl.getUniformLocation(shaderProgram, 'u_matrix');
        gl.uniformMatrix4fv(u_matrix, false, Objekkiri);
    
        gl.drawArrays(gl.TRIANGLES, 0, kiri_len);
        
        gl.uniformMatrix4fv(u_matrix, false, Objekkanan);
        gl.drawArrays(gl.TRIANGLES, kiri_len, kanan_len);

        requestAnimationFrame(drawScene);
    }
    drawScene();
}