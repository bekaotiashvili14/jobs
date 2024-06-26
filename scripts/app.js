// vip vacancy fetch container
vipFucntion();
function vipFucntion() {
  let _apiVip =
    "https://recruting.dkcapital.ge/api/public/vacancy/v2/search?type=vip";
  fetch(_apiVip, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let vipContainer = document.getElementById("vip_vacancy_container");
      vipContainer.innerHTML = "";
      items.innerHTML = "";
      actualData = data.vacancy.data;
      data.vacancy.data.forEach((vip) => {
        if (vip.fixed_amount === null) {
          vip.fixed_amount = "თანხა დაზუსტებული არაა";
        }
        if (vip.CompanyDetail.logo === "") {
          vip.CompanyDetail.logo = "./images/noimage.jpeg";
        }

        let HTML = `
  <div class="vip_vacancy_container_JS" onclick="vacancy(${vip.id})">
    <div class="vip_vacancy_image__text__box_JS">
      <div class="vip_vacancy_image_JS">
      <a href="./vacancy.html"><img src="${vip.CompanyDetail.logo}" alt=""  width = "80px" />  </a>
      </div>
      <div class="vip_vacancy_image_text_Js">
      
      <a href="./vacancy.html" class = "vacancy__Js_a" >
  <h3>${vip.position.name}</h3>
  <h5>${vip.IndustryDetail.text}</h5>
  <h4>${vip.CompanyDetail.brandname}</h4>
     </a>
      </div>
    </div>
  <div class="vip_vacancy_text_JS">
    <div class="vip_vacancy_text_JS_box">
      <img src="./svg/lari-svgrepo-com (1).svg" alt="lari" width="20px" />
      <h6>${vip.fixed_amount}</h6>
    </div>
    <div class="vip_vacancy_text_JS_box">
      <img src="./svg/people-svgrepo-com.svg" alt="" width="20px" />
      <h6>საშუალო</h6>
    </div>
    <div class="vip_vacancy_text_JS_box">
      <img
        src="./svg/location-sign-svgrepo-com (1).svg"
        alt="location"
        width="20px"
      />
      <h6>${vip.VacancyLocation.name}</h6>
    </div>
    <div class="vip_vacancy_text_JS_box">
      <img src="./svg/time-svgrepo-com.svg" alt="time" width="20px" />
      <h6>${vip.work_schedule.name}</h6>
    </div>
  </div>
  </div>
        `;
        vipContainer.innerHTML += HTML;
      });
    });
}
//vip containerfetch
function clickButton(d, b) {
  let vipContainer = document.getElementById("vip_vacancy_container");
  vipContainer.innerHTML = "";
  let items = document.getElementById("items");
  items.innerHTML = "";
  let _apiCategory = `https://recruting.dkcapital.ge/api/public/vacancy/v2/search?page=undefined&id=${d}&type=${b}`;

  fetch(_apiCategory, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      actualData = data.vacancy.data;

      let items = document.getElementById("items");
      items.innerHTML = "";

      data.vacancy.data.forEach((vip) => {
        if (vip.fixed_amount === null) {
          vip.fixed_amount = "თანხა დაზუსტებული არაა";
        }
        if (vip.CompanyDetail.logo === "") {
          vip.CompanyDetail.logo = "./images/noimage.jpeg";
        }

        let HTML = `
          <div class="vip_vacancy_container_JS"  onclick="vacancy(${vip.id})">
            <div class="vip_vacancy_image__text__box_JS">
              <div class="vip_vacancy_image_JS">
                <img src="${vip.CompanyDetail.logo}" alt="" width="80px" />
              </div>
              <div class="vip_vacancy_image_text_Js">
                <h3>${vip.position.name}</h3>
                <h5>${vip.IndustryDetail.text}</h5>
                <h4>${vip.CompanyDetail.brandname}</h4>
              </div>
            </div>
            <div class="vip_vacancy_text_JS">
              <div class="vip_vacancy_text_JS_box">
                <img src="./svg/lari-svgrepo-com (1).svg" alt="lari" width="20px" />
                <h6>${vip.fixed_amount}</h6>
              </div>
              <div class="vip_vacancy_text_JS_box">
                <img src="./svg/people-svgrepo-com.svg" alt="" width="20px" />
                <h6>საშუალო</h6>
              </div>
              <div class="vip_vacancy_text_JS_box">
                <img src="./svg/location-sign-svgrepo-com (1).svg" alt="location" width="20px" />
                <h6>${vip.VacancyLocation.name}</h6>
              </div>
              <div class="vip_vacancy_text_JS_box">
                <img src="./svg/time-svgrepo-com.svg" alt="time" width="20px" />
                <h6>${vip.work_schedule.name}</h6>
              </div>
            </div>
          </div>
        `;
        items.innerHTML += HTML;
      });
    });
}
let actualData;
function vacancy(id) {
  let objSave = actualData.find((item) => item.id === id);
  sessionStorage.setItem("findVacancy", JSON.stringify(objSave));
  window.location.href = "vacancy.html";
}
// category container fetch
let _apiCategory = "https://recruting.dkcapital.ge/api/public/categories";
fetch(_apiCategory, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    let container_category = document.getElementById("container_category");
    data.forEach((category) => {
      let d = category.id;
      let b = category.type;
      let HTML = `

                <div class="category_JS" onclick="clickButton(${d}, '${b}')">
                    <div class="category_svg_JS">
                        <img src="${category.file}" alt="${category.name}" class="category_svg_image" />
                    </div>
                    <div class="category_tex_JS">
                        <h3>${category.name}</h3>
                    </div>

                </div>

            `;
      container_category.innerHTML += HTML;
    });
  });

//////////////////////////////
function search() {
  let regionSelect = document.getElementById("regionSelect").value;
  let search_info = document.getElementById("search_info").value;
  sessionStorage.setItem("regionSelect", JSON.stringify(regionSelect));
  sessionStorage.setItem("search_info", JSON.stringify(search_info));
  window.location.href = "search.html";
}

function populateRegionSelect() {
  const regionSelect = document.getElementById("regionSelect");
  const regionUrl = `https://recruting.dkcapital.ge/api/public/vacancy/LoadRegion`;
  fetch(regionUrl, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        regionSelect.innerHTML += `
          <option value="${element.id}">${element.text}</option>
        `;
      });
    })
    .catch((error) => {
      console.error("Error fetching regions:", error);
    });
}

populateRegionSelect();

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const regionValue = document.getElementById("regionSelect").value;
  search(regionValue);
});

function goFullVacancyPage() {
  window.location.href = "fullVacancy.html";
}
