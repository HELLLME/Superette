import { Component } from '@angular/core';

@Component({
  selector: 'app-ads-slider',
  templateUrl: './ads-slider.component.html',
  styleUrls: ['./ads-slider.component.css']
})
export class AdsSliderComponent {
  images: string[] = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg'
  ]; // Replace with your image URLs

  currentIndex: number = 0;

  ngOnInit(): void {

    setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds


  }

  nextSlide(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Reset to the first slide for infinite looping
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}



