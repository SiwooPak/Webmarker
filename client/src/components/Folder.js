import Bookmark from "./Bookmark";
import { useState, useEffect } from "react";
import AddBookmark from "./AddBookmark";

function Folder() {
  //저장된 북마크 수
  const [bookmarkCount, setBookmarkCount] = useState([1, 2, 3]);
  //입력된 북마크 정보
  const [bookmarkInput, setbookmarkInput] = useState({
    id: null,
    url: "",
  });

  // useEffect(() => {
  // 	if () {
  // 		setbookmarkInput({
  // 			id: data.id,
  // 			url: data.url,
  // 		});
  // 	} else {
  // 		handler();
  // 	}
  // }, []);

  const handler = () => {
    setbookmarkInput({
      id: null,
      url: "",
    });
  };

  return (
    <section className="folder-wrapper">
      {bookmarkCount.length === 0 ? (
        <span>저장된 북마크가 없습니다.</span>
      ) : (
        <div className="single-folder">
          Foldername
          {bookmarkCount.map(() => (
            <Bookmark />
          ))}
        </div>
      )}
      <div>
        <AddBookmark />
      </div>
    </section>
  );
}

export default Folder;
