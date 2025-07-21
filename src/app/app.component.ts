import { Component } from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {MacaroonType} from "./types/macaroon.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'macaroon';

  public phone: string = '+375 (29) 368-98-68';
  public instagram: string = 'instagram.png';

  public showPresent: boolean = true;

  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  public macaroons: MacaroonType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      amount: '1 шт.',
      price: '2,80 руб.',
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      amount: '1 шт.',
      price: '1,60 руб.',
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      amount: '1 шт.',
      price: '2,60 руб.',
    },
  ];

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(macaroon: MacaroonType, target: HTMLElement): void {
    this.scrollTo(target);

    this.formValues.macaroonTitle = macaroon.title.toUpperCase();

  }

  // создаем объект, который хранит данные с наших инпутов
  // по факту это получается литерал
  // для использования директивы ngModel нужно импортировать FormsModule
  public formValues = {
    macaroonTitle: '',
    name: '',
    phone: '',
  }

  public createOrder() {
    if (!this.formValues.macaroonTitle) {
      alert('Выберите макарун');
      return;
    }
    if (!this.formValues.name) {
      alert('Заполните имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    // ajax
    alert('Спасибо за заказ!');

    this.formValues = {
      macaroonTitle: '',
      name: '',
      phone: '',
    }
  }
}
