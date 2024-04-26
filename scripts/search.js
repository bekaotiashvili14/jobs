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
  });

// Retrieve search values from session storage
let FindDataRegion = JSON.parse(sessionStorage.getItem("regionSelect"));
let FindDataSearchValue = JSON.parse(sessionStorage.getItem("search_info"));

// Fetch search results based on search values
const searchContainer = document.getElementById("container_search");
const pagesLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
pagesLength.forEach((pages) => {
  const searchUrl = `https://recruting.dkcapital.ge/api/public/vacancy/v2/search?page=${pages}&searchKeyword=${FindDataSearchValue}&region=${FindDataRegion}&minPrice=&maxPrice=`;
  console.log(searchUrl);
  fetch(searchUrl, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data.vacancy.data.forEach((element) => {
        if (element.fixed_amount === null) {
          element.fixed_amount = "თანხა დაზუსტებული არაა";
        }

        if (element.CompanyDetail.logo === "") {
          element.CompanyDetail.logo = "./images/noimage.jpeg";
        }

        searchContainer.innerHTML += `
          <div class="vip_vacancy_container_JS" onclick="vacancy(${element.id})">
            <div class="vip_vacancy_image__text__box_JS">
              <div class="vip_vacancy_image_JS">
                <a href="./vacancy.html"><img src="${element.CompanyDetail.logo}" alt="company logo" width="80px" /></a>
              </div>
              <div class="vip_vacancy_image_text_Js">
                <a class="vacancy__Js_a">
                  <h3>${element.position.name}</h3>
                  <h5>${element.IndustryDetail.text}</h5>
                  <h4>${element.CompanyDetail.brandname}</h4>
                </a>
              </div>
            </div>
            <div class="vip_vacancy_text_JS">
              <div class="vip_vacancy_text_JS_box">
                <img src="./svg/lari-svgrepo-com (1).svg" alt="lari" width="20px" />
                <h6>${element.fixed_amount}</h6>
              </div>
              <div class="vip_vacancy_text_JS_box">
                <img src="./svg/people-svgrepo-com.svg" alt="" width="20px" />
                <h6>საშუალო</h6>
              </div>
              <div class="vip_vacancy_text_JS_box">
                <img src="./svg/location-sign-svgrepo-com (1).svg" alt="location" width="20px" />
                <h6>${element.VacancyLocation.name}</h6>
              </div>
              <div class="vip_vacancy_text_JS_box">
                <img src="./svg/time-svgrepo-com.svg" alt="time" width="20px" />
                <h6>${element.work_schedule.name}</h6>
              </div>
            </div>
          </div>
        `;
      });
    });
});

function search() {
  let regionSelect = document.getElementById("regionSelect").value;
  let search_info = document.getElementById("search_info").value;
  sessionStorage.setItem("regionSelect", JSON.stringify(regionSelect));
  sessionStorage.setItem("search_info", JSON.stringify(search_info));
}
function goFullVacancyPage() {
  window.location.href = "fullVacancy.html";
}
