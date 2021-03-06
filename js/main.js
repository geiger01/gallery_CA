'use strict';

$('document').ready(onInit);

function onInit() {
  renderProjs();
  renderModals();
  $('.submit-btn').click(onSubmit);
}

function renderProjs() {
  var projs = getProjs();
  var strHtmls = '';

  projs.map(function (proj, i) {
    return (strHtmls += `<div class="col-md-4 col-sm-6 portfolio-item">
    
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${
      i + 1
    }">
    <div class="portfolio-hover">
    
     <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="${proj.img}" alt="" />
    </a>
    <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.title}</p>
  </div>
    
    </div>`);
  });

  $('.projs').html(strHtmls);
}

function renderModals() {
  var projs = getProjs();
  var strHtmls = '';

  projs.map(function (proj, i) {
    return (strHtmls += `
       <div
      class="portfolio-modal modal fade"
      id="portfolioModal${i + 1}"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
    <h2>${proj.name}</h2>
     <p class="item-intro text-muted">
                    ${proj.title}
    </p>
    <a href="${proj.url}" target="_blank" >
    <img
    class="img-fluid d-block mx-auto"
    src="${proj.img}"
    alt=""
    />
    </a>
    <p>
                 ${proj.desc}
     </p>
      <ul class="list-inline">
                    <li>${proj.publishedAt}</li>
                    <li>Category: ${proj.labels}</li>
        </ul>

         <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
        >
          <i class="fa fa-times"></i>
                    Close Project
                  </button>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    `);
  });

  $('.modals-section').html(strHtmls);
}

function onSubmit() {
  var msg = $('.messege').val();
  var subject = $('.subject').val();
  var email = $('.email').val();

  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(email)) return;

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=tantangeiger@gmail.com&su=${subject}&body=${msg}`
  );
}
