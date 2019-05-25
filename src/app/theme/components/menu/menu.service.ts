import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Menu } from './menu.model';
//import { verticalMenuItems, horizontalMenuItems } from './menu';

@Injectable()
export class MenuService {

  verticalMenuItems : any;
  horizontalMenuItems : any;

  constructor(private location:Location,private router:Router){
    let temp =[];
    temp.push(
      new Menu (1, 'Dashboard', '/admin/dashboard', null, 'poll', null, false, 0, "red",true),
      new Menu (2, 'Moderate Members', '/admin/users', null, 'group', null, false, 0, "white",true),
      new Menu (3, 'Announcements ', '/admin/announcements', null, 'announcement', null, false, 0, "red",true),
      new Menu (4, 'Rewards', '/admin/rewards', null, 'school', null, true, 0, "red",true),
      new Menu (5, 'Coins', '/admin/rewards/coins', null, 'school', null, false, 4, "red",true),
      new Menu (6, 'Badges', '/admin/rewards/badges', null, 'school', null, false,4, "red",true),
      new Menu (7, 'Lookups', '/admin/lookups', null, 'school', null, false, 0, "white",true)
    );

    this.verticalMenuItems = temp;
    this.horizontalMenuItems = temp;
  } 
    
  public getVerticalMenuItems():Array<Menu> {
    return this.verticalMenuItems;
  }

  public getHorizontalMenuItems():Array<Menu> {
    return this.horizontalMenuItems;
  }

  public expandActiveSubMenu(menu:Array<Menu>){
      let url = this.location.path();
      let routerLink = url; // url.substring(1, url.length);
      let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
      if(activeMenuItem[0]){
        let menuItem = activeMenuItem[0];
        while (menuItem.parentId != 0){  
          let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
          menuItem = parentMenuItem;
          this.toggleMenuItem(menuItem.id);
        }
      }
  }

  public toggleMenuItem(menuId){
    let menuItem = document.getElementById('menu-item-'+menuId);
    let subMenu = document.getElementById('sub-menu-'+menuId);  
    if(subMenu){
      if(subMenu.classList.contains('show')){
        subMenu.classList.remove('show');
        menuItem.classList.remove('expanded');
      }
      else{
        subMenu.classList.add('show');
        menuItem.classList.add('expanded');
      }      
    }
  }

  public closeOtherSubMenus(menu:Array<Menu>, menuId){
    let currentMenuItem = menu.filter(item => item.id == menuId)[0]; 
    if(currentMenuItem.parentId == 0 && !currentMenuItem.target){
      menu.forEach(item => {
        if(item.id != menuId){
          let subMenu = document.getElementById('sub-menu-'+item.id);
          let menuItem = document.getElementById('menu-item-'+item.id);
          if(subMenu){
            if(subMenu.classList.contains('show')){
              subMenu.classList.remove('show');
              menuItem.classList.remove('expanded');
            }              
          } 
        }
      });
    }
  }
  

}
