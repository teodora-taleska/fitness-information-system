import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Event = () => {
    return(
        <div className="single-event">
           
           <div className="content">
                <img src="https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                
                <div className="edit">
                    <p>Posted 2 days ago</p>
                    <Link to={`/write?edit=2`}><FiEdit className="edit-b"/></Link>
                    <FiTrash className="edit-b"/>

                </div>
                <h1>Title</h1>

                

                <p>Date: </p>
                <p>Place: </p>
                <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna sit amet purus gravida. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Fermentum posuere urna nec tincidunt praesent. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Amet nisl suscipit adipiscing bibendum est ultricies. A scelerisque purus semper eget duis at tellus at. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Nibh praesent tristique magna sit amet purus gravida quis blandit. Nunc vel risus commodo viverra. Et netus et malesuada fames ac turpis egestas sed. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Est sit amet facilisis magna. Euismod nisi porta lorem mollis aliquam ut. Aliquet lectus proin nibh nisl condimentum id venenatis a. Elementum nisi quis eleifend quam adipiscing vitae proin. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                <p className="descr">Diam sollicitudin tempor id eu. Commodo viverra maecenas accumsan lacus. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Mauris rhoncus aenean vel elit scelerisque mauris. Morbi tincidunt ornare massa eget egestas. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Ut pharetra sit amet aliquam id. Fermentum odio eu feugiat pretium nibh. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Mi bibendum neque egestas congue quisque. Scelerisque eleifend donec pretium vulputate sapien nec. Aliquam purus sit amet luctus venenatis lectus magna. Lacus sed turpis tincidunt id aliquet risus. Aliquet lectus proin nibh nisl condimentum id. Faucibus vitae aliquet nec ullamcorper. Orci ac auctor augue mauris augue neque gravida in fermentum. Ac turpis egestas integer eget. Consequat semper viverra nam libero.</p>
                <button>RESERVE A SLOT</button>
           </div>
           <Menu />
           
        </div>
    )
}

export default Event