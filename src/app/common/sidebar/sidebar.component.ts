import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy, AfterViewInit {
  private sidebarNavbar: HTMLElement | null = null;
  private menuInnerShadow: HTMLElement | null = null;
  private scrollListener = this.onSidebarScroll.bind(this);

  ngOnInit(): void {
    this.menuInnerShadow = document.querySelector('.menu-inner-shadow');
  }

  ngAfterViewInit(): void {
    this.sidebarNavbar = document.getElementById('sidebar-navbar');
    if (this.sidebarNavbar) {
      this.sidebarNavbar.addEventListener('scroll', this.scrollListener);
    }
  }

  ngOnDestroy(): void {
    if (this.sidebarNavbar) {
      this.sidebarNavbar.removeEventListener('scroll', this.scrollListener);
    }
  }

  private onSidebarScroll(): void {
    if (this.sidebarNavbar && this.sidebarNavbar.scrollTop > 30) {
      this.menuInnerShadow?.classList.remove('d-none');
    } else {
      this.menuInnerShadow?.classList.add('d-none');
    }
  }
}
