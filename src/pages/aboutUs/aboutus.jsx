import React, {Component} from 'react';
import './aboutus.css'
import logo from "../../assets/LOGO.svg"
import inst from "../../assets/інста.png";
import twit from "../../assets/Vector (1).png";

class Aboutus extends Component {
    render() {
        return (
            <div className={'aboutusBody'}>
                <div className={'top-text-location'}>
                    <div className={'text-words'}>
                        “Ми продаємо тільки якісний товар!”
                    </div>
                    <div className={'text-whotold'}>
                        Засновник магазину
                    </div>
                    <div><img src={logo}/></div>

                </div>
                <div className={'aboutusBody-text'}>
                    <div className={'text2'}>
                        Про Coast to Coast
                    </div>
                    <svg width="50%" height="1">
                        <line x1="0" y1="0.5" x2="50%" y2="0.5" stroke="white" strokeWidth="1"/>
                    </svg>


                    <div className={'text-location'}>
                        <div className={'text2'}>
                            Coast to Coast
                        </div>
                        <div className={'text3'}>

                            - це компанія, яка спеціалізується на продажу електроніки.
                            Ми були засновані 2 роки тому, і за цей час стали відомими своїми якісними та надійними
                            товари, а також відмінним
                            сервісом.
                            <br/>
                            Сьогодні наша компанія працює в онлайн-режимі як інтернет-магазин
                            <br/>
                            Ми спеціалізуємося на продажу якісної електроніки, такої як смартфони, планшети,
                            ноутбуки,кухонна техніка
                            Наш магазин пропонує широкий вибір товарів від провідних виробників з усього світу.
                            Ми віддаємо перевагу продукції, яка має високу якість та надійність,
                            а також забезпечуємо гарантію на всі товари, що продаються.
                            <br/>
                            У нас ви знайдете привабливі ціни на весь асортимент продукції, а також швидку та безпечну
                            доставку в будь-який
                            куточок України.
                            <br/>
                            Наші фахівці з радістю допоможуть вам з вибором товарів, відповідатимуть на всі ваші
                            запитання та нададуть
                            вам необхідну інформацію.
                            <br/>
                            Ми цінуємо наших клієнтів та дбаємо про їх задоволення, тому пропонуємо конкурентоспроможні
                            ціни та акції
                            на весь асортимент продукції.
                            Ми впевнені, що з Coast to Coast ви отримаєте найкращу електроніку з найкращим сервісом!
                            Ми прагнемо забезпечити нашим клієнтам максимальний комфорт та задоволення від покупок у
                            нашому магазині.
                            Будь ласка, звертайтеся до нас з будь-якими запитаннями або пропозиціями.
                        </div>
                        <div className={'text2'}>
                            Ми завжди раді вам допомогти!
                        </div>
                    </div>
                    <div className={'resources-location'}>
                        <div><img src={inst}/></div>
                        <div><img src={twit}/></div>
                        <div>coastotcoast@gmail.com</div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Aboutus;