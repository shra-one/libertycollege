$(function () {
  AOS.init();

  $(".js-counter").countUp({
    time: 2000,
    delay: 10,
  });

  $(".js-testimonials").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    adaptiveHeight: false,
    speed: 900,
    autoplaySpeed: 700,
    appendArrows: $("#testimonialsSlidercontrols"),
    prevArrow: `<div class="icon slick-prev">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="circle" d="M19.1667 9.83333C19.1667 14.988 14.988 19.1667 9.83333 19.1667C4.67868 19.1667 0.5 14.988 0.5 9.83333C0.5 4.67868 4.67868 0.5 9.83333 0.5C14.988 0.5 19.1667 4.67868 19.1667 9.83333Z" fill="#F7EBE8" stroke="#CE2827"/>
    <path class="arrow"  d="M12.1912 5.42529L7.32129 9.95835L12.2066 14.4648" stroke="#CE2827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    </div>
    
    `,
    nextArrow: `<div class="icon slick-next">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="circle" d="M0.499838 9.83333C0.499838 14.988 4.67851 19.1667 9.83317 19.1667C14.9878 19.1667 19.1665 14.988 19.1665 9.83333C19.1665 4.67868 14.9878 0.5 9.83317 0.5C4.67851 0.5 0.499838 4.67868 0.499838 9.83333Z" fill="#F7EBE8" stroke="#CE2827"/>
    <path class="arrow" d="M7.47526 5.42529L12.3452 9.95835L7.45989 14.4648" stroke="#CE2827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
    </div>
    
    `,
  });

  $(".js-universities").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    adaptiveHeight: false,
    speed: 900,
    autoplaySpeed: 700,
    appendArrows: $("#universitysSlidercontrols"),
    prevArrow: `<div class="icon slick-prev">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="circle" d="M19.1667 9.83333C19.1667 14.988 14.988 19.1667 9.83333 19.1667C4.67868 19.1667 0.5 14.988 0.5 9.83333C0.5 4.67868 4.67868 0.5 9.83333 0.5C14.988 0.5 19.1667 4.67868 19.1667 9.83333Z" fill="#F7EBE8" stroke="#CE2827"/>
    <path class="arrow"  d="M12.1912 5.42529L7.32129 9.95835L12.2066 14.4648" stroke="#CE2827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    </div>
    
    `,
    nextArrow: `<div class="icon slick-next">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="circle" d="M0.499838 9.83333C0.499838 14.988 4.67851 19.1667 9.83317 19.1667C14.9878 19.1667 19.1665 14.988 19.1665 9.83333C19.1665 4.67868 14.9878 0.5 9.83317 0.5C4.67851 0.5 0.499838 4.67868 0.499838 9.83333Z" fill="#F7EBE8" stroke="#CE2827"/>
    <path class="arrow" d="M7.47526 5.42529L12.3452 9.95835L7.45989 14.4648" stroke="#CE2827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
    </div>
    
    `,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".js-events").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplay: false,
    adaptiveHeight: false,
    speed: 900,
    autoplaySpeed: 700,
    appendArrows: $("#eventSlidercontrols"),
    prevArrow: `<div class="icon slick-prev">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="circle" d="M19.1667 9.83333C19.1667 14.988 14.988 19.1667 9.83333 19.1667C4.67868 19.1667 0.5 14.988 0.5 9.83333C0.5 4.67868 4.67868 0.5 9.83333 0.5C14.988 0.5 19.1667 4.67868 19.1667 9.83333Z" fill="#F7EBE8" stroke="#CE2827"/>
    <path class="arrow"  d="M12.1912 5.42529L7.32129 9.95835L12.2066 14.4648" stroke="#CE2827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    </div>
    
    `,
    nextArrow: `<div class="icon slick-next">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="circle" d="M0.499838 9.83333C0.499838 14.988 4.67851 19.1667 9.83317 19.1667C14.9878 19.1667 19.1665 14.988 19.1665 9.83333C19.1665 4.67868 14.9878 0.5 9.83317 0.5C4.67851 0.5 0.499838 4.67868 0.499838 9.83333Z" fill="#F7EBE8" stroke="#CE2827"/>
    <path class="arrow" d="M7.47526 5.42529L12.3452 9.95835L7.45989 14.4648" stroke="#CE2827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    
    </div>
    
    `,
  });

  AOS.refresh();
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
