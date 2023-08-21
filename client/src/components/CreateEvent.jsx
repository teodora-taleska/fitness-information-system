import axios from "axios";
import moment from "moment";
import React, { useContext } from "react";
import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const CreateEvent = () => {
    const {currentUser} = useContext(AuthContext);
    // The description
    const [value, setValue] = useState( '');
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState("")
    const [date, setDate] = useState( null)
    const [img, setImg] = useState("")
    const [cat, setCat] = useState('')
    const [capacity, setCapacity] = useState(0)

    const[inputs, setInputs] = useState({
        title:"",
        descr:"",
        date:"",
        place: "",
        capacity:0,
        img:"",
        cat:"",
        postDate: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        userId: currentUser.userId
      })


    const handleSubmit = async  e =>{
        e.preventDefault()

        setInputs(prev => ({
            ...prev, 
            title: title, 
            descr: value, 
            date: date, 
            place: location, 
            capacity: capacity,
            img: img, 
            cat: cat, 
            postDate:  moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"), 
            userId: currentUser.userId
        }))

        try{
            const res = await axios.post("http://88.200.63.148:5067/api/events", inputs)
            console.log(res)

        }catch(err){
            console.log(err)
        }
    }


    return(
        <div className="write">
           <div className="content">
             <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
             <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)}/>
             <input type="datetime-local" placeholder="Date"  value={date}
             onChange={e => {
                const selectedDateTime = new Date(e.target.value);
                const d = new Date(selectedDateTime.toISOString())
                const year = d.getUTCFullYear();
                const month = String(d.getUTCMonth()+1).padStart(2, '0');
                const day = String(d.getUTCDate()).padStart(2, '0');
                const hours = String(d.getUTCHours()+2).padStart(2, '0');
                const minutes = String(d.getUTCMinutes()).padStart(2, '0');
                const seconds = String(d.getUTCSeconds()).padStart(2, '0');
                const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                setDate(formattedDate);
             }}/>
            
            <div className="editorContainer">
                <ReactQuill className="editor"theme="snow" value={value} onChange={value => setValue(value)} />
            </div>
           </div>

           <div className="menu">
            <div className="item">
                <h1>Category</h1>

                <div className="cat">
                    {/* gym workouts, Zumba, yoga, group cycling, gymnastics, aerobics,  */}
                    <input type="radio" name="cat" checked={cat === "gym"} value="gym" onChange={e => setCat(e.target.value)}/>
                    <label htmlFor="gym">Gym</label>
                </div>

               
               <div className="cat">
                  <input type="radio" name="cat" checked={cat === "zumba"} value="zumba" onChange={e => setCat(e.target.value)}/>
                    <label htmlFor="zumba">Zumba</label>
               </div>
              
              <div className="cat">
                    <input type="radio" name="cat" checked={cat === "yoga"} value="yoga" onChange={e => setCat(e.target.value)}/>
                    <label htmlFor="yoga">Yoga</label>
                </div>

                <div className="cat">
                    <input type="radio" name="cat" checked={cat === "group-cycling"} value="group-cycling" onChange={e => setCat(e.target.value)}/>
                    <label htmlFor="group-cycling">Group cycling</label>
                </div>

                <div className="cat">
                    <input type="radio" name="cat" checked={cat === "gymnastics"} value="gymnastics" onChange={e => setCat(e.target.value)}/>
                    <label htmlFor="gymnastics">Gymnastics</label>
                </div>

                <div className="cat">
                    <input type="radio" name="cat" value="aerobics" checked={cat === "aerobics"} onChange={e => setCat(e.target.value)}/>
                    <label htmlFor="aerobics">Aerobics</label>
                </div>

            </div>
            <input type="number" name="capacity" placeholder="Enter capacity"  onChange={e => setCapacity(e.target.value)}/>
            <input className="url" onChange={e => setImg(e.target.value)} type="text" id="img" placeholder="Image URL" />
           

            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status: </b> Draft
                </span>
                <span>
                    <b>Visibility: </b> Public
                </span>

                <div className="buttons">
                    <button>Save as a draft</button>
                    <button onClick={handleSubmit}>Publish</button>
                </div>
            </div>
</div>
        </div>
    )
}

export default CreateEvent