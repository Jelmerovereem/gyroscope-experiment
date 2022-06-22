const circle = document.querySelector(".circle");
const x = document.querySelector(".x");
const y = document.querySelector(".y");
const z = document.querySelector(".z");

const gyroScope = new Gyroscope({ frequency: 60 });

let values = {
  x: 0,
  y: 0,
  z: 0,
};

gyroScope.addEventListener("reading", (e) => {
  // alert("reading...");
  values.x = values.x + gyroScope.x * 10;
  values.y = values.y + gyroScope.y * 10;
  values.z = values.z + gyroScope.z * 10;
  //   console.log("X-axis " + gyroScope.x);
  //   console.log("Y-axis " + gyroScope.y);
  //   console.log("Z-axis " + gyroScope.z);
  //   x.innerText = gyroScope.x;
  //   y.innerText = gyroScope.y;
  //   z.innerText = gyroScope.z;
  circle.style.transform = `translate3d(${values.y}px, ${values.x}px, ${values.z}px)`;
  // console.log(values);
});

gyroScope.start();
