import yoga from "../../assets/yoga.svg";
import swim from "../../assets/swim.svg";
import bike from "../../assets/bike.svg";
import fitness from "../../assets/fitness.svg";
import "./SideBar.css";

/**
 * The SideBar function returns a div with the className of sidebarContainer, which contains two divs,
 * one with the className of sidebarIcons, which contains four images, and one with the className of
 * sidebarRights, which contains the text 'Copyright, SportSee 2020'.
 * @returns The aside element representing the SideBar component.
 */
function SideBar() {
	return (
		<aside className="sidebarContainer">
			<div className="sidebarIcons">
				<img src={yoga} alt="Yoga" />
				<img src={swim} alt="Swim" />
				<img src={bike} alt="Bike" />
				<img src={fitness} alt="Fitness" />
			</div>
			<div className="sidebarRights">Copyright, SportSee 2020</div>
		</aside>
	);
}

export default SideBar;
