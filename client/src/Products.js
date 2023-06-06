import React from "react";

const products = ({ task }) => {
  return (
    <div>
      <div className="row">
        {task.map((task) => (
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={task.recipe.image}
                class="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <center>
                  <h4 class="card-title">{task.recipe.label}</h4>
                  <p class="card-text">
                    Total Amount of Calories:{Math.round(task.recipe.calories)}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Buy
                  </a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default products;
