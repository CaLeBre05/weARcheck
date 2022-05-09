<template>
  <div>
    <div id="app">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "ARComponent",
  components: {},
  mounted() {
    this.runWebGL();
  },
  methods: {
    runWebGL() {
      const canvas = this.$refs.canvas;
      const gl = canvas.getContext(`webgl`);

      if (!gl) {
        throw new Error(`webGL not supported`);
      }

      console.log(`Starting...`);

      const vertexData = new Float32Array([0, 1, 0, 1, -1, 0, -1, -1, 0]);

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // bind this buffer as the current buffer; as an array of vertices
      gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW); // STATIC_DRAW if not rewriting (optomise) common alternative is DYNAMIC_DRAW

      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(
        vertexShader,
        `
attribute vec3 position;
void main() { 
    gl_Position = vec4(position, 1);
}
`
      );
      gl.compileShader(vertexShader);

      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(
        fragmentShader,
        `
void main(){
    gl_FragColor = vec4(1, 0, 0, 1);
}
`
      );
      gl.compileShader(fragmentShader);

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      const positionLocation = gl.getAttribLocation(program, `position`);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

      gl.useProgram(program);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
  },
};
</script>
