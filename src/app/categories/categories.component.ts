import { Component, OnInit } from '@angular/core';

// Define an interface for our category object for better code quality and autocompletion
interface Category {
  name: string;
  link: string;
  image: string;
  tagline: string;        // The benefit-driven tagline for the card
  isBestseller?: boolean; // An optional flag to show the "Bestseller" badge
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  standalone:false// Corrected property is 'styleUrls'
})
export class CategoriesComponent implements OnInit {

  // The main array holding all the data for our premium category cards
  categories: Category[] = [];

  constructor() { }

//  { name: 'Pet Tech', link: '/item/category/Pet Tech', image: 'path/to/pet.jpg', tagline: 'Keep Them Safe & Happy', isBestseller: true },
//{ name: 'Smart Home', link: '/item/category/Smart Home', image: 'path/to/home.jpg', tagline: 'Automate Your Everyday' },
//{ name: 'Wellness', link: '/item/category/Wellness', image: 'path/to/wellness.jpg', tagline: 'Upgrade Your Body' }

  ngOnInit(): void {
    this.categories = [
      {
        name: 'Smart Home ', 
        image: '../../assets/SoapDispensor.png',
        link: 'item/category/SmartHome',
        tagline: 'Seamless interaction for home architecture',
        isBestseller: true                 
      },
      {
        name: 'Pet Tech',
        image: '../../assets/PetTechCover.png',
        link: 'item/category/PetTech',
        tagline: 'Automated care for the modern companion'
      },
      {
        name: 'Wellness & Recovery Tech',
        image: '../../assets/WellnessCoverPhoto.png',
        link: 'item/category/Wellness',
        tagline: 'Advanced performance engineering'  
      },
      {
        name: 'Tech Bundles Combo',
        image: '../../assets/bannerFrugool.png',
        link: 'item/category/Bundles',
        tagline: 'Integrated hardware systems'  
      }//,
      //{
      //  name: 'Jewellery',
      //  image: '../../assets/morningWaterGreen.png',
      //  link: 'item/category/Jewellery',
      //  tagline: 'Symbols of Devotion'      // Added tagline
      //},
    ];
  }
}
