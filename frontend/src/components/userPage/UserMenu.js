import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const UserMenu = (props) => {
  const [t] = useTranslation();
  const { categories, currentCategory, onClickCategory } = props;

  return (
    <div className="container">
      <ListGroup>
        {categories.map((category) => (
          <ListGroupItem
            className=""
            tag="button"
            action
            active={category.categoryName === currentCategory}
            onClick={() => onClickCategory(category)}
            key={category.id}
          >
            {t(`${category.categoryName}`)}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserMenu;
