let _apiFiveVip =
  "https://recruting.dkcapital.ge/api/public/vacancy/v2/search?type=vip";
fetch(_apiFiveVip, {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch VIP vacancies");
    }
    return response.json();
  })
  .then((data) => {
    let firstThreevacancy = document.getElementById(
      "container_vip_vacancy_for_vacancy"
    );
    data.vacancy.data.slice(0, 4).forEach((vip) => {
      if (vip.fixed_amount === null) {
        vip.fixed_amount = "თანხა დაზუსტებული არაა";
      }
      if (vip.CompanyDetail.logo === "") {
        vip.CompanyDetail.logo = "./images/noimage.jpeg";
      }

      let HTML = `
        <div class="vip_vacancy_container_JS">
          <div class="vip_vacancy_image__text__box_JS">
            <div class="vip_vacancy_image_JS">
              <a href="./vacancy.html"><img src="${vip.CompanyDetail.logo}" alt="" width="80px" /></a>
            </div>
            <div class="vip_vacancy_image_text_Js">
              <a href="./vacancy.html" class="vacancy__Js_a">
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
      firstThreevacancy.innerHTML += HTML;
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

let FindData = JSON.parse(sessionStorage.getItem("findVacancy"));
console.log(FindData);
if (FindData.avarage_min_bonus || FindData.avarage_max_bonus === null) {
  FindData.avarage_max_bonus = "";
  FindData.avarage_min_bonus = "თანხა დაზუსტებული არაა";
}

if (FindData.additional_info === null) {
  FindData.additional_info = "";
}
let containervacancy = document.getElementById("container_vacancy_for_vacancy");
let HTML = `
  <div class="vacancy_info_img_text">
    <img src="${FindData.CompanyDetail.logo}" alt="" width = "120px" height = "100px" class= "img_info_vacancy"/>
    <div class="vacancy_info_text">
      <h3>${FindData.position.name}</h3>
      <h5>${FindData.IndustryDetail.text}</h5>
      <h4>${FindData.CompanyDetail.brandname}</h4>
    </div>
  </div>
  <div class="info_for_vacancy">
    <span>
    <h3>სამუშაო გრაფიკი</h3>
    <h4>${FindData.WorkScheduleList.text}</h4>
    </span>
      <span>
    <h3>გამოცდილება</h3>
    <h4>${FindData.IndustryDetail.text}</h4>
    </span>
      <span>
    <h3>ანაზღაურება</h3>
    <h4>${FindData.fixed_amount}</h4>
    </span>
      <span>
    <h3>საშუალო ბონუსი</h3>
    <h4>${FindData.avarage_min_bonus} ${FindData.avarage_max_bonus}</h4>
    </span>
  </div>
  <div class="fullInfo_for_vacancy">
    <div class="fullInfo_for_vacancy_text">
    <h2>რა უნდა გააკეთო?</h2>
      <h3>
      ${FindData.what_to_do}
      </h3>
        <h2>დამატებითი ინფორმაცია</h2>
   <h3>
      ${FindData.VacancyReasonList}
      </h3>
      <h3>
       ${FindData.additional_info}
      </h3>
    </div>
  </div>

`;
containervacancy.innerHTML += HTML;
