import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'; // تغيير طريقة الاستيراد
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';

@Component({
  selector: 'app-courses-contant',
  templateUrl: './courses-contant.component.html',
  styleUrls: ['./courses-contant.component.css'],
})
export class coursescontantComponent implements AfterViewInit {
  swiper?: Swiper; // إضافة متغير لتخزين instance الخاص بـ Swiper

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.initializeSwiper();
      this.setupSlideHoverEffects();
    }
  }

  private initializeSwiper(): void {
    this.swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Autoplay, EffectCoverflow],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
          },
        },
      },
    });
  }

  private setupSlideHoverEffects(): void {
    if (typeof document !== 'undefined') {
      const slides = document.querySelectorAll<HTMLElement>('.swiper-slide');
      slides.forEach((slide) => {
        slide.addEventListener('mouseenter', () => {
          if (!slide.classList.contains('swiper-slide-active')) {
            slide.style.transform = 'scale(0.95) translateY(-10px)';
          }
        });

        slide.addEventListener('mouseleave', () => {
          if (!slide.classList.contains('swiper-slide-active')) {
            slide.style.transform = 'scale(0.9)';
          }
        });
      });
    }
  }
}
