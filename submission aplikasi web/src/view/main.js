import Data from "../data/data.js";
import createHeader from "../component/header.js"; 

const main = () => {
  const getData = async () => {
    try {
      const result = await Data.getData();
      
      displayData(result);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const displayData = (data) => {
    
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = '';

    data.forEach(station => {
      const stationElement = document.createElement("div");
      stationElement.textContent = station.name;
      dataContainer.appendChild(stationElement);
    });
  };

  const loadButton = document.getElementById("load-data");
  loadButton.addEventListener("click", () => {
    getData();
  });


  
  const header = createHeader();
  document.body.appendChild(header);

  getData();
};

export default main;
