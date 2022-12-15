const iris = document.getElementById("iris");

document.onmousemove = () => {
  const xAxis = (event.clientX * 100) / window.innerWidth + "%";
  const yAxis = (event.clientY * 100) / window.innerHeight + "%";

  iris.style.left = xAxis;
  iris.style.top = yAxis;
  iris.style.transform = `translate(-${xAxis}, -${yAxis})`;
};
