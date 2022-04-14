import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { AppState } from "./store/AppState";

const PostDisplay = () => {
	const renderCount = useRef(0);
	console.log("renders post display", renderCount.current++);
	const post = useSelector((state: AppState) => state.post);

	if (post) {
		return (
			<>
				<div>
					<label>id:</label>
					&nbsp;{post.id}
				</div>
				<div>
					<label>title:</label>
					&nbsp;{post.title}
				</div>
				<div>
					<label>body:</label>
					&nbsp;{post.body}
				</div>
			</>
		);
	} else {
		return <>{null}</>;
	}
};

export default React.memo(PostDisplay);
