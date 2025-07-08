import { useEffect, useState } from "react";
import Header from "../Header";
import './index.css'

const Data = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const jsonData = await response.json();
    setCommentsData(jsonData);
    setUpdatedData(jsonData);
  };

  const onChangeSearchInput = (e)=>{
    setSearchInput(e.target.value);
    const newData = commentsData.filter(eachElement => eachElement.name.toLowerCase().includes(searchInput.toLowerCase()) || eachElement.body.toLowerCase().includes(searchInput.toLowerCase()) || eachElement.email.toLowerCase().includes(searchInput.toLowerCase()));
    setUpdatedData(newData);
  }

  return (
    <>
      <Header />
      <div className="data-bg">
        <input className="searchInput" value={searchInput} onChange={onChangeSearchInput} type="search" placeholder="Search name, email, comment"/>
      <table className="table">
        <tr>
          <th>Post Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
        </tr>

        {updatedData.splice(offset, offset+limit).map((eachElement) => (
          <tr className="table-content">
            <td>{eachElement.postId}</td>
            <td>{eachElement.name}</td>
            <td>{eachElement.email}</td>
            <td>{eachElement.body}</td>
          </tr>
        ))}
      </table>
      </div>
    </>
  );
};

export default Data;
