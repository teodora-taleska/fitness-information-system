import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const CreateEvent = () => {
    const [value, setValue] = useState('');
    console.log(value)

    return(
        <div className="write">
           <div className="content">
             <input type="text" placeholder="Title"/>
             <input type="text" placeholder="Location"/>
             <input type="date" placeholder="Date"/>
            <div className="editorContainer">
                <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
            </div>
           </div>

           <div className="menu">
            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status: </b> Draft
                </span>
                <span>
                    <b>Visibility: </b> Public
                </span>
                <input style={{display:"none"}} type="file" name="" id="file" />
                <label className="file" htmlFor="file">Upload Image</label>
                <div className="buttons">
                    <button>Save as a draft</button>
                    <button>Submit</button>
                </div>
            </div>
            <div className="item">
                <h1>Category</h1>

                <div className="cat">
                    {/* gym workouts, Zumba, yoga, group cycling, gymnastics, aerobics,  */}
                    <input type="radio" name="cat" value="gym" />
                    <label htmlFor="gym">Gym</label>
                </div>
               
               <div className="cat">
                  <input type="radio" name="cat" value="zumba" />
                    <label htmlFor="zumba">Zumba</label>
               </div>
              
              <div className="cat">
                    <input type="radio" name="cat" value="yoga" />
                    <label htmlFor="yoga">Yoga</label>
                </div>

                <div className="cat">
                    <input type="radio" name="cat" value="group-cycling" />
                    <label htmlFor="group-cycling">Group cycling</label>
                </div>

                <div className="cat">
                    <input type="radio" name="cat" value="gymnastics" />
                    <label htmlFor="gymnastics">Gymnastics</label>
                </div>

                <div className="cat">
                    <input type="radio" name="cat" value="aerobics" />
                    <label htmlFor="aerobics">Aerobics</label>
                </div>

            </div>
           </div>
        </div>
    )
}

export default CreateEvent