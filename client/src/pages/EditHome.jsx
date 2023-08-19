import React, {useState} from "react";
import { FiEdit, FiSave } from "react-icons/fi";

const EditHome = ({adminNavClosed}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [paragraphText, setParagraphText] = useState("Are you ready to embark on a journey towards a stronger, fitter, and healthier version of yourself? Look no further than FusionFit. Our state-of-the-art fitness facility is designed to be your ultimate destination for achieving your wellness goals and transforming your lifestyle.");
    
    const handleEditClick = () => {
        setIsEditing(true);
      };
    
      const handleSaveClick = () => {
        setIsEditing(false);
      };
    
      const handleInputChange = (event) => {
        setParagraphText(event.target.value);
      };
    
    return(
        <div className={`edit-home phone ${adminNavClosed ? 'closed' : ''}`}>
           <section className="header">
                <div className="overlay"></div>
                <div className="content">
                    
                      <h2>BUILD <span>YOUR</span> BODY <br/>
                TRANSFORM <span>YOUR</span> MIND</h2> 
                    
                    
                
                        {isEditing ? (
                        <div>
                        <input className="edit"
                            type="text"
                            value={paragraphText}
                            onChange={handleInputChange}
                            autoFocus
                        />
                        <FiSave className="edit-btn" onClick={handleSaveClick}/></div>
                        ) : (
                        <div>
                        
                        <p><FiEdit className="edit-btn e" onClick={handleEditClick} />{paragraphText}</p>
                        
                        </div>
                        )}
          
                    {/* <p>Are you ready to embark on a journey towards a stronger, fitter, and healthier version of yourself? Look no further than FusionFit. Our state-of-the-art fitness facility is designed to be your ultimate destination for achieving your wellness goals and transforming your lifestyle.</p> */}
                
                    <button >CONTACT</button>
                    <button >READ MORE</button>

                </div>

            </section>
            <footer className="footer">
                <p>&copy; 2023 FusionFit Fitness Center. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default EditHome