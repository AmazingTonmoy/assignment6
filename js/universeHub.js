let displayedItemsStart = 0;
let displayedItemsEnd = 6;

const loadUniverse = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const spinner = document.getElementById("spinner");
  const res = await fetch(url);
  const data = await res.json();
  showUniverse(data.data.tools);
  spinner.classList.add('loader-hidden')
  document.getElementById('sort-btn').addEventListener('click',function(){
    const sortedData = data.data.tools.sort((a, b) => new Date(b.published_in) - new Date(a.published_in));
    showUniverse(sortedData);
  });
 

};

// function for displaying items
const showUniverse = (allData) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
    allData= allData.slice(displayedItemsStart, displayedItemsEnd );
  for (const justData of allData) {
    // create card div and add data
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
        <div class="card p-4 h-100 bg-primary-subtle">
          <img class="card-img-top h-100" src="${justData.image}"  alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold">Features</h5>
            <ol class="px-3">
              <li>${justData.features[0]}</li>
              <li>${justData.features[1]}</li>
              <li>${justData.features[2]}</li>
            </ol>
            <hr> 
            <div class= 'row d-flex'>
              <div class="col-8 col-lg-9" >
                <h5 class="card-title fw-bold">${justData.name}</h5>
                <p class="mt-3"><i class="fa-regular fa-calendar-days pe-2"></i> ${justData.published_in}</p>
              </div>
              <div class="col-4 col-lg-3 my-auto">
                <button  data-bs-target="#staticBackdrop" data-bs-toggle="modal" class="btn border-0" id="card-btn" onclick = "universeDetails('${justData.id}')"  ><i class="fa-solid fa-arrow-right text-danger bg-danger bg-opacity-10 p-3 rounded-circle"></i></button>
              </div>
            </div>
          </div>
        </div>
      
    `;
    cardContainer.appendChild(cardDiv);

   
    

  
    
  }
};

loadUniverse(); // load initial data

// add click event listener to See More button
document.getElementById("see-more-btn")
  .addEventListener("click", function () {
    
    displayedItemsStart = 0;
    displayedItemsEnd  = 12;
    loadUniverse()
    this.innerText = "No More";
  });


// //   universe details
const universeDetails = async aiId =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${aiId}`;
    const res =await fetch(url)
    const data = await res.json()
    showUniverseDetails(data.data)
    


}
// modal is inside there
const showUniverseDetails = details =>{
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML =`
    <!-- left side div -->
    <div class="col-12 col-lg-5  p-4 " id="modal-left-container">

        <!-- 1st line section start -->
        <div>  
            <h5>${details.description}</h5> 
        </div>
      
     <!-- 1st line section End -->
      
         <!--  2nd inside line section start -->
             <div class="row">
    
             <div class="p-2 col-12 col-lg-4"> 
        
        <p class="text-center  w-100  h-75 px-3 py-3 mt-3  fw-bold" id='cost-box1'> ${details.pricing ? details.pricing[0].price : 'No data'}  ${details.pricing ? details.pricing[0].plan : 'no data'}</p> 

    </div>
    
    <div class="p-2 col-12 col-lg-4">
        <p class="text-center   w-100 h-75 px-3 py-3 mt-3 fw-bold" id='cost-box2'> ${details.pricing ? details.pricing[1].price : 'No data'}  ${details.pricing ? details.pricing[1].plan : 'no data'}
            </p>
    </div>
   
    <div class="p-2 col-12 col-lg-4">
        <p class="text-center w-100 h-75 px-3 py-3 mt-3 fw-bold"id='cost-box3'>${details.pricing ? details.pricing[2].price : 'No data'}  ${details.pricing ? details.pricing[2].plan : 'no data '}</p>
    </div>
</div>
<!-- 2nd line section end -->

<!-- 3rd line section start -->

 <!-- third inside line column div -->
 <div class="row mt-3 p-1">
    <!-- third line left side -->
    <div class="col-12 col-lg-7">
        <h3>Features</h3>
        <ul class= "p-1">
            <li>${details.features[1].feature_name}</li>
            <li>${details.features[2].feature_name}</li>
            <li>${details.features[3].feature_name}</li>
        </ul>

    </div>

    <!-- third line right side -->
    <div class="col-12 col-lg-5">
        <h3>Integrations</h3>
        <ul class= "p-1">
    <li>${details.integrations && details.integrations[0] !== undefined ? details.integrations[0] : 'no data found'}</li>
    <li>${details.integrations && details.integrations[1] !== undefined ? details.integrations[1] : 'no data found'}</li>
    <li>${details.integrations && details.integrations[2] !== undefined ? details.integrations[2] : 'no data found'}</li>
</ul>

    </div>

</div>

<!-- 3rd line section end -->



    </div>

    <!-- ================== =============================== -->
    <!-- right side div -->
    <div class="col-12 col-lg-5  p-4 ms-3 "id="modal-right-container" >
        <div class="position-relative">
            <img class="w-100  rounded-3" src="${details.image_link[0]}" alt="">
            <h3 class="text-center mt-5">${details.input_output_examples? details.input_output_examples[0].input : "no data found"}</h3>
            <p class="text-center">${details.input_output_examples ? details.input_output_examples[0].output : "No data found"}</p>
            <div class="position-absolute top-0 mt-1 me-2 end-0 z-3"id="modal-img-btn">
            <button class="btn btn-danger w-100"  style="display: ${details.accuracy && details.accuracy.score ? 'block' : 'none'}">
              ${details.accuracy && details.accuracy.score ? details.accuracy.score * 100 : ''}% accuracy
            </button>
          </div>
          
        </div>
        <!-- 1st line section start -->


    </div>
    `
    
}
// 



