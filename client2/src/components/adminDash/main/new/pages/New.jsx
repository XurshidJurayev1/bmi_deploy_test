import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef } from "react";
import {connect} from 'react-redux'
import {addNews} from '../../../../../action'
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

const NewsAdd = (props) => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  console.log(props)

  const submit = (e) => {
    e.preventDefault()

    const news = {file, title, text, link}

    props.addNews(news)

  }

  return (
    <div className="new">
        <div className="top">
          <h1>Add News</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <div style={{width: '100%'}}>
                  {text}   
                </div>
          </div>
          <div className="right">
            <form onSubmit={submit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
                <div className="formInput" >
                  <label>Title</label>
                  <input 
                    type='text' 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    placeholder='title' />
                </div>
                <div className="formInput" >
                  <label>Link</label>
                  <input 
                    type='text' 
                    value={link}
                    onChange={(e)=> setLink(e.target.value)}
                    placeholder='title' />
                </div>

                <div className="formInput">
                  <EditorToolbar toolbarId={'t2'}/>
                  <ReactQuill
                    theme="snow"
                    value={text}
                    onChange={(NewContent)=> setText(NewContent)}
                    placeholder={"Write something news text..."}
                    modules={modules('t2')}
                    formats={formats}
                  />
                </div>

                
              
                
            
              <button type="submit" className='new_button'>Send</button>
              
              

            </form>
          </div>
          <div>
          </div>
        </div>
        
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    news: state.addNews
  }
}

export default connect(mapStateToProps, {addNews})(NewsAdd);
