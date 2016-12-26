import React, {Component} from "react";
import frontPage from "../../decorators/frontpage";
// import AnalyticsAccordion from "../components/analytics-accordion";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	signature: state.get("analytics")
});

@frontPage()
class HomeView extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		const {
			signature
		} = this.props;
		return (
			<div className="container">
				<p> Hello</p>
			</div>
		)
	}
}


export default connect(mapStateToProps)(HomeView);
