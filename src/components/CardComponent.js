import React from 'react'

const CardComponent = (props) => {
  return (
<div className="card rounded-lg shadow my-3">
  <div className="card-body row">
    <div className="col-2 p-3">
      <img src={props.avatar_url} height='100' width='100' alt="Card cap" className="rounded-circle shadow" />
      </div>
    <div className="col-10">
    <h4 className="card-title">{props.nameData}</h4>
    <p className="card-text">{props.typeData}</p>
    <a href={props.urlData} className="btn btn-primary">Link Here</a>
      </div>
  </div>
</div>
  )
}

export default CardComponent;