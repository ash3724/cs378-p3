import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({id, title, description, imageName, price, onAdd, onRemove, itemCount}) => {
    return (
        <div className="item">
            <div className="food">
                <div className="item-image-box">
                <img src={`${process.env.PUBLIC_URL}/images/${imageName}`}  alt={title} />
                </div>
                <div className="menu-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="price-and-button">
                            <p className="price">{price}</p>
                        </div>
                    <div className="item-add">
                        <div className="item-configure">
                            <button onClick={onRemove} disabled={itemCount <= 0}>-</button>
                            <span className="item-count">{itemCount}</span>
                            <button onClick={onAdd}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

