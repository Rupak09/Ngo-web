import React from 'react'
import './Images.css'
const Images = () => {
    return (
        <><div className="Header">
            <h1> BLOG POSTING </h1>
            <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tristique cursus eleifend. In hac habitasse platea dictumst. Proin
                finibus, nisi a fermentum vulputate, mi magna efficitur libero, sed
                porttitor tellus massa vitae justo. Morbi elementum posuere ex in
                tincidunt.</h2>
        </div><div className="container">
                <h1>Organisation 1</h1>
                <div className="image-container">
                    <img src="./assets/turtle1.jpg" alt="Turtle1" />
                    <h2>Blog Post</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        tristique cursus eleifend. In hac habitasse platea dictumst. Proin
                        finibus, nisi a fermentum vulputate, mi magna efficitur libero, sed
                        porttitor tellus massa vitae justo. Morbi elementum posuere ex in
                        tincidunt.
                    </p>
                </div>
                <div className="image-container">
                    <h1>Organisation 2</h1>
                    <img src="./assets/turtle2.jpg" alt="Turtle2" />

                    <h2>Blog Post</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        tristique cursus eleifend. In hac habitasse platea dictumst. Proin
                        finibus, nisi a fermentum vulputate, mi magna efficitur libero, sed
                        porttitor tellus massa vitae justo. Morbi elementum posuere ex in
                        tincidunt.
                    </p>
                </div>
                <div className="container">
                    <h1>Organisation 3</h1>
                    <div className="image-container">
                        <img src="./assets/turtle3.jpg" alt="Turtle3" />
                        <h2>Blog Post</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            tristique cursus eleifend. In hac habitasse platea dictumst. Proin
                            finibus, nisi a fermentum vulputate, mi magna efficitur libero, sed
                            porttitor tellus massa vitae justo. Morbi elementum posuere ex in
                            tincidunt.
                        </p>
                    </div>
                    <div className="container">
                        <h1>Organisation 4</h1>
                        <div className="image-container">
                            <img src="./assets/turtle4.jpg" alt="Turtle4" />
                            <h2>Blog Post</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                tristique cursus eleifend. In hac habitasse platea dictumst. Proin
                                finibus, nisi a fermentum vulputate, mi magna efficitur libero, sed
                                porttitor tellus massa vitae justo. Morbi elementum posuere ex in
                                tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div></>

    );
};

export default Images;
