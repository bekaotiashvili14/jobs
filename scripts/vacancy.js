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
    data.vacancy.data.slice(0, 5).forEach((vip) => {
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
