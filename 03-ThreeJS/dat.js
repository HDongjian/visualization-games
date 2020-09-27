//声明全局变量

var renderer, camera, scene, geometry, material, mesh, stats, gui
console.dir(THREE)
// stats = new Stats()
// document.body.appendChild(stats.dom)
//初始化渲染器
function initRenderer() {
  renderer = new THREE.WebGLRenderer() //实例化渲染器
  renderer.setSize(window.innerWidth, window.innerHeight) //设置宽高
  document.body.appendChild(renderer.domElement) //添加到Dom
}

// 初始化场景
function initScene() {
  scene = new THREE.Scene()
}

//初始化相机
function initCamera() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    200
  ) //实例化相机
  camera.position.set(0, 0, 15)
}

// 创建模型
function initMesh() {
  geometry = new THREE.BoxGeometry(2, 2, 2) // 创建几何体
  meterial = new THREE.MeshNormalMaterial() // 创建材质

  mesh = new THREE.Mesh(geometry, material) // 创建网格
  mesh.name = 'lft'
  scene.add(mesh) //将网格添加到场景
}

// 运行动画
function animate() {
  requestAnimationFrame(animate) //循环调用函数
  mesh.rotation.x += 0.01 // 每帧网格模型沿X轴旋转0.01弧度
  mesh.rotation.y += 0.02 // 每帧网格模型沿Y轴旋转0.02弧度
  renderer.render(scene, camera) //渲染界面
}
var controls = {
  positionX: 0,
  positionY: 0,
  positionZ: 0,
}
// 初始化函数，页面加载完成之后调用
function init() {
  initRenderer() //渲染
  initScene() //场景
  initCamera() //相机

  initMesh() //物体

  gui = new dat.GUI() //实例化
  gui.add(controls, 'positionX', -1, 1).onChange(updatePosition)
  gui.add(controls, 'positionY', -1, 1).onChange(updatePosition)
  gui.add(controls, 'positionZ', -1, 1).onChange(updatePosition)

  function updatePosition() {
    mesh.position.set(
      controls.positionX,
      controls.positionY,
      controls.positionZ
    )
  }
  animate() //旋转动画
}
