/* import React, {useState} from 'react';

function Upload(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		selectedFile(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://localhost:3000/api/upload/upload>',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	    };

return(
        <div>
             <input type="file" name="file" onChange={changeHandler} />
             {setIsFilePicked ? (
                 <div>
                     <p>Filename: {selectedFile.name}</p>
                     <p>Filetype: {selectedFile.type}</p>
                     <p>Size in bytes: {selectedFile.size}</p>
                     <p>
                         lastModifiedDate:{' '}
                         {selectedFile.lastModifiedDate.toLocaleDateString()}
                     </p>
                 </div>
             ) : (
                 <p>Select a file to show details</p>
             )}
             <div>
                 <button onClick={handleSubmission}>Submit</button>
             </div>
        </div>
    )
};

export default Upload */

import axios from 'axios';
import React,{Component} from 'react'; 
class App extends Component { 

    state = { 
      selectedFile: null
    }; 
     
    onFileChange = event => { 
      this.setState({ selectedFile: event.target.files[0] }); 
    }; 
     
    onFileUpload = () => { 
      const formData = new FormData(); 
     
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      console.log(this.state.selectedFile); 
     
      axios.post("localhost:3000/api/upload/upload", formData); 
    }; 
     
    fileData = () => { 
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
      return ( 
        <div>  
            <h3> 
              File Upload 
            </h3> 
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
  export default App;