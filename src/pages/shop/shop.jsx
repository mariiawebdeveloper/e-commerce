import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Slider from "../../components/Slider";

export const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
        ? PRODUCTS.filter((product) => product.category === selectedCategory)
        : PRODUCTS;

    return (
        <div className="shop">
            <div className="flex-preMain">
                <div className="preMain-text">
                    <div>Найкращий магазин </div> <div> техніки</div>
                </div>
            </div>

            <div>
                <Slider />
            </div>

            <div className="category-buttons">
                <button
                    className={selectedCategory === "" ? "active" : ""}
                    onClick={() => handleCategoryChange("")}
                >
                    Все
                </button>
                <button
                    className={selectedCategory === "Laptop" ? "active" : ""}
                    onClick={() => handleCategoryChange("Laptop")}
                >
                    Ноутбуки
                </button>
                <button
                    className={selectedCategory === "phone" ? "active" : ""}
                    onClick={() => handleCategoryChange("phone")}
                >
                    Смартфони
                </button>
                <button
                    className={selectedCategory === "music" ? "active" : ""}
                    onClick={() => handleCategoryChange("music")}
                >
                    Музика
                </button>
                <button
                    className={selectedCategory === "kitchen" ? "active" : ""}
                    onClick={() => handleCategoryChange("kitchen")}
                >
                    Кухня
                </button>
                <button
                    className={selectedCategory === "TV" ? "active" : ""}
                    onClick={() => handleCategoryChange("TV")}
                >
                    ТВ
                </button>
            </div>

            <div className="products">
                {filteredProducts.map((product) => (
                    <Product data={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};