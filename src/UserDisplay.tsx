import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

const UserDisplay = () => {
	const user = useSelector((state: AppState) => state.user);

	if (user) {
		console.log("user NEW", user);
		return (
			<>
				<div>
					<label>username:</label>
					&nbsp;{user.username}
				</div>
				<div>
					<label>email:</label>
					&nbsp;{user.email}
				</div>
				<div>
					<label>username:</label>
					&nbsp;{user.city}
				</div>
			</>
		);
	} else {
		return <>{null}</>;
	}
};

export default UserDisplay;
