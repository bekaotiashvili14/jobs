// const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// //search function
// function search() {
//   let searchInputValue = document.getElementById("search_info").value;

//   page.forEach((numberPage) => {
//     let _searchUrl = `https://recruting.dkcapital.ge/api/public/vacancy/v2/search?page=${numberPage}&searchKeyword=${searchInputValue}&region=&minPrice=&maxPrice=`;

//     fetch(_searchUrl, {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         let searchContainer = document.getElementById("container_search");
//         searchContainer.innerHTML = "";
//         data.vacancy.data.forEach((element) => {
//           if (element.fixed_amount === null) {
//             element.fixed_amount = "თანხა დაზუსტებული არაა";
//           }

//           if (element.CompanyDetail.logo === "") {
//             element.CompanyDetail.logo = "./images/noimage.jpeg";
//           }

//           searchContainer.innerHTML += `
//                <div class="vip_vacancy_container_JS">
//                 <div class="vip_vacancy_image__text__box_JS">
//                   <div class="vip_vacancy_image_JS">
//               <a href="./vacancy.html" ><img src="${element.CompanyDetail.logo}" alt="company logo" width="80px" /></a>
//                   </div>
//                   <div class="vip_vacancy_image_text_Js">
//                       <a href="./vacancy.html" class = "vacancy__Js_a">
//                     <h3>${element.position.name}</h3>
//                     <h5>${element.IndustryDetail.text}</h5>
//                     <h4>${element.CompanyDetail.brandname}</h4>
//                        </a>
//                   </div>
//                 </div>
//                 <div class="vip_vacancy_text_JS">
//                   <div class="vip_vacancy_text_JS_box">
//                     <img src="./svg/lari-svgrepo-com (1).svg" alt="lari" width="20px" />
//                     <h6>${element.fixed_amount}</h6>
//                   </div>
//                   <div class="vip_vacancy_text_JS_box">
//                     <img src="./svg/people-svgrepo-com.svg" alt="" width="20px" />
//                     <h6>საშუალო</h6>
//                   </div>

//                   <div class="vip_vacancy_text_JS_box">
//                     <img
//                       src="./svg/location-sign-svgrepo-com (1).svg"
//                       alt="location"
//                       width="20px"
//                     />
//                     <h6>${element.VacancyLocation.name}</h6>
//                   </div>
//                   <div class="vip_vacancy_text_JS_box">
//                     <img src="./svg/time-svgrepo-com.svg" alt="time" width="20px" />
//                     <h6>${element.work_schedule.name}</h6>
//                   </div>
//                 </div>
//               </div>
//                     `;
//         });
//       });
//   });
// }

async function search() {
  const searchInputValue = document.getElementById("search_info").value.trim();

  if (!searchInputValue) {
    console.log("Please enter a search keyword.");

    return;
  }

  const searchContainer = document.getElementById("container_search");
  searchContainer.innerHTML = "";

  for (let numberPage = 1; numberPage <= 11; numberPage++) {
    const searchUrl = `https://recruting.dkcapital.ge/api/public/vacancy/v2/search?page=${numberPage}&searchKeyword=${searchInputValue}&region=&minPrice=&maxPrice=`;

    try {
      const response = await fetch(searchUrl);
      const data = await response.json();

      data.vacancy.data.forEach((element) => {
        if (element.fixed_amount === null) {
          element.fixed_amount = "თანხა დაზუსტებული არაა";
        }

        if (element.CompanyDetail.logo === "") {
          element.CompanyDetail.logo = "./images/noimage.jpeg";
        }

        searchContainer.innerHTML += `
          <div class="vip_vacancy_container_JS">
            <div class="vip_vacancy_image__text__box_JS">
              <div class="vip_vacancy_image_JS">
                <a href="./vacancy.html"><img src="${element.CompanyDetail.logo}" alt="company logo" width="80px" /></a>
              </div>
              <div class="vip_vacancy_image_text_Js">
                <a href="./vacancy.html" class="vacancy__Js_a">
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
regionSearch();
function regionSearch(d) {
  const regionSelect = document.getElementById("regionSelect");
  let regionValue = document.getElementById("regionSelect").value;
  const _region = `https://recruting.dkcapital.ge/api/public/vacancy/LoadRegion`;
  fetch(_region, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        regionSelect.innerHTML += `
     <form action="">
     <select name="text" class="region_input">
      <option value="region">${element.text}</option>
     </select>
     </form>

          `;
      });
    });

  return regionValue;
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  search();
  regionSearch();
});
