import {Component} from '@angular/core';

type ProductCategory = 'Cakes & Bars' | 'Cookies' | 'Puppy Chow' | 'Other / Seasonal';

interface ProductItem {
  name: string;
  category: ProductCategory;
  description: string;
}

interface GalleryItem {
  title: string;
  imageUrl: string;
}

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly categories: Array<ProductCategory | 'All'> = [
    'All',
    'Cakes & Bars',
    'Cookies',
    'Puppy Chow',
    'Other / Seasonal'
  ];

  selectedCategory: ProductCategory | 'All' = 'All';
  selectedPhoto: GalleryItem | null = null;

  readonly facebookSearchUrl = 'https://www.facebook.com/search/top?q=sinful%20pastries';

  readonly products: ProductItem[] = [
    {
      name: 'Mini Cake, Cake and Cupcake Flavors',
      category: 'Cakes & Bars',
      description: "Our cakes are made to be bold, indulgent, and unforgettable. Whether you’re grabbing a mini cake for yourself, a box of cupcakes for an event, or building the perfect dessert table, every bite is crafted with rich flavors, premium ingredients, and a little bit of sinful fun.Our mini cakes are the perfect personal-sized treat. Each one is layered with moist cake, creamy fillings, and decadent toppings that make every bite feel like a celebration. Our cupcakes are baked fresh and topped with smooth, flavorful frosting and creative finishes. They’re perfect for parties, gifts, or when you just need a sweet moment in your day.We rotate flavors throughout the season."
    },
    {
      name: 'Bars',
      category: 'Cakes & Bars',
      description: 'Our dessert bars are the perfect mix of rich, gooey, and over-the-top indulgent. Made in small batches and packed with flavor, these handheld treats deliver everything you love about bakery desserts in one delicious square. Our Brookies are the best of both worlds and combine a rich, fudgy brownie with a soft chocolate chip cookie layer. Each one is topped with our signature chocolate buttercream frosting and finished with a generous peanut butter drizzle for the ultimate sweet-and-salty bite. Our Cake Bars feature rotating flavors throughout the year, so there’s always something new to try. The crowd favorite is our Reese’s Browned Butter Cake Bar, a rich browned-butter cake loaded with chocolate chips and Reese’s Pieces, delivering the perfect balance of nutty, chocolatey goodness in every bite. A classic done right. Our Scotcheroos combine chewy peanut butter and crispy rice cereal with a smooth layer of chocolate and butterscotch topping. Sweet, chewy, and nostalgic, they’re always a customer favorite.'
    },
    {
      name: 'Chocolate-Covered Strawberry Cupcakes',
      category: 'Cookies',
      description: 'Rich chocolate cake, berry center, and whipped strawberry buttercream.'
    },
    {
      name: 'Brookie Trays',
      category: 'Cookies',
      description: 'Half brownie, half cookie bars that travel well for market pick-up orders.'
    },
    {
      name: 'Monster Cookie Bars',
      category: 'Cookies',
      description: 'Peanut butter oats, candies, and chocolate chips in thick, shareable bars.'
    },
    {
      name: 'Cookie Dough Squares',
      category: 'Cookies',
      description: 'Creamy no-bake squares finished with a chocolate drizzle.'
    },
    {
      name: 'Hot Cocoa Bombs',
      category: 'Cookies',
      description: 'Holiday favorite with premium cocoa blend and mini marshmallows.'
    },
    {
      name: 'Smore Bark',
      category: 'Cookies',
      description: 'Milk chocolate bark with graham crunch and toasted marshmallow pieces.'
    },
    {
      name: 'Cookie & Cream Balls',
      category: 'Cookies',
      description: 'Bite-size treats dipped in chocolate, great for platters and events.'
    }
  ];

  readonly galleryItems: GalleryItem[] = [
    {title: 'Market Tray Assortment', imageUrl: 'assets/photos/IMG_3998.jpeg'},
    {title: 'Cupcake Display', imageUrl: 'assets/photos/IMG_3999.jpeg'},
    {title: 'Featured Bake Table', imageUrl: 'assets/photos/IMG_4596.JPG'},
    {title: 'Seasonal Treat Set', imageUrl: 'assets/photos/IMG_6703.JPG'},
    {title: 'Custom Order Preview', imageUrl: 'assets/photos/8738A8AD-F503-45F0-B2EF-6F7BACE95216.png'}
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'How do pre-orders work for market pickups?',
      answer: 'Send a Facebook message or email with your order details, and we will confirm pickup window and payment options.',
      open: true
    },
    {
      question: 'Can I request custom flavors?',
      answer: 'Yes. Most custom flavor requests can be accommodated with at least 5 days notice.',
      open: false
    },
    {
      question: 'Do you offer holiday platters?',
      answer: 'Yes. Holiday trays include a rotating assortment of bars, balls, bark, and decorated sweets.',
      open: false
    }
  ];

  get visibleProducts(): ProductItem[] {
    if (this.selectedCategory === 'All') {
      return this.products;
    }

    return this.products.filter((item) => item.category === this.selectedCategory);
  }

  selectCategory(category: ProductCategory | 'All'): void {
    this.selectedCategory = category;
  }

  openPhoto(photo: GalleryItem): void {
    this.selectedPhoto = photo;
  }

  closePhoto(): void {
    this.selectedPhoto = null;
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
