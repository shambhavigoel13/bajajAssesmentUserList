import React from "react";
import CardComponent from "./CardComponent";

const ListCards = (props) => {
  return (
      props.users.map((user,index) => {
        return <CardComponent key={index} nameData={user.login} typeData={user.type} urlData={user.url.html_url} avatar_url={user.avatar_url}/>
      })
    );
};

export default ListCards;
