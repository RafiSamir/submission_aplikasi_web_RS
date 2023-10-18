const createHeader = () => {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>Aplikasi Stasiun Kereta</h1>
      <button id="load-data">Muat Data</button>
    `;
  
    
    const loadButton = header.querySelector("#load-data");
    loadButton.addEventListener("click", () => {
    
      getData();
    });
  
    return header;
  };
  
  export default createHeader;
  