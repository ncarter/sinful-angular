import { Component } from '@angular/core';

interface BakeryEvent {
  title: string;
  date: string;
  location: string;
  time: string;
  notes: string;
}

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.css'],
    standalone: false
})
export class OtherComponent {
  showPast = false;

  readonly events: BakeryEvent[] = [
    {
      title: 'Spring Makers Market',
      date: '2026-03-28',
      location: 'Carlisle Community Park, Carlisle IA',
      time: '9:00 AM - 1:00 PM',
      notes: 'Featured: cupcake packs, brookies, and no-bake boxes.'
    },
    {
      title: 'Easter Pop-Up',
      date: '2026-04-04',
      location: 'Southridge Vendor Hall, Des Moines IA',
      time: '10:00 AM - 2:00 PM',
      notes: 'Seasonal platter pre-order pickup available.'
    },
    {
      title: 'Carlisle Farmers Market Opening Day',
      date: '2026-05-09',
      location: 'Carlisle Square, Carlisle IA',
      time: '8:00 AM - 12:00 PM',
      notes: 'Returning favorites and first summer flavor drop.'
    },
    {
      title: 'Summer Vendor Show',
      date: '2026-06-20',
      location: 'Indianola Downtown Pavilion, Indianola IA',
      time: '9:00 AM - 3:00 PM',
      notes: 'Mix-and-match dozen pre-orders encouraged.'
    },
    {
      title: 'Holiday Preview Market',
      date: '2026-11-14',
      location: 'Carlisle High School Commons, Carlisle IA',
      time: '10:00 AM - 4:00 PM',
      notes: 'Holiday cocoa bombs and bark assortments launch.'
    }
  ];

  get filteredEvents(): BakeryEvent[] {
    if (this.showPast) {
      return this.events;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.events.filter((event) => new Date(`${event.date}T00:00:00`) >= today);
  }

  formatDate(date: string): string {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(new Date(`${date}T00:00:00`));
  }

  togglePast(): void {
    this.showPast = !this.showPast;
  }
}
