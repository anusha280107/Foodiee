import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuildCombo() {

  const navigate = useNavigate();

  const foods = [
    {
      id: 1,
      name: "Burger",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
    },
    {
      id: 3,
      name: "French Fries",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
    },
    {
      id: 4,
      name: "Sandwich",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500"
    },
    {
      id: 5,
      name: "Cold Coffee",
      price: 110,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
    }
  ];


  const [combo, setCombo] = useState([]);

  const [message, setMessage] = useState("");



  // Add food to combo
  const addItem = (food) => {


    if(combo.length >= 3)
    {
      setMessage("⚠ You can select only 3 dishes for your combo");
      return;
    }


    const alreadyAdded = combo.find(
      (item)=> item.id === food.id
    );


    if(alreadyAdded)
    {
      setMessage("⚠ This food is already added");
      return;
    }


    setCombo([...combo, food]);

    setMessage("");

  };




  // Remove food
  const removeItem = (index)=>{

    const updatedCombo = [...combo];

    updatedCombo.splice(index,1);

    setCombo(updatedCombo);

    setMessage("");

  };



  // Total price

  const total = combo.reduce(
    (sum,item)=> sum + item.price,
    0
  );



  // Move to checkout

  const proceedCheckout = ()=>{

    navigate("/checkout",{

      state:{
        comboItems: combo,
        totalAmount: total
      }

    });

  };



  return (

    <div className="combo-page">


      <h1>
        🍽 Build Your Own Combo
      </h1>


      <p>
        Select maximum 3 dishes and create your favourite meal.
      </p>



      {
        message &&
        <h3 className="message">
          {message}
        </h3>
      }




      <div className="combo-grid">


        {
          foods.map((food)=>(


            <div 
              className="combo-card"
              key={food.id}
            >


              <img
                src={food.image}
                alt={food.name}
              />


              <h3>
                {food.name}
              </h3>


              <h4>
                ₹ {food.price}
              </h4>



              <button
                className="combo-btn"
                onClick={()=>addItem(food)}
              >

                Add To Combo

              </button>


            </div>


          ))
        }


      </div>





      <div className="selected-combo">


        <h2>
          🍔 Your Combo
        </h2>



        {
          combo.length === 0 ?

          (
            <p>
              No food selected
            </p>
          )


          :


          (

            combo.map((item,index)=>(


              <div
                className="combo-item"
                key={index}
              >


                <span>
                  {item.name}
                </span>


                <span>
                  ₹ {item.price}
                </span>



                <button
                  className="remove-btn"
                  onClick={()=>removeItem(index)}
                >

                  Remove

                </button>


              </div>


            ))

          )

        }



        <hr/>


        <h2>
          Total : ₹ {total}
        </h2>




        {
          combo.length > 0 &&

          <button
            className="checkout-btn"
            onClick={proceedCheckout}
          >

            Proceed To Checkout

          </button>

        }



      </div>



    </div>

  );

}


export default BuildCombo;